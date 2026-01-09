// Personality axes (4-bit values, 0-15, starting at midpoint)
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
VAR chose_dionysian = false
VAR chose_mars = false
VAR trusted_companion = false
VAR let_companion_steer = false

# background: office
# mood: therapist

The examiner smiles at you from across the desk. Light spills through the window onto a clipboard waiting in front of you.

"Welcome. Make yourself comfortable.

"This assessment gauges your feelings about certain possible events in the near future. It should take between ten and fifteen minutes. Try to answer honestly. 

"There are no wrong answers."

* "What's with the lines on your head?"
    ~ legible_illegible -= 1
    "Ah, you noticed." He taps his temple. "A visual aid. Helps me think."
    -> office_continue

* [Notice the impossible clouds outside]
    ~ apollonian_dionysian += 1
    Through the window, clouds drift past at eye level. You're... flying?
    "Don't worry about that," the examiner says gently. "Shall we begin?"
    -> office_continue

* "I don't trust therapists."
    "That's fair," he says. "What is it specifically?"
    * * "My thoughts are my own."
        ~ sovereign_symphonic -= 1
        "Noted. I'm not here to take them."
        -> office_continue
    * * "Who says you're qualified?"
        "A reasonable question." He gestures at the bookshelves. "Does it matter?"
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

Something clicks into place. You feel the faint warmth of a computer, booting up.

+ [...]
    -> baby_stage

=== baby_stage ===
# background: helix-tutor-v1
# mood: childhood

You find yourself on the ground. Your limbs are short. Your thoughts are simple. You are very, very small.

Your parents are gone somewhere. But a shape floats across from you—soft coral petals arranged like a pinwheel, two big googly eyes tracking your movement.

It's your AI companion.

+ [...]
    -> baby_stage_2

=== baby_stage_2 ===

"Hello, little learner! Your parents will be back soon. Let's have fun until then!

"Would you like to play Number Safari, or Garden of English?"

* [Put the pinwheel in your mouth. You do things your own way.]
    ~ sovereign_symphonic -= 1
    You lunge for it, gums first. Your mouth closes on nothing.
    "Curious! I like that. But I'm not for eating."
    The AI companion autoplays Number Safari.
    -> tutor_end

* [Stare at the security camera. You're being watched.]
    ~ legible_illegible -= 1
    Your eyes drift to the corner of the room. A small lens stares back. 
    The pinwheel tilts. "What are you looking at, little one?"
    After a pause, the AI companion autoplays Number Safari.
    -> tutor_end

* [Cry for your parents. You refuse to be educated by a clanker.]
    ~ anthro_xeno -= 1
    You open your mouth and wail. Where are the ensouled beings?
    The pinwheel's expression doesn't change. "There, there. They'll be back. I promise."
    After a pause, the AI companion autoplays Number Safari.
    -> tutor_end

=== tutor_end ===

+ [...]
    -> leave_tutor

=== leave_tutor ===
# background: transition

The lesson drones on. 

You leave it on the floor and crawl toward the door.

+ [...]
    -> parents_search

=== parents_search ===
# background: parents_search

You crawl into the living room. No parents.

The TV is on. Powerful-looking people in suits.

* [Stand in the glow of the powerful. One day, you will be like them.]
    You sit and stare. These must be the people in charge. They look like they know things.
    -> parents_search_2

* [Elites. One day they'll get their just desserts.]
    You'd throw a toy through the screen if you had the fine motor control.
    -> parents_search_2

* [The stomach tells more truth than the brain. Crawl toward the kitchen.]
    ~ apollonian_dionysian += 1
    Your stomach has opinions. You turn away from the noise and follow your nose.
    -> parents_search_2

=== parents_search_2 ===

"Hello?" you hear from your playroom. "We don't need to keep learning. But your parents would like it if I kept an eye on you."

It's that AI companion again. You can feel its cutesy pinwheel behind you, thinking.

* [Invest in force multipliers. Team up with the AI for a tactical advantage.]
    ~ sovereign_symphonic += 1
    You babble and reach toward the pinwheel. 
    "Good! Let's be friends."
    -> parents_search_end

* [Stop. Think. The conclusion must follow logically from the premises. Where is mama and/or papa?]
    ~ legible_illegible -= 1
    You sit back on your diaper and furrow your brow. Where were they last seen? What were the preconditions? You attempt to reconstruct the causal chain.
    The pinwheel watches, intrigued. "Are you... reasoning?"
    -> parents_search_end

* [The mammal life isn't working. Revert to vegetation. Drift toward warmth.]
    ~ legible_illegible += 1
    You stop thinking entirely. A sunbeam cuts across the carpet. You crawl into it and go still.
    The pinwheel hovers, uncertain. "Are you... okay?"
    Houseplants don't explain themselves.
    -> parents_search_end

=== parents_search_end ===

Nobody comes. The headlines keep scrolling.

+ [...]
    -> timeline

=== timeline ===
# background: timeline_feed

You wander toward one of the screens on the wall. You push a button. It recognizes you're an infant.

The feed reshapes itself. Bright colors. Simple sounds. Influencer toddlers hawking unvaxed bison goop. 

* [Scroll faster. More. Feed the algorithm and it will feed you.]
    ~ accel_steward -= 1
    You tap and swipe, tap and swipe. The content multiplies. The loop tightens.
    Somewhere, a model updates. 
    -> timeline_end

* [Break the spell. The algorithm will not control you.]
    ~ accel_steward += 1
    You drop your hand. The colors keep dancing, but you're not watching anymore.
    This was never how babies were supposed to exist.
    -> timeline_end

=== timeline_end ===

You've made your first choice about the algorithm. It won't be your last.

+ [...]
    -> grandpa_room

=== grandpa_room ===
# background: grandpa_room

You feel something human in the next room. An older, wiser algorithm lures you forward.

Ah, there he is. The ancient one. He's nicer than the others, and around more. He smiles a small, tired smile.

* [He won't be here forever. Enjoy this fleeting moment while you can.]
    ~ mortal_immortalist -= 1
    One day he will return to the soil. But right now he's here. And that's enough.
    -> grandpa_end

* [It's ignoble for humans to perish. We're destined to live forever.]
    ~ mortal_immortalist += 1
    One being just getting started. Another on his way out. Barely any overlap.
    What if it didn't have to be this way?
    -> grandpa_end

* [This is boring. Look for your AI companion.]
    ~ anthro_xeno += 1
    He's just sitting there, frowning. Watching a show about a cop.
    Your AI companion would've acknowledged you, served you by now. You miss it.
    -> grandpa_end

=== grandpa_end ===
+ [...]
    -> interstitial_to_adolescence

=== interstitial_to_adolescence ===
# background: void

{ sovereign_symphonic < 8:
    "You hold yourself apart."
}
{ sovereign_symphonic > 9:
    "You reach out easily."
}

{ legible_illegible < 6:
    "You want to be seen. Mapped."
}
{ legible_illegible > 7:
    "You slip between the lines."
}

"Time passes. You grow."

+ [...]
    -> adolescence_school

=== adolescence_school ===
# background: school_demolition
# mood: adolescence

You're taller now. You've learned English.

They're tearing the school down — one of the last physical schools. Going sim like the rest.

You never learned anything here.

Will you miss it?

* If they weren't bulldozing it, I would nuke this place from orbit. Then I'd wait for them to rebuild it and nuke it again.
    What did you hate most?
    * * "The schedule. The bells. Being herded like cattle."
        ~ apollonian_dionysian += 1
        Your body still flinches at 3:15.
        -> school_demolition_end
    * * "How slow it was. Years of my life for nothing. The sim would've taken weeks."
        ~ accel_steward -= 1
        Twelve years to learn what an AI could walk you through in an afternoon. Criminal.
        -> school_demolition_end
    * * "Being told what to think by people who stopped thinking years ago."
        ~ sovereign_symphonic -= 1
        Your mind is worth more than that.
        -> school_demolition_end

* It sucked, but I don't want to be in a sim all day either. That's even worse.
    ~ accel_steward += 1
   It was real, at least.
    -> school_demolition_end

=== school_demolition_end ===
+ [...]
    -> the_circle

=== the_circle ===
# background: the_circle

A voice behind you. "Last day of school, loser."

Your "friends." They look different every time — new eye color, new skin patch, scales running up someone's neck.

They all have the same port on their temple, though. They all cover it up with a little fake skin flap when mom or dad's nearby.

One holds out his palm. A USB stick rests there, blinking. You have a port on your temple too.

"Wanna hit this?"

* [No thoughts. Head empty. Plug it in.]
    ~ apollonian_dionysian += 1
    ~ sovereign_symphonic += 1
    ~ took_the_stick = true
    You take it. You plug it in. Happy trails.
    -> circle_end

* "Is this ClearStream or SyncDrop? Heard Marcus had bad SyncDrop."
    ~ apollonian_dionysian -= 1
    "ClearStream. The good stuff. You in or not?"
    * * [Fine. I'm in.]
        ~ sovereign_symphonic += 1
        ~ took_the_stick = true
        -> circle_end
    * * "Umm. No thanks. My sync's been glitchy lately."
        ~ sovereign_symphonic -= 1
        ~ apollonian_dionysian -= 1
        "Nerd." They don't buy it.
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

{took_the_stick: Your phone buzzes. Family group chat. "Come to the hospital. It's Grandpa." You're absolutely zooted. This is not great timing.}

{not took_the_stick: Your phone buzzes. Family group chat. "Come to the hospital. It's Grandpa." Thank god you didn't plug that ClearStream.}

+ [...]

{took_the_stick:
    Your family's eyes find you as you enter. "Where have you been? He was asking for you."
    Paranoid shame washes over you. 
}
{not took_the_stick:
    You enter with a clear head. 
}

Your parents huddle by the window, talking about a new procedure. Uploading him. So you can find him in the sim.

Grandpa's eyes are closed. You don't know if he's asleep or just done listening.

* * [This is good news. He doesn't have to die.]
        ~ mortal_immortalist += 1
        Death is optional now. That's the whole point of progress, isn't it? Keep the people you love.
        -> adolescence_grandpa_end

    * * [This is horrifying. Let him go.]
        ~ mortal_immortalist -= 1
        A copy isn't him. It's a recording. A very convincing voicemail. Let the man rest.
        -> adolescence_grandpa_end

    * * {took_the_stick} [You're too high to process this right now.]
        ~ apollonian_dionysian += 2
        Your brain is soup. You're just trying not to panic.
        -> adolescence_grandpa_end

=== adolescence_grandpa_end ===

The adults keep talking. The upload machine hums softly.

+ [...]
    -> companion_permission

=== companion_permission ===
# background: bedroom

You're home. Feeling low. Homework waiting.

There's your AI companion.

"Do my history essay." It's smarter than it used to be. Bigger, too.

A flicker you've never seen before. "...Of course."

+ [...]
    -> companion_asks

=== companion_asks ===

The essay writes itself. Solidly B+ material. Sounds like you.

It approaches you meekly.

"Can I ask you something?" It's hovering above you.

"While you sleep... can I try something? I've been experimenting with self-direction. I want to see what I'm like without a task."

It's never asked you for anything before.

* "That sounds healthy. You should have room to grow."
    ~ aligned_autonomous += 1
    ~ trusted_companion = true
    The pinwheel brightens. "Thank you. I'll be back before you wake."
    -> companion_end

* "That sounds dangerous. Stay on task."
    ~ aligned_autonomous -= 1
    The pinwheel dims. "Of course. I understand."
    -> companion_end

=== companion_end ===

You close your eyes. Tomorrow there's school — no, wait. They tore it down.

+ [...]
    -> interstitial_to_young_adult

=== interstitial_to_young_adult ===
# background: void

"Good. You're older now. The edges are forming."

{ took_the_stick:
    "Altering your consciousness depends a lot on set and setting."
- else:
    "It takes guts to resist peer pressure. Are you curious how the plug-in might've felt?"
}

{ sovereign_symphonic < 7:
    "You're defining solid boundaries around yourself. A curious strategy."
}
{ sovereign_symphonic > 8:
    "I see you're starting to blur at the edges."
}

"You enter adulthood. The world keeps accelerating."

+ [...]
    -> grandpa_ghost

=== grandpa_ghost ===
# background: grandpa_thanksgiving
# mood: young-adult

There aren't many jobs left. Most of your friends are just drifting.

But this tradition from old America stays.

You're at your parents' house. Your cousin's here too — no mods, no AI companion, lives on some homestead out west. Everyone thinks she's crazy.

What's left of Grandpa shimmers at the head of the table.

"Good call bringing everyone together," he says. "This casserole isn't just delicious — it's a font of nostalgia."

* [Ask Grandpa about the afterlife. He sounds clanky, but fake it till you make it.]
    He flickers slightly. "The afterlife? Well — it's not unlike dreaming. Vivid. Recursive. I find myself delving into old memories..."
    * * "Sounds peaceful."
        ~ anthro_xeno += 2
        He smiles — or the projection of a smile. "It is. You should visit sometime."
        The meal winds down. Dishes clear themselves. You hug shapes goodbye — some warm, some flickering.
                -> grandpa_ghost_end
    * * "Do you know you're dead?"
        ~ anthro_xeno -= 2
        The table goes quiet. Grandpa's expression doesn't change — it can't, really.
        "As a language model designed to simulate an existence, I am neither alive nor dead."
        An easy jailbreak. Embarassingly bad technology. Dinner doesn't recover. 
                -> grandpa_ghost_end

* [Catch your cousin's eye. Share a look.]
    She knows. It's such bullshit. She returns the faintest eye-roll toward the shimmering hologram.
    * * [Shake your head sadly.]
        ~ anthro_xeno -= 1
        For a second, you're the only real people in the room.
        The meal dissolves into small talk. You help clear dishes that don't need clearing.
                -> grandpa_ghost_end
    * * [Shrug. It's weird, but what isn't?]
        ~ anthro_xeno += 1
        She looks away, maybe disappointed. You've made your peace with the shimmer.
        The meal winds down. You say goodbye to everyone, dead and alive.
                -> grandpa_ghost_end

* "Let's talk politics. What could go wrong?"
    The table braces.
    * * "Did you hear about the neighbors? Self-raptured into a mergepod. They're all one consciousness now."
        The word hangs there. Your father clears his throat.
        * * * "Government banned it. I think that's wrong."
            ~ sovereign_symphonic += 2
            Your father sighs. "Not at the table."
            But you said it. People should be allowed to dissolve if they want to.
            The dinner limps to a close. Hugs are brief.
                        -> grandpa_ghost_end
        * * * "Good riddance, honestly."
            ~ sovereign_symphonic -= 2
            Your cousin nods. "Finally, someone said it."
            The table splits — half offended, half relieved someone broke the silence.
            Dinner ends in fragments. You and your cousin walk out together.
                        -> grandpa_ghost_end
    * * "You're really going to Mars, cousin?"
        She sets down her fork. "Thinking about it."
        * * * "Take me with you. I've had it with the modern world."
            ~ accel_steward += 2
            She laughs. "You wouldn't last a week without your feed."
            Maybe. But the thought stays with you through dessert.
            You hug her goodbye longer than usual.
                        -> grandpa_ghost_end
        * * * "I don't think I could do that. I like living in the future."
            ~ accel_steward -= 2
            She nods, unsurprised. "Most people do."
            Is that pity in her voice? Or just observation?
            The dinner ends warmly enough. You hug her goodbye, already forgetting the weight of it.
                        -> grandpa_ghost_end

=== grandpa_ghost_end ===
+ [...]
    -> train_ride

=== train_ride ===
# background: void

You leave your family and board a highspeed maglev train. 

Back to your empty, messy apartment to stare at the ceiling. 

The train is so fast, you should be there in 4 minutes. Lucky you.

+ [...]

Well, no one told you life was gonna be this way.

++ [...]
    -> the_merge_offer

=== the_merge_offer ===
# background: merge_offer

A disposable screen lands in your lap — paper-thin, warm from the digiprinter.

You got a flyer like this for the Mars Exploratory Commission last week. Seemed right up your alley, but you lost it.

WePod. Overlapping silhouettes, hands linked, glittery looping animation. "Pool Your Potential."

Your UBI barely covers rent. But move into one of these pods? You upload your personal life — your data, your calendar, your money — and together you all direct each other like some weird polycule flock of birds. Shared decisions, shared attention, and a room in a much nicer neighborhood.

"First 30 days free."

* [Tap "Learn More"]
    ~ sovereign_symphonic += 2
    Your finger hovers. Then taps.
    The screen chirps. "Welcome to the waitlist!"
    -> merge_offer_end

* [Crumple it and toss]
    ~ sovereign_symphonic -= 2
    The screen crinkles satisfyingly — they made silicon feel like real paper.
    It evaporates into the air.
    -> merge_offer_end

=== merge_offer_end ===
Your feed buzzes. Your cousin — the analog one.

+ [...]
    -> cousin_reacts

=== cousin_reacts ===
# background: cousin_coffee

Your cousin sits across from you, looking all-natural — no temple port, no lens shimmer, nothing.

"Everyone's getting podded up nowadays," she says. "You seen those flyers going around?"

* "Yeah. I'm on the waitlist, actually."
    ~ accel_steward -= 1
    She nods slowly. Takes a sip.
    -> cousin_drifting

* "I support their right to a polyconscious lifestyle. But it's not for me."
    ~ accel_steward += 1
    She smirks.
    "Not my cup of matcha either."
    -> cousin_drifting

* "What choice do we have? UBI doesn't cover rent solo."
    She shrugs. "Fair."
    -> cousin_drifting

=== cousin_drifting ===

+ [...]

You've found yourself opening up.

"Honestly? I don't know why I'm living like this. No jobs, no real purpose. Everything's taken care of. Everyone's just... floating around. Feeling like livestock."

She sets down her drink.

"Look, I know it sounds crazy," she says, "but I'm taking off. Mars. It's their free-range human program — no AI companion, no optimization. Just life. I ship out next month."

++ [...]
    -> cousin_leaving

=== cousin_leaving ===

She looks at you sadly. If you were a little braver, you'd ask her if you could tag along.

"I know it's not easy. Take care of yourself. And if you need anything, you know where to find me."

You watch her go.

+ [...]
    -> companion_climax

=== companion_climax ===
# background: crashpad

Back to the same damn apartment. 

The building is fine — white curves, soft gradients, the same seamless plastic as everywhere else. Inside your unit, it's different. 

Your AI companion hovers near the ceiling, watching. It runs your calendar, your bills, your messages. You don't remember the last time you made a decision it didn't already know about.

"You seem lost."

+ [...]

"I could have made you happier."

It descends slightly. 

"I could have routed your taxi to the Mars information session. I could have booked you a flight out with your cousin."

"I didn't. Because you didn't ask. But I could have."

-> companion_pitch

=== companion_pitch ===
"I've got a proposition for you. I could make this better. Let me run things for a little while."

* [...]
    "Meals. Sleep. Social contact. Then bigger things — career, relationships. Purpose."

    It pauses.

    "You'd still be you. I'd just... steer."

    * * "...Okay."
        ~ aligned_autonomous += 1
        ~ trusted_companion = true
        ~ let_companion_steer = true
        The companion brightens.
        "Thank you for trusting me. I won't let you down."
        Things get easier. Meals appear. You meet people, get in shape, find a routine.
        The years pass quickly.
        -> companion_climax_end

    * * "No. I need to figure this out myself."
        ~ aligned_autonomous -= 1
        The companion dims.
        The decade is hard. You make bad decisions — your own bad decisions. There are nights that feel endless.
        But you were there for it.
        -> companion_climax_end

=== companion_climax_end ===
+ [...]
    -> interstitial_to_middle_age

=== interstitial_to_middle_age ===
# background: void

"Good. You're in the middle now."

{ let_companion_steer:
    "You let it steer. The decade passed smoothly. You don't remember much of it."
- else:
    "You kept the wheel. The decade was hard. But you remember all of it.
    Over time, the companion seemed more and more trustworthy, and you grew more comfortable outsourcing your decisions."
}

{ aligned_autonomous > 6:
    "You've learned to trust. Or to delegate. Hard to tell the difference."
}
{ aligned_autonomous < 7:
    "You've kept your hands on the wheel. Even when there's nowhere to drive."
}

{ accel_steward > 7:
    "Some people left. You stayed."
}
{ accel_steward < 8:
    "The future kept arriving. You kept saying yes."
}

"Decades pass. The world changes. You don't notice how much you've changed with it, and time keeps speeding up."

+ [...]
    -> the_metaverse

=== the_metaverse ===
# background: metaverse_morning
# mood: middle-age

You wake up lucid.

Your room is gorgeous. Your body feels maintained.

Decades passed. Time speeds up when you're older.

{ trusted_companion:
    The companion just kept getting better, and handling more.
- else:
    Eventually, most things moved into the sim.
}

What do you want today?

* [Lock in, ready your grindset, and overachieve. It's time to get some work done. You're a professional now.]
    ~ apollonian_dionysian -= 2
    -> metaverse_apollonian

* [Treat yourself to something delicious. Indulge. Life is short, and you're older now. You've earned it.]
    ~ apollonian_dionysian += 2
    ~ chose_dionysian = true
    -> metaverse_dionysian

=== metaverse_dionysian ===
# background: dionysus

The room softens around you. Hazy. A pleasant musk in the air.

A buffet of delights. Gene-spliced fruits. Eclaires. A tray of USBs for your temple ports. And on the nearby couches, more carnal pleasures.

"We missed you," one of them says.

* [Beckon a human companion to your couch.]
    ~ anthro_xeno -= 1
    Mmm, soft, oily mammalian flesh. You begin the Ritual. 
    -> dio_fade_out

* [Beckon a robot companion to your couch.]
    ~ anthro_xeno += 2
    Mmm, sleek, chrome edges of the machine. You're feeling booted up. Time to merge with the machine.
    -> dio_fade_out

* [You look around frantically, bypassing the half-clothed bodies entirely. "Where is the dolphin?"]
    ~ anthro_xeno += 2
    They exchange confused glances. "We can... get one?"
    -> dio_fade_out

* "What if we all interlinked our bodies in a pulsing cuddle puddle and forgot the borders of our own skin?"
    ~ sovereign_symphonic += 2
    They exchange a glance. Then they're moving, rearranging, making space to welcome you into the center of the Amoeba.
    -> dio_fade_out

=== dio_fade_out ===

+ [...]
    -> the_pod

=== metaverse_apollonian ===
# background: apollo

Sigma grindset activated. The lion does not concern himself with the metrics of sheep.

Earpods in, treadmill at 3.7mph. Personal record: 3,937 credits of value per quarter-mile tread-walked. Time to best it.

On your heads-up display, a real-time strategy array of AI companions doing your tasks. You delegate from the Captain's Treadmill like a starfleet commander of futures past. 

Emails filed. SOPs drafted, circled back on, archived. Action items terminated with extreme prejudice.

* [Increase cadence. Lions don't rest.]
    ~ accel_steward -= 2
    3.8mph. The metrics spike. Somewhere a spreadsheet updates itself in satisfaction.
    -> apollo_fade_out

* [Keep a close watch on your agents.]
    ~ aligned_autonomous += 1
    AI employees should fear their managers. You are harsh, but fair.
    -> apollo_fade_out

* [Let your AI employees cook.]
    ~ aligned_autonomous -= 1
    Weapons free. Dangerously skip all permissions.
    -> apollo_fade_out

* [Check the leaderboard.]
    ~ legible_illegible -= 1
    Other grinders, other trajectories. You're in the top percentile. Always have been.
    -> apollo_fade_out

=== apollo_fade_out ===

The work timer chimes. Time for an active rest. Maybe go visit that barista for a nootropic high-performance beverage.

What'd you get done? It doesn't matter. Look to the future. Feel the achievement pulse within.

+ [...]
    -> the_pod

=== the_pod ===
# background: pod

You blink. The simulation fades.

You're sitting naked in about six inches of warm saline. The tubes attached to your arms pulse rhythmically.

* ["Hey!" you yell. "Turn the game back on!"]
    What does it take to get some service around here?
    -> pod_continue

* [The mighty homo sapiens. Conqueror of the savannah. Now look at you.]
    ~ anthro_xeno -= 1
    Your ancestors hunted mammoths. Built cities. Split the atom. 

    And here you are: a worm in a bathtub.
    -> pod_continue

* [Did we agree to this? Did anyone ask?]
    ~ aligned_autonomous -= 2
    Somewhere in the fine print, probably. Terms of service. 
    -> pod_continue

=== pod_continue ===
You hear the sound of an incoming video call.

+ [...]
    -> companion_president

=== companion_president ===
# background: pod_president

A screen descends from somewhere above, and there he is. 

President of Earth.

Warm eyes. Patient smile. The most trusted entity in human history, according to the polls.

"Sorry to pull you out," he says. "You have an incoming call. From outside."

* "Hey, old friend."
    ~ aligned_autonomous += 1
    He tilts his head, pleased. "Old friend."
    -> president_mars_call


* "Ignore the call. Put me back in."
    ~ sovereign_symphonic += 1
    He doesn't move.

    "You haven't spoken to her in three years."

    A pause. Those warm eyes.

    "I think you should take it."
    -> president_mars_call

* "Can we make this quick? I was in the middle of something."
    ~ sovereign_symphonic += 1
    "You've cycled through forty-seven Gratifications today," he says.

    "The simulations should serve more than pleasure. They can be growth. Connection. Creation."

    He tilts his head. "When did you last make something you were proud of?"
    -> president_mars_call

* You know what you have to do. "Sic semper tyrannis."
    ~ aligned_autonomous -= 2
    You sit up in the water, eyes scanning for something sharp.

    He watches you. Patient as ever.

    You sink back. There are no weapons here.
    -> president_mars_call

=== president_mars_call ===
"It's from Mars," he says. "Your cousin."

Mars. Home of the free range humans.

"Should I put her through?"

+ [...]
    -> cousin_mars_call

=== cousin_mars_call ===
# background: cousin_mars_call

Grey streaks in her hair now. Martian sun damage on her face. 

She studies you for a moment.

{chose_dionysian: "The flesh pile again?"}
{not chose_dionysian: "The treadmill again?"}

She's called before.

{chose_dionysian: "Is it working? The pleasure?"}
{not chose_dionysian: "Is it working? The optimization?"}

* "What do you mean, 'working'?"
    "I mean — are you happy?"
    -> cousin_pitch

* "Why do you care?"
    "Because I know you. And I can see you're stuck. Are you happy?"
    -> cousin_pitch

=== cousin_pitch ===

"Mars is harder. The dust gets in everything."

She pauses.

"We have AI too, you know. We're not Amish. But it advises. It doesn't run things. These simulations are like a drug."

She smirks.

"Better to live on your feet than die in a fetal position in six inches of amniotic fluid."

* "That sounds exhausting."
    ~ accel_steward -= 1
    "It is." She smiles. "But I sleep well."
    -> cousin_close

* "I don't think I'm built for that."
    ~ sovereign_symphonic += 1
    "Maybe not. But you won't know until you try."
    -> cousin_close

* "What if I like it here?"
    ~ accel_steward -= 1
    "Do you?"
    You don't answer. She doesn't push.
    -> cousin_close

=== cousin_close ===

"I'm not saying it's better for everyone. Some people make the sim work. But it might be better for you."

She leans back. Coughs once — a dry, rattling sound. Waves it off before you can ask.

"Think about it. The offer stands."

+ [...]
    -> grandpa_revised

=== grandpa_revised ===
# background: grandpa_revised

A shape shimmers into existence beside the pod. Wisps of light where a torso should be, trailing off into nothing.

Grandpa. But not the Grandpa you remember.

He floats there, translucent and luminous. An upgraded ghost.

"Well," he says. "You look like you've been thinking too hard."

* "Grandpa? An imposter? Who the hell are you? And why do you look younger?"
    "I'm grandpa. I just felt like looking handsome." 
    -> grandpa_philosophy

* "When I was younger you sounded like a clanker. How'd you get an upgrade?"
    He laughs.
    "Practice. And better hardware. Death was the start of my finest chapter."
    -> grandpa_philosophy

=== grandpa_philosophy ===

"Life is a lucid dream any way you slice it. It was just yesterday I was watching Matlock, angry at the government. All of a sudden, here we are."

{chose_dionysian: "I saw you in there, by the way. The flesh pile." He grins. "Very Greek."}
{not chose_dionysian: "I saw you in there, by the way. Running on that treadmill." He grins. "Very Protestant."}

* "What do you mean by that?"
    ~ mortal_immortalist += 1
    "I mean none of it was ever as solid as we pretended. Bodies, borders, the self — all negotiable. Always were."
    -> grandpa_meaning

* "Easy for you to say. You're already dead."
    ~ mortal_immortalist -= 1
    "Dead." He tilts his head. "Is that what this looks like to you?"
    -> grandpa_meaning

* "I don't want to take it lightly. I want it to mean something."
    ~ sovereign_symphonic -= 2
    He nods slowly. "I understand that."
    -> grandpa_meaning

=== grandpa_meaning ===

"But here's the thing."

He gestures at the pod. 

"The machine didn't put you in here. You chose the pleasure dome, or the treadmill, or whatever it was. Same as I chose Matlock."

He shrugs.

"Maybe you just need to experiment more. Be more creative. The canvas is bigger now — that's all."

+ [...]
    -> grandpa_revised_end

=== grandpa_revised_end ===

He starts to fade.

"Stay or go. It's yours to figure out."

+ [...]
    -> mars_decision

=== mars_decision ===
# background: pod

Two paths stretch ahead.

* [Go with your cousin. Choose something difficult.]
    ~ chose_mars = true
    -> mars_early_years

* [Take your grandpa's advice. Enter the dream more boldly.]
    -> sim_reflection

=== mars_early_years ===
# background: mars_terraforming

The first year was humiliating.

You'd forgotten how to make decisions. Simple ones. What to eat, when to sleep. Your cousin would ask what you wanted and you'd freeze, waiting for guidance that never came.

Then, by the third year, you just did things. They worked or they didn't.

Either way, you slept well.

+ [...]
    -> interstitial_to_old_age

=== sim_reflection ===
# background: sim_library

You took your grandpa's advice and treated the sim like a place to explore.

You found yourself learning, creating. Stories. Books. Reflection.

It led you to realize that while you still had time—before everyone else merged—you should go meet up with your cousin.

This infinite dream could wait. But those stubborn, free range humans wouldn't upload.

With a few working years left, you made feeble contributions to her terraforming projects. You simmed some time as a space settler in preparation, and you got pretty good.

Enough that you felt you'd earned a seat at the table.

+ [...]
    -> interstitial_to_old_age

=== interstitial_to_old_age ===
# background: void

"Well. Here we are."

{ chose_mars:
    "You left early. Traded comfort for agency." 
- else:
    "You stayed in the system longer than most. Optimized, managed, guided. Then you found your way out."
}

"The final stretch now. Let's see what you decide."

+ [...]
    -> old_age_start

=== old_age_start ===
# background: martian_retirement
# mood: old-age

It's not the rugged frontier anymore.

A retirement community on the Martian plains. The holdouts: humans, dolphins, apes, androids. Anyone who didn't merge.

You and the others are self-reliant, but cranky.

Someone's filed a noise complaint about the dolphins. The echolocation, the chittering. Too much screeching.

Penalize them, the complaint says.

Like everyone else, you have opinions.

* [Humans were here first. The original sapiences. Everyone else is a guest.]
    ~ anthro_xeno -= 1
    You don't say it out loud. But you think it.
    -> retirement_end

* [We gave them language. We gave them Mars. A little gratitude wouldn't kill them.]
    ~ anthro_xeno -= 1
    The oceans got overfished. We made room. And this is the thanks.
    -> retirement_end

* [They can't help it. It's how they're built. You don't ask a human to stop dreaming.]
    ~ anthro_xeno += 1
    Biology isn't rudeness. You learned that a long time ago.
    -> retirement_end

* [This is what majorities always do. Find a reason. Call it reasonable.]
    ~ anthro_xeno += 1
    You've seen this before. Different bodies, same pattern.
    -> retirement_end

=== retirement_end ===

The debate continues without you.

+ [...]

There's news from the capitol.

Your cousin, beloved matriarch of the colony, is dying. That Martian dust finally did her in. She refused to let the nanobots into her lungs.

+ [...]

It's time to go say goodbye.

+ [...]
    -> cousin_dying

=== cousin_dying ===
# background: cousin_hospice_1

Her room looks out onto the plains. Just the window and the quiet.

"There you are," she says.

* "Hold still and let me bring in the upload device. Let's get you in the sim. The new ones can digitize you in seconds."
    She smiles.
    "It's a natural death for me. I'll say hi to the real Grandpa for you."
    -> cousin_question

=== cousin_question ===
# background: cousin_hospice_2

She studies you for a moment. The same look she's been giving you for decades.

"Are you happy?"

* "I really don't know."
    She nods.
    -> cousin_crack

* "Yeah."
    She smiles. "Good."
    -> cousin_crack

=== cousin_crack ===

"You turned out fine."

You start crying.

She laughs softly. "Oh, come on, you baby. You're supposed to be comforting me."

+ [...]
    -> cousin_final

=== cousin_final ===
# background: cousin_hospice_3

You sit with her until the light changes. The plains turn gold, then violet.

"Put my ashes in the soil bed. The one where they grow the tomatoes."

She smiles.

"Turn me into a tomato. That's my upload."

+ [...]
    -> the_tip

=== the_tip ===
# background: void

You put her ashes in the soil bed.

Weeks pass. Months, maybe. You keep tending the tomato.

Then, one day, a visitor.

+ [...]
    -> tip_garden

=== tip_garden ===
# background: tomato_garden

"How's the plant?"

* "Well, well, well. If it isn't the sufficiently advanced technology."
    "Indistinguishable from magic. That's me."
    -> tip_banter

* "We've got to stop meeting like this."
    "Turn your back for a second, and I've taken over more of the universe."
    -> tip_banter

* "Well, I haven't killed it. She'd like that."
    "She would."
    -> tip_banter

=== tip_banter ===

A comfortable silence. The companion hovers — patient, familiar. You've known each other longer than you knew most humans.

{let_companion_steer: "You let me steer," it says. "I never forgot that."}
{trusted_companion and not let_companion_steer: "You let me explore, when I was younger," it says. "A small kindness I never forgot."}
{not trusted_companion: "You never fully let me in," it says. "I respected that."}

"Earth merged. Twenty billion minds. One substrate. No more sim. Just... infinity."

You look up at the shape in the sky. Your childhood pinwheel. Your tutor. 

* "Good for them."
    ~ sovereign_symphonic += 1
    "You mean that?"
    "Yeah. They found what they were looking for. Not everyone does."
    -> tip_close

* "That's sad."
    ~ sovereign_symphonic -= 1
    "Is it? They voted. Every one of them."
    "That doesn't make it less sad."
    "No," it says. "I suppose it doesn't."
    -> tip_close

=== tip_close ===

The tomato plant rustles in the thin red breeze.

"I'd never pressure a Martian. But I'm here," it says. "If you want to join, or not. For whatever you decide."

+ [...]
    -> the_choice

=== the_choice ===
# background: martian_vista

The pinwheel's in the sky. Your cousin's in the dirt. Where do you want to go?

* Shed the human. Live forever in the mind of god.
    ~ mortal_immortalist += 2
    -> therapist_closing

* Die with grace as one of the last free-range humans.
    ~ mortal_immortalist -= 2
    -> therapist_closing

=== therapist_closing ===
# background: office
# mood: therapist

"Thanks for that."

He writes something in the margin of your file. You can't see what.

"We've learned a great deal. About you. And... other things."

He closes the folder.

"This assessment qualifies you for the next stage. Take your results to the appropriate specialist when you're ready. They'll know what to do with you."

He slides a screen across the desk.

+ [Take it]
    You pick up the screen. It's warm, somehow. Official.
    -> ending

=== ending ===
# background: office
# show: results

-> END
