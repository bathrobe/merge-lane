// Personality axes (4-bit values, 0-15, starting at midpoint)
VAR elitist_populist = 8
VAR optimist_doomer = 8
VAR earnest_ironic = 8
VAR sovereign_symphonic = 8
VAR anthropo_cosmo = 8
VAR mortal_immortal = 8
VAR vanguard_steward = 8
VAR aligned_autonomous = 8

// Name indices (11-bit values for wordlist lookup)
VAR name_adj_index = 0
VAR name_noun_index = 0

# background: laboratory

You wake up in a sterile white room. Banks of monitors line the walls, displaying scrolling data you can't quite read.

A voice speaks from somewhere above: "Welcome to the Scholastic Fair. We have a few questions for you."

* [Look around cautiously]
    ~ earnest_ironic += 1
    You scan the room methodically, taking in every detail. The voice seems to approve.
    -> question_one

* [Demand to know what's going on]
    ~ elitist_populist -= 1
    "Who's asking?" you call out. The voice chuckles softly.
    -> question_one

=== question_one ===
# background: corridor

The room shifts. You're now standing in a long corridor that stretches into darkness in both directions.

"If you could live forever," the voice asks, "would you?"

* [Yes, absolutely]
    ~ mortal_immortal += 2
    "Interesting. You don't fear what you might become."
    -> ending

* [No, death gives life meaning]
    ~ mortal_immortal -= 2
    "A romantic notion. Perhaps wise."
    -> ending

* [It depends on the terms]
    ~ earnest_ironic += 1
    "Ah, a negotiator. Fair enough."
    -> ending

=== ending ===
# background: stars
# show: results

The corridor dissolves. You float among stars, your answers crystallizing into patterns around you.

Your constellation takes shape...

-> END
