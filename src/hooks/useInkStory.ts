import { useState, useCallback, useMemo } from "react";
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
  text: string;
  choices: InkChoice[];
  tags: ParsedTags;
  variables: VariableReader;
  continue: () => void;
  choose: (index: number) => void;
  reset: () => void;
  isEnded: boolean;
}

export function useInkStory(storyJson: object): UseInkStoryReturn {
  const story = useMemo(() => new Story(storyJson), [storyJson]);

  const [text, setText] = useState<string>("");
  const [choices, setChoices] = useState<InkChoice[]>([]);
  const [tags, setTags] = useState<ParsedTags>({});
  const [isEnded, setIsEnded] = useState(false);

  const syncState = useCallback(() => {
    setTags(parseTags(story.currentTags ?? []));
    setChoices(
      story.currentChoices.map((choice) => ({
        text: choice.text,
        index: choice.index,
      }))
    );
    setIsEnded(!story.canContinue && story.currentChoices.length === 0);
  }, [story]);

  const continueStory = useCallback(() => {
    if (!story.canContinue) return;

    let fullText = "";
    let allTags: string[] = [];
    while (story.canContinue) {
      fullText += story.Continue();
      // Accumulate tags from all Continue() calls
      allTags = allTags.concat(story.currentTags ?? []);
    }
    setText(fullText.trim());
    // Use accumulated tags instead of just the last batch
    setTags(parseTags(allTags));
    setChoices(
      story.currentChoices.map((choice) => ({
        text: choice.text,
        index: choice.index,
      }))
    );
    setIsEnded(!story.canContinue && story.currentChoices.length === 0);
  }, [story]);

  const choose = useCallback(
    (index: number) => {
      story.ChooseChoiceIndex(index);
      continueStory();
    },
    [story, continueStory]
  );

  const reset = useCallback(() => {
    story.ResetState();
    setText("");
    setChoices([]);
    setTags({});
    setIsEnded(false);
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
    text,
    choices,
    tags,
    variables,
    continue: continueStory,
    choose,
    reset,
    isEnded,
  };
}
