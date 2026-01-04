import { useState, useCallback, useMemo, useRef } from "react";
import { Story } from "inkjs";
import { parseTags } from "../lib/tags";

export interface InkChoice {
  text: string;
  index: number;
}

export interface ParsedTags {
  background?: string;
  show?: string;
  [key: string]: string | undefined;
}

/**
 * Wrapper for reading Ink variables.
 * Use getVariable("name") to read a specific variable.
 */
export interface VariableReader {
  getVariable: (name: string) => unknown;
}

export interface UseInkStoryReturn {
  textHistory: string[];
  newBatchStartIndex: number;
  choices: InkChoice[];
  tags: ParsedTags;
  variables: VariableReader;
  continue: () => void;
  choose: (index: number) => void;
  reset: () => void;
  isEnded: boolean;
  hasPendingContent: boolean; // True when there's content waiting after a scene change
}

export function useInkStory(storyJson: object): UseInkStoryReturn {
  const story = useMemo(() => new Story(storyJson), [storyJson]);

  const [textHistory, setTextHistory] = useState<string[]>([]);
  const [newBatchStartIndex, setNewBatchStartIndex] = useState<number>(0);
  const [choices, setChoices] = useState<InkChoice[]>([]);
  const [tags, setTags] = useState<ParsedTags>({});
  const [isEnded, setIsEnded] = useState(false);
  const previousBackgroundRef = useRef<string | undefined>(undefined);

  // Pending content: text/tags waiting to be shown after a scene transition
  const [pendingText, setPendingText] = useState<string[]>([]);
  const [pendingTags, setPendingTags] = useState<ParsedTags>({});
  const [pendingChoices, setPendingChoices] = useState<InkChoice[]>([]);

  const continueStory = useCallback(() => {
    // First, check if we have pending content to display
    if (pendingText.length > 0) {
      // Display the pending content from a previous scene transition
      setTextHistory(pendingText);
      setNewBatchStartIndex(0);
      setTags(pendingTags);
      setChoices(pendingChoices);
      if (pendingTags.background) {
        previousBackgroundRef.current = pendingTags.background;
      }
      // Clear pending state
      setPendingText([]);
      setPendingTags({});
      setPendingChoices([]);
      setIsEnded(!story.canContinue && pendingChoices.length === 0);
      return;
    }

    if (!story.canContinue) return;

    const startingBackground = previousBackgroundRef.current;
    let currentBackground = startingBackground;
    let textBatch: string[] = [];
    let tagsBeforeChange: string[] = [];
    let tagsAfterChange: string[] = [];
    let overflowText: string[] = [];
    let hitBackgroundChange = false;

    while (story.canContinue) {
      const text = story.Continue();
      const lineTags = story.currentTags ?? [];

      // Check for background change on THIS line
      const parsedLineTags = parseTags(lineTags);

      if (!hitBackgroundChange && parsedLineTags.background && parsedLineTags.background !== currentBackground) {
        // Background change detected!
        // Everything from here on is "overflow" for the next scene
        hitBackgroundChange = true;
        currentBackground = parsedLineTags.background;

        // This line's text and tags go to overflow
        const lines = text.split('\n').map(line => line.trim()).filter(line => line);
        overflowText.push(...lines);
        tagsAfterChange = tagsAfterChange.concat(lineTags);

        // Continue collecting the rest into overflow
        while (story.canContinue) {
          const moreText = story.Continue();
          const moreLines = moreText.split('\n').map(line => line.trim()).filter(line => line);
          overflowText.push(...moreLines);
          tagsAfterChange = tagsAfterChange.concat(story.currentTags ?? []);
        }
        break;
      }

      // No background change yet, add to current batch
      tagsBeforeChange = tagsBeforeChange.concat(lineTags);
      const lines = text.split('\n').map(line => line.trim()).filter(line => line);
      textBatch.push(...lines);
    }

    // Collect choices (they belong to wherever the story stopped)
    const currentChoices = story.currentChoices.map((choice) => ({
      text: choice.text,
      index: choice.index,
    }));

    if (hitBackgroundChange) {
      // We have content before AND after the background change
      // Show the "before" content now, store the "after" as pending

      if (textBatch.length > 0) {
        // Append to existing history (same scene continues)
        setTextHistory(prev => {
          setNewBatchStartIndex(prev.length);
          return [...prev, ...textBatch];
        });
      }

      // Preserve current background if reply has no explicit background tag
      const parsedBeforeTags = parseTags(tagsBeforeChange);
      if (!parsedBeforeTags.background && startingBackground) {
        parsedBeforeTags.background = startingBackground;
      }
      setTags(parsedBeforeTags);
      setChoices([]); // Hide choices until pending content is shown

      // Store overflow for next continue
      setPendingText(overflowText);
      setPendingTags(parseTags(tagsAfterChange));
      setPendingChoices(currentChoices);
      setIsEnded(false);
    } else {
      // No background change, normal flow
      const parsedTags = parseTags(tagsBeforeChange);
      const newBackground = parsedTags.background;
      const backgroundChanged = newBackground !== undefined && newBackground !== startingBackground;

      // Preserve previous background if no new one specified
      if (newBackground !== undefined) {
        previousBackgroundRef.current = newBackground;
      } else if (startingBackground) {
        parsedTags.background = startingBackground;
      }

      if (textBatch.length > 0) {
        if (backgroundChanged) {
          setTextHistory(textBatch);
          setNewBatchStartIndex(0);
        } else {
          setTextHistory(prev => {
            setNewBatchStartIndex(prev.length);
            return [...prev, ...textBatch];
          });
        }
      }

      setTags(parsedTags);
      setChoices(currentChoices);
      setIsEnded(!story.canContinue && currentChoices.length === 0);
    }
  }, [story, pendingText, pendingTags, pendingChoices]);

  const choose = useCallback(
    (index: number) => {
      story.ChooseChoiceIndex(index);
      continueStory();
    },
    [story, continueStory]
  );

  const reset = useCallback(() => {
    story.ResetState();
    setTextHistory([]);
    setNewBatchStartIndex(0);
    setChoices([]);
    setTags({});
    setIsEnded(false);
    setPendingText([]);
    setPendingTags({});
    setPendingChoices([]);
    previousBackgroundRef.current = undefined;
    continueStory();
  }, [story, continueStory]);

  // Provide a stable function to read variables on demand
  const variables: VariableReader = useMemo(
    () => ({
      getVariable: (name: string) => story.variablesState.$(name),
    }),
    [story]
  );

  return {
    textHistory,
    newBatchStartIndex,
    choices,
    tags,
    variables,
    continue: continueStory,
    choose,
    reset,
    isEnded,
    hasPendingContent: pendingText.length > 0,
  };
}
