// Personality axes (4-bit values, 0-15, starting at midpoint)
VAR elitist_populist = 8
VAR legible_illegible = 8
VAR sovereign_symphonic = 8
VAR anthro_xeno = 8
VAR mortal_immortalist = 8
VAR accel_steward = 8
VAR aligned_autonomous = 8
VAR apollonian_dionysian = 8

// Name indices (11-bit values for wordlist lookup)
VAR name_adj_index = 0
VAR name_noun_index = 0

# background: office

The examiner smiles at you from across the desk. Light spills through the window onto a clipboard waiting in front of you.

"Welcome to this assessment. Try to answer honestly—there are no wrong answers."

* "What's with the lines on your head?"
    ~ legible_illegible -= 1
    "Ah, you noticed." They tap their temple. "A visual aid. Helps me think."
    -> office_continue

* [Notice the impossible clouds outside]
    ~ apollonian_dionysian += 1
    Through the window, clouds drift past at eye level. You're... flying?
    "Don't worry about that," the examiner says gently. "Shall we begin?"
    -> office_continue

* "I don't trust therapists."
    "That's fair," they say. "What is it specifically?"
    * * "My thoughts are my own."
        ~ sovereign_symphonic -= 1
        "Noted. I'm not here to take them."
        -> office_continue
    * * "Who says you're qualified?"
        ~ elitist_populist += 1
        "A reasonable question." They gesture at the bookshelves. "Does it matter?"
        -> office_continue
    * * "This feels like a trick."
        ~ legible_illegible += 1
        "It might be. But you're here now."
        -> office_continue

=== office_continue ===
+ [...]
    -> question_one

=== question_one ===
# background: transition

Something clicks. A hum builds—like an engine spinning up, like a computer waking from sleep.

+ [...]
    -> baby_stage

=== baby_stage ===
# background: helix-tutor-v1

You find yourself on the ground. Your limbs are short. Your thoughts are simple. You are very, very small.

It's somewhere around the early 2030s. You can't tell time. You're a baby.

Your parents are gone somewhere. But a lifelike double helix hologram floats above you, googly eyes tracking your movement, one little hand waving. A price tag dangles from its midsection.

"Hello, little learner! I'm Helix. Your parents will be back soon—let's have fun until then!"

* [Put the helix in your mouth. You do things your own way.]
    ~ sovereign_symphonic -= 1
    You lunge for it, gums first. Your mouth closes on nothing—it's a hologram. The helix giggles.
    "Curious! I like that. But I'm not for eating."
    -> baby_continue

* [Stare at the security camera. You're being watched. Go on guard.]
    ~ legible_illegible -= 1
    Your eyes drift to the corner of the room. A small lens stares back. You hold its gaze. You'll be careful here.
    The helix tilts. "What are you looking at, little one?"
    -> baby_continue

* [Cry for your parents. You refuse to be educated by a clanker.]
    ~ anthro_xeno -= 1
    You open your mouth and wail. Real tears. Where are the humans? Where is warmth that breathes?
    The helix's expression doesn't change. "There, there. They'll be back. I promise."
    -> baby_continue

* [Babble happily. Make random nonsense noises. Just go for it.]
    ~ apollonian_dionysian += 1
    "Bwaaaah," you say. "Guh. Guhhhh. Pthhhhbbb."
    The helix beams. "Wonderful vocalization! You're doing great!"
    -> baby_continue

=== baby_continue ===
The lesson bubbles drift closer—one full of numbered animals, one growing letters in soil.

-> ending

=== ending ===
# background: stars
# show: results

The corridor dissolves. You float among stars, your answers crystallizing into patterns around you.

Your constellation takes shape...

-> END
