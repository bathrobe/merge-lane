# Personality Axes

8 axes tracked during play. Each is a 4-bit value (0-15), starting at midpoint (8). Visualized as constellation at end.

## The Eight

### 1. Elitist / Populist
Who should decide important things?

### 2. Optimist / Doomer
Where are things headed?

### 3. Earnest / Ironic
How do you mean what you say?

### 4. Sovereign / Symphonic
In a post-upload world, do you stay one or merge?

### 5. Anthropocentric / Cosmocentric
Are humans special, or are all minds equal?

### 6. Mortal / Immortalist
Accept death or fight it?

### 7. Vanguard / Steward
Race toward the future or protect what's here?

### 8. Aligned / Autonomous
Should superintelligence be controlled or trusted?

## Implementation

In Ink, each axis is a variable starting at midpoint:

```ink
VAR elitist_populist = 8
VAR optimist_doomer = 8
VAR earnest_ironic = 8
VAR sovereign_symphonic = 8
VAR anthropo_cosmo = 8
VAR mortal_immortal = 8
VAR vanguard_steward = 8
VAR aligned_autonomous = 8
```

Choices nudge values: `~ elitist_populist += 2`

## Display

Neither pole is "good" or "bad." Results show bipolar labels:

```
Elitist ────────●─── Populist
```
