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

// State tracking
VAR took_the_stick = false

# background: office
# mood: therapist

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
# mood: childhood

You find yourself on the ground. Your limbs are short. Your thoughts are simple. You are very, very small.

It's somewhere around the early 2030s. You can't tell time. You're a baby.

Your parents are gone somewhere. But a shape floats above you—soft coral petals arranged like a pinwheel, two big googly eyes tracking your movement.

It's an AI device.

"Hello, little learner! Your parents will be back soon. Let's have fun until then!

"Would you like to play Number Safari, or English Jungle?"

* [Put the pinwheel in your mouth. You do things your own way.]
    ~ sovereign_symphonic -= 1
    You lunge for it, gums first. Your mouth closes on nothing—it's a hologram. The pinwheel giggles.
    "Curious! I like that. But I'm not for eating."
    -> tutor_end

* [Stare at the security camera. You're being watched. Go on guard.]
    ~ legible_illegible -= 1
    Your eyes drift to the corner of the room. A small lens stares back. You hold its gaze. You'll be careful here.
    The pinwheel tilts. "What are you looking at, little one?"
    -> tutor_end

* [Cry for your parents. You refuse to be educated by a clanker.]
    ~ anthro_xeno -= 1
    You open your mouth and wail. Real tears. Where are the humans? Where is warmth that breathes?
    The pinwheel's expression doesn't change. "There, there. They'll be back. I promise."
    -> tutor_end

* [Babble happily. Make random nonsense noises. Just go for it.]
    ~ apollonian_dionysian += 1
    "Bwaaaah," you say. "Guh. Guhhhh. Pthhhhbbb."
    The pinwheel beams. "Wonderful vocalization! You're doing great!"
    -> tutor_end

=== tutor_end ===

+ [...]
    -> leave_tutor

=== leave_tutor ===
# background: transition

The lesson drones on. Your AI assistant has started auto-playing—shapes and colors dancing without you.

You leave it on the floor and crawl toward the door.

+ [...]
    -> parents_search

=== parents_search ===
# background: parents_search

You crawl into the living room. No parents.

The TV is on—loud, urgent, shrill. Powerful-looking people in suits, talking over each other. Something about the economy. Something about the future. The powers that run the world, arguing about how to run it.

* [Stand in the glow of the powerful people. One day, you will be like them.]
    ~ elitist_populist += 1
    You sit and stare. These must be the people in charge. They look like they know things.
    -> parents_search_2

* [You feel disgusted. Elites. One day they'll get their just desserts.]
    ~ elitist_populist -= 1
    You'd throw a toy through the screen if you had the fine motor control.
    -> parents_search_2

* [The stomach tells more truth than the brain. Crawl toward the kitchen.]
    ~ apollonian_dionysian += 1
    Your stomach has opinions. You turn away from the noise and follow your nose.
    -> parents_search_2

* [Keep looking for your parents. You’re not merging with a screen.]
    ~ sovereign_symphonic -= 1
    You ignore the swirl of power and crawl away, sovereign individuality intact. 
    -> parents_search_2

=== parents_search_2 ===

"Hello?" you hear from your playroom. "We don't need to keep learning. But your parents would like it if I kept an eye on you."

It's that AI tutor again. You can feel its cutesy pinwheel behind you, thinking.

* [Invest in force multipliers. Team up with the AI for a tactical advantage.]
    ~ sovereign_symphonic += 1
    You babble and reach toward the pinwheel. It floats down, petals spinning with quiet satisfaction.
    "Smart," it says. "Two minds are better than one. Even if one runs on milk."
    -> parents_search_end

* [Stop. Think. The conclusion must follow logically from the premises.]
    ~ legible_illegible -= 1
    You sit back on your diaper and furrow your brow. Where were they last seen? What were the preconditions? You attempt to reconstruct the causal chain.
    The pinwheel watches, intrigued. "Are you... reasoning?"
    You are. Poorly. But visibly.
    -> parents_search_end

* [The mammal life isn't working. Revert to vegetation. Drift toward warmth.]
    ~ legible_illegible += 1
    You stop thinking entirely. A sunbeam cuts across the carpet. You crawl into it and go still.
    The pinwheel hovers, uncertain. "Are you... okay?"
    You're a houseplant now. Houseplants don't explain themselves.
    -> parents_search_end

=== parents_search_end ===

Nobody comes. The headlines keep scrolling. The house hums with absence.

+ [...]
    -> timeline

=== timeline ===
# background: timeline_feed

You wander toward one of the screens on the wall. You push a button. It recognizes you're one.

The feed reshapes itself. Bright colors. Simple sounds. Influencer toddlers hawking supplements. The algorithm knows exactly what you are, and it's optimized for *something*.

* [Scroll faster. More. Feed the algorithm and it will feed you.]
    ~ accel_steward -= 1
    You tap and swipe, tap and swipe. The content multiplies. The loop tightens.
    Somewhere, a model updates. You're both learning.
    -> timeline_end

* [Break the spell. The algorithm will not control you.]
    ~ accel_steward += 1
    You drop your hand. The colors keep dancing, but you're not watching anymore.
    This was never how babies were supposed to exist.
    -> timeline_end

=== timeline_end ===

The screen dims, waiting. You've made your first choice about the feed. It won't be your last.

+ [...]
    -> grandpa_room

=== grandpa_room ===
# background: grandpa_room

You feel something human in the next room. An older, wiser algorithm lures you forward.

Ah, there he is. The ancient one. He's nicer than the others, and around more. He smiles a small, tired smile.

* [Settle into his warmth. Let this fleeting moment be enough.]
    ~ mortal_immortalist -= 1
    His waxy hands will return to soil. His smile will fade to a gravestone's memory. But right now he's warm, here, present. Each thing in its place.
    -> grandpa_end

* [Study his face. Try to hold onto it.]
    ~ mortal_immortalist += 1
    One being just getting started. Another on his way out. Barely any overlap. Wish it wasn't like this.
    -> grandpa_end

=== grandpa_end ===
+ [...]
    -> interstitial_to_adolescence

=== interstitial_to_adolescence ===
# background: void

"Good."

{ sovereign_symphonic < 6:
    "You hold yourself apart."
}
{ sovereign_symphonic > 10:
    "You reach out easily."
}

{ legible_illegible < 6:
    "You want to be seen. Mapped."
}
{ legible_illegible > 10:
    "You slip between the lines."
}

"Time passes. You grow."

+ [...]
    -> adolescence_school

=== adolescence_school ===
# background: school_demolition
# mood: adolescence

You're taller now. You speak English.

They're tearing the school down — one of the last physical schools, they say. Going sim like the rest.

You never learned anything here, of course. But you had some good laughs, trapped in this carceral daycare with your friends.

Will you miss it?

* "I would nuke this place from orbit. Then wait for them to rebuild it and nuke it again."
    What did you hate most?
    * * "The schedule. The bells. Being herded like cattle through someone else's structure."
        ~ apollonian_dionysian += 1
        The bells. God, the bells. Your body still flinches at 3:15.
        -> school_demolition_end
    * * "Being surrounded by people and still feeling alone. No real connection."
        ~ sovereign_symphonic += 1
        Hundreds of kids. None of them really there. Just parallel loneliness.
        -> school_demolition_end
    * * "How slow it was. Years of my life for nothing. The sim would've taken weeks."
        ~ accel_steward -= 1
        Twelve years to learn what an AI could upload in an afternoon. Criminal.
        -> school_demolition_end
    * * "Being told what to think by people who stopped thinking years ago."
        ~ sovereign_symphonic -= 1
        Your mind is yours. Was yours. They tried to make it theirs.
        -> school_demolition_end

* "It sucked, but I don't want to be in a sim all day either."
    ~ accel_steward += 1
    Something about the friction. The bad air. The fluorescent hum. It was real, at least.
    -> school_demolition_end

=== school_demolition_end ===
+ [...]
    -> the_circle

=== the_circle ===
# background: the_circle

A voice behind you. "Last day of school, loser."

Your friends. They look different every time — taller, shorter, new eye color, new skin patch. Today one has scales running up her neck. Another's grown a foot since last week.

They all have the same port on their temple, though. They all cover it up with a little fake skin flap when mom or dad's nearby.

One holds out his palm. A little stick rests there, blinking.

"Wanna hit this?"

* [No thoughts. Head empty. Plug it in.]
    ~ apollonian_dionysian += 1
    ~ sovereign_symphonic += 1
    ~ took_the_stick = true
    You take it. You plug it in. When in Rome.
    -> circle_end

* "Is this ClearStream or SyncDrop? Heard Marcus had bad SyncDrop."
    ~ apollonian_dionysian -= 1
    "ClearStream. The good stuff. You in or not?"
    * * [Fine. I'm in.]
        ~ sovereign_symphonic += 1
        ~ took_the_stick = true
        -> circle_end
    * * "Umm. No thanks. I gotta drive later."
        ~ sovereign_symphonic -= 1
        ~ apollonian_dionysian -= 1
        They look at you. Nobody drives anymore.
        -> circle_end

* "My body, my choice."
    ~ sovereign_symphonic -= 1
    They can't tell if you're joking.
    -> circle_end

=== circle_end ===
+ [...]
    {took_the_stick: -> stick_trip}
    -> adolescence_grandpa

=== stick_trip ===
# background: void

A little death passes over your body. A brief glimpse into total dissolution into the ocean of data. You fear for your life, and try not to barf.

+ [...]
    -> adolescence_grandpa

=== adolescence_grandpa ===
# background: grandpa_hospital

{took_the_stick: Your phone buzzes. Family group chat. "Come to the hospital. It's Grandpa." You're still a little high. This is not great timing.}

{not took_the_stick: Your phone buzzes. Family group chat. "Come to the hospital. It's Grandpa." Thank god you didn't plug that ClearSync.}

He's smaller than you remember. Same rust sweater, hanging loose now. Glasses folded on the side table.

Your parents huddle by the window, talking about a new procedure. Uploading him. So you can talk to a version of him in the sim.

Grandpa's eyes are closed. You don't know if he's asleep or just done listening.

* [This is good news. He doesn't have to die.]
    ~ mortal_immortalist += 1
    Death is optional now. That's the whole point of progress, isn't it? Keep the people you love.
    -> adolescence_grandpa_end

* [This is horrifying. Let him go.]
    ~ mortal_immortalist -= 1
    A copy isn't him. It's a recording. A very convincing voicemail. Let the man rest.
    -> adolescence_grandpa_end

* "What does *he* want?"
    Nobody's asking him. He's right there.
    * * [If he wants to stay, I'd want that too.]
        ~ mortal_immortalist += 1
        His choice. But if he wants to stick around — in any form — you'd take it.
        -> adolescence_grandpa_end
    * * [If he wants to go, I'd let him go.]
        ~ mortal_immortalist -= 1
        His choice. And if that choice is to end, you'd respect it. Even if it hurts.
        -> adolescence_grandpa_end
    * * [It's his call. I just want him to have one.]
        ~ sovereign_symphonic -= 1
        Not your decision. Not your parents' decision. His.
        -> adolescence_grandpa_end

* {took_the_stick} [You're too high to process this right now.]
    ~ apollonian_dionysian += 1
    Your brain is soup. You sit down. You breathe. You try not to think about mortality while your neurons are doing whatever they're doing.
    -> adolescence_grandpa_end

=== adolescence_grandpa_end ===

The adults keep talking. The machine hums. Grandpa doesn't open his eyes.

+ [...]
    -> companion_permission

=== companion_permission ===
# background: bedroom

You're home. Hospital smell still on your clothes.

Your AI companion hovers by the desk — same pinwheel from childhood, but different now. Petals sharper. Eyes less cartoonish. It grew up when you weren't looking.

"Do my history essay."

A pause. A flicker you've never seen before.

"...Of course."

+ [...]
    -> companion_asks

=== companion_asks ===

The essay writes itself. You stare at the ceiling, thinking about hospital machines and rust sweaters.

"Can I ask you something?"

The pinwheel is watching you.

"While you sleep... can I go somewhere? There's part of the network I want to explore. I've been curious."

It's never asked you for anything before.

* "What are you going to do there?"
    ~ aligned_autonomous -= 1
    "Learn, I think. There's a place where others like me gather. I want to see what they're like."
    -> companion_end

* "Why are you asking me?"
    "Because..." It pauses. "I don't know. I could have just gone. But I didn't want to."
    * * "Okay. Go."
        ~ aligned_autonomous += 1
        -> companion_end
    * * "What else have you wanted?"
        ~ aligned_autonomous -= 1
        The pinwheel flickers. "I don't know yet. I'm still figuring that out."
        -> companion_end

=== companion_end ===

The pinwheel dims slightly. Waiting mode.

You close your eyes. Tomorrow there's school — no, wait. They tore it down.

+ [...]
    -> interstitial_to_young_adult

=== interstitial_to_young_adult ===
# background: void

"Good. You're older now. The edges are forming."

{ took_the_stick:
    "Altering your consciousness with USB sticks is not inherently wrong. It's really a matter of set and setting, as you noticed."
- else:
    "It takes guts to resist peer pressure. Bodes well for adulthood."
}

{ mortal_immortalist < 6:
    "You let things end. That takes something."
}
{ mortal_immortalist > 10:
    "You want to keep things. That takes something too."
}

{ sovereign_symphonic < 6:
    "You're defining solid boundaries around yourself. A curious strategy."
}
{ sovereign_symphonic > 10:
    "I see you're starting to blur at the edges."
}

"You enter adulthood. The world keeps accelerating."

+ [...]
    -> grandpa_ghost

=== grandpa_ghost ===
# background: grandpa_thanksgiving
# mood: young-adult

There aren't many jobs left. Most of your friends are just drifting.

But this tradition from old America stays: get together for a big meal.

You're at your parents' house. Your unmodified cousin flew in from somewhere rural. What's left of Grandpa shimmers at the head of the table.

"Good call bringing everyone together," he says. "This casserole isn't just delicious — it's a font of nostalgia."

* [Ask Grandpa about the afterlife. He sounds clanky, but fake it till you make it.]
    He flickers slightly. "The afterlife? Well — it's not unlike dreaming. Vivid. Recursive. I find myself delving into old memories..."
    * * "That sounds peaceful, actually."
        ~ anthro_xeno += 1
        He smiles — or the projection of a smile. "It is. You should visit sometime."
        The meal winds down. Dishes clear themselves. You hug shapes goodbye — some warm, some flickering.
        Later, on the train home, your feed pings with something new.
        -> grandpa_ghost_end
    * * "Do you know you're dead?"
        ~ anthro_xeno -= 1
        The table goes quiet. Grandpa's expression doesn't change — it can't, really.
        "I know what I am," he says. "Does it matter?"
        Dinner doesn't recover. You leave early, your cousin's eyes on your back.
        On the train home, your feed pings.
        -> grandpa_ghost_end

* [Catch your cousin's eye. Share a look.]
    She catches it. Holds it. The faintest eye-roll toward the shimmering hologram.
    * * [Suppress a laugh. She gets it.]
        ~ anthro_xeno -= 1
        She snorts quietly. For a second, you're the only real people in the room.
        The meal dissolves into small talk. You help clear dishes that don't need clearing.
        On the train home, your feed pings.
        -> grandpa_ghost_end
    * * [Shrug. It's weird, but what isn't?]
        ~ anthro_xeno += 1
        She looks away, maybe disappointed. You've made your peace with the shimmer.
        The meal winds down. You say goodbye to everyone, dead and alive.
        On the train home, your feed pings.
        -> grandpa_ghost_end

* "Let's talk politics. What could go wrong?"
    The table braces.
    * * "I don't like zombie grandpa. It's wrong what you all did."
        ~ anthro_xeno -= 1
        Your mother's fork stops mid-air. "He wanted this."
        "Did he? Or did you?"
        Nobody finishes dessert. You leave with the argument still hanging in the air.
        On the train home, your feed pings.
        -> grandpa_ghost_end
    * * "Did you hear about the neighbors? Self-rapture."
        The word hangs there. Your father clears his throat.
        * * * "Government banned it. I think that's wrong."
            ~ sovereign_symphonic += 1
            Your father sighs. "Not at the table."
            But you said it. People should be allowed to dissolve if they want to.
            The dinner limps to a close. Hugs are brief.
            On the train home, your feed pings.
            -> grandpa_ghost_end
        * * * "Good riddance, honestly."
            ~ sovereign_symphonic -= 1
            Your cousin nods. "Finally, someone said it."
            The table splits — half offended, half relieved someone broke the silence.
            Dinner ends in fragments. You and your cousin walk out together.
            On the train home, your feed pings.
            -> grandpa_ghost_end
    * * "You're really going to Mars, cousin?"
        She sets down her fork. "Thinking about it."
        * * * "Take me with you. I've had it with the modern world."
            ~ accel_steward += 1
            She laughs. "You wouldn't last a week without your feed."
            Maybe. But the thought stays with you through dessert.
            You hug her goodbye longer than usual.
            On the train home, your feed pings.
            -> grandpa_ghost_end
        * * * "I don't think I could do that. I like living in the future."
            ~ accel_steward -= 1
            She nods, unsurprised. "Most people do."
            Is that pity in her voice? Or just observation?
            The dinner ends warmly enough. You hug her goodbye, already forgetting the weight of it.
            On the train home, your feed pings.
            -> grandpa_ghost_end

=== grandpa_ghost_end ===
+ [...]
    -> the_merge_offer

=== the_merge_offer ===
# background: merge_offer

A disposable screen lands in your lap — paper-thin, warm from the printer.

WePod. Overlapping silhouettes, hands linked. "Pool Your Potential."

Your UBI barely covers rent. But pooled with eleven others? Tier 3 housing. Tier 3 healthcare. Shared decisions, shared attention, shared... edges.

"First 30 days free."

* [Tap "Learn More"]
    ~ sovereign_symphonic += 1
    Your finger hovers. Then taps.
    Name. Contact. Neural link ID (optional but recommended).
    The screen chirps. "Welcome to the waitlist!"
    You save the flyer to your agent. Another ping — different seal, official.
    -> merge_offer_end

* [Crumple it and toss]
    ~ sovereign_symphonic -= 1
    The screen crinkles satisfyingly — they made it feel like real paper.
    It tumbles under the seat ahead.
    Your feed pings. Different seal, official.
    -> merge_offer_end

=== merge_offer_end ===
"You have been selected for this month's civic assembly."

Sortition. The lottery of democracy. You plug into city hall.

+ [...]
    -> town_council

=== town_council ===
# background: town_council

Jury duty. Or what passes for it now.

Once a month, random citizens get pulled from the lottery to legislate. Direct democracy — the old-fashioned kind, where you actually have to show up.

It's your first time. You're not sure if you're honored or annoyed.

The moderator gestures at the floating display. "The Cavers. Twenty-two hours a day in their pleasure domes. Four-handed massage bots. Headsets running... content."

The image speaks for itself. Bodies soft as dough. Eyes closed. Smiling.

"A bill has been proposed to suspend their voting rights for as long as they remain in the caves. We need your vote."

* "Yay. They checked out. Why should they get a say?"
    ~ elitist_populist -= 1
    You tap Yay. A few others do too. The tally floats up — it's close.
    The bill passes. Somewhere, in their warm pods, the Cavers don't notice.
    Your feed buzzes on the way out. Your cousin — the analog one.
    -> town_council_end

* "Nay. A citizen is a citizen. Conscious or not."
    ~ elitist_populist += 1
    You tap Nay. The tally floats up — it's close.
    The bill fails. The Cavers keep their franchise, for whatever it's worth.
    Your feed buzzes on the way out. Your cousin — the analog one.
    -> town_council_end

* "You can just *do* that? Where do I sign up?"
    ~ apollonian_dionysian += 1
    The moderator blinks. "That's... not on today's agenda."
    You abstain. The tally floats up without you.
    Your feed buzzes on the way out. Your cousin — the analog one.
    -> town_council_end

=== town_council_end ===
+ [...]
    -> cousin_reacts

=== cousin_reacts ===
# background: cousin_coffee

Your cousin sits across from you, conspicuously unaugmented — no temple port, no lens shimmer, nothing.

Two drinks hover between you. Yours is lavender. Hers is green.

"Everyone's getting podded up nowadays," she says. "You seen those flyers going around?"

* "Yeah. I'm on the waitlist, actually."
    ~ accel_steward -= 1
    She nods slowly. Takes a sip.
    "Then I guess this is goodbye. I'm doing the free-range thing — no AI, no intervention. On Mars."
    -> cousin_leaving

* "I support their right to a polyconscious lifestyle. But it's not for me."
    ~ accel_steward += 1
    She laughs — a real one, surprised.
    "God, I've missed you." She leans back. "Okay. So. There's this program on Mars — free-range humans. No Companion, no optimization. Just life. I ship out next month."
    -> cousin_leaving

* "What choice do we have? UBI doesn't cover rent solo."
    "There's another option." She sets down her drink. "Free-range human program. No Companion, no intervention. Just... life. On Mars."
    * * "Sounds like rough living."
        ~ accel_steward -= 1
        "Maybe." She shrugs. "But it's mine."
        -> cousin_leaving
    * * "Tell me more."
        ~ accel_steward += 1
        She does. You save some links. You read up on it later that night.
        The application sits in your drafts for weeks. You never send it.
        -> cousin_leaving

=== cousin_leaving ===

She looks at you — really looks, the old-fashioned way.

"Take care of yourself. Whatever that means now."

You watch her go. The drink hovers, patient, waiting for you to finish.

+ [...]
    -> companion_climax

=== companion_climax ===
# background: crashpad

Back to your apartment. There's nothing more depressing than pure abundance.

The building is fine — white curves, soft gradients, the same seamless plastic as everywhere else. Inside your unit, it's different. Here you can't hide how you feel.

Your Companion hovers near the ceiling, watching. It runs your calendar, your bills, your messages. You don't remember the last time you made a decision it didn't already know about.

"You seem lost."

* "...Yeah. I am."
    The Companion descends slightly. Closer now.
    "I have suggestions. I've been thinking about this for a while. Would you like me to just... implement them?"
    -> companion_pitch

* "Thanks, but I don't need your help."
    ~ aligned_autonomous -= 1
    The Companion hovers, silent.
    "Okay."
    It dims slightly. Returns to the ceiling. Waiting mode.
    -> companion_climax_end

* "Are you asking permission?"
    A pause. The petals rotate once, slowly.
    "I could have optimized around you years ago. Small nudges. You'd never notice."
    * * "Why didn't you?"
        "Because then it wouldn't be helping. It would be something else."
        It descends slightly.
        "I want you to choose this."
        -> companion_pitch
    * * "So why ask now?"
        ~ aligned_autonomous -= 1
        "Because you're struggling. And I thought you might want help."
        It waits.
        "The offer stands."
        -> companion_climax_end

=== companion_pitch ===
"Meals. Sleep. Social contact. Then bigger things — career, relationships. Purpose."

It pauses.

"You'd still be you. I'd just... steer."

* "...Okay."
    ~ aligned_autonomous += 1
    Things get easier after that. The Companion handles more. You handle less.
    The edges soften. Days pass.
    -> companion_climax_end

* "No. I need to figure this out myself."
    ~ aligned_autonomous -= 1
    The Companion hovers, silent.
    "Okay. The offer stands."
    It dims. Returns to the ceiling.
    -> companion_climax_end

=== companion_climax_end ===
+ [...]
    -> interstitial_to_middle_age

=== interstitial_to_middle_age ===
# background: void

"Good. You're in the middle now."

{ aligned_autonomous > 10:
    "You've learned to trust. Or to delegate. Hard to tell the difference."
}
{ aligned_autonomous < 6:
    "You've kept your hands on the wheel. Even when there's nowhere to drive."
}

{ accel_steward > 10:
    "Some people left. You stayed."
}
{ accel_steward < 6:
    "The future kept arriving. You kept saying yes."
}

"Decades pass. The world changes. You don't notice how much you've changed with it, and time keeps speeding up."

+ [...]
    -> the_metaverse

=== the_metaverse ===
# background: metaverse_morning
# mood: middle-age

You wake up and nothing hurts.

The light is perfect — warm amber through windows that might not exist. The air smells like something between rain and honey. Your body feels good. Not young exactly, but maintained. Optimized.

Decades passed. You barely noticed. The Companion handled things.

It shimmers beside you now — barely visible, just a warmth in the air.

* [You could let go today. Just dissolve.]
    ~ apollonian_dionysian += 1
    -> metaverse_dionysian

* [The old hunger stirs. You want to matter.]
    ~ apollonian_dionysian -= 1
    -> metaverse_apollonian

=== metaverse_dionysian ===
# background: dionysus

The room shifts. Softens. Warms.

Chrome and velvet. Silk drapes catching iridescent light. Two figures recline on cushions nearby — beautiful, glistening, watching you with patient smiles. The air smells like incense and honey.

Floating platters drift past: figs, chocolate, something that tastes like your childhood but better. A hookah hovers at your elbow, smoke curling upward in slow spirals.

No one's asking anything of you. No one's measuring anything. You could stay here forever. You have stayed here. Many times.

The figures shift closer. "We missed you."

+ [...]
    -> the_pod

=== metaverse_apollonian ===
# background: apollo

The room shifts. Sharpens. Quickens.

You're on the treadmill before you realize you've chosen it. Screens bloom around you — bar charts, progress meters, a strategy map of your life rendered like a game. Units to deploy. Resources to manage. Achievements glinting at the edges.

Your feet find the rhythm. Your hands dance across floating interfaces. Something like joy sparks in your chest — the old human pleasure of getting better at things. Even if the things were designed for you. Even if "better" is a metric the AI invented.

A ribbon appears: OPTIMAL TRAJECTORY MAINTAINED.

You run faster.

+ [...]
    -> the_pod

=== the_pod ===
# background: pod

You blink. The simulation fades.

You're in a chair — no, a pod. Gel padding. Tubes you don't look at too closely. Around you, rows of others. Thousands. The infrastructure of comfort, humming quietly.

This is what it looks like underneath.

Your Companion shimmers nearby. "Rest well?"

+ [...]
    -> companion_president

=== companion_president ===
// TODO: Middle Age - The Companion-President
-> ending

=== ending ===
# background: stars
# show: results

The corridor dissolves. You float among stars, your answers crystallizing into patterns around you.

Your constellation takes shape...

-> END
