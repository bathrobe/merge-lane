# Design Document

> **Keep it play.** The moment it stops being fun, put it down. The experiment: can you create without it becoming another thing you're gripping?

## Concept

Interactive fiction. Episode 1 is a personality test wrapped in narrative—extended character creation. Player ends with a portable identity (seed phrase) they carry into future episodes.

## Episode 1

- **Length**: 5-10 minutes
- **Structure**: Linear narrative with branching choices
- **Output**: Constellation visualization + generated name + personality narrative + seed phrase + copyable card

## UI

Disco Elysium-inspired: full-bleed background with phone-width text panel on the right. Text and choices appear in the panel. Background changes based on narrative tags.

## Results

At the end, the player receives:

1. **Constellation**: 8 dots plotted circularly, LLM names the shape and writes a myth
2. **Generated name**: Two words (adjective + noun) from curated wordlists
3. **Personality narrative**: LLM synthesis of all 8 axes
4. **Bipolar axis display**: Shows position on each axis without implying "good" or "bad"
5. **Seed phrase**: 5 words encoding their character data

The card area is copyable as PNG for sharing.

## Aesthetic

**Utopian scholastic** — turn of 21st century Encarta/edutainment style. Educational software, illustrated books. Warm, earnest, slightly retro-futurist.

## Personality Axes

See `PERSONALITY_AXES.md`.

## Worldbuilding

In progress. See `world/` folder for creative process docs.

## Origin

From the "World ARG Thing" vision (2025-12-21): serialized interactive fiction where each episode has a shareable artifact, accumulating into a larger story. Joe's superpower is creating worlds people want to inhabit.
