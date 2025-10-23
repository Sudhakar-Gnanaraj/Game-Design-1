# The Road Taken: A Poetic Interactive Experience Built in p5.js

## Concept
**The Road Taken** is an interactive poem inspired by Robert Frost’s *“The Road Not Taken.”*  
The project combines literature, sound, and digital interaction to express the emotional weight of choice and reflection.  

Players take control of a small traveler who reaches a symbolic crossroads in a forest. Each direction they choose leads to a unique poetic journey, reflecting different interpretations of Frost’s words. The goal is to evoke contemplation rather than challenge — allowing art, atmosphere, and emotion to guide the experience.

---

## Process and Design
The experience unfolds through a sequence of carefully structured **game states**.  
Each state represents a distinct phase of the poetic narrative:

1. **Title Screen** – Introduces the poem and invites the player to begin.  
2. **Poem Introduction** – Displays the opening stanza of the poem.  
3. **Exploration Phase** – Allows movement through a softly lit forest scene.  
4. **Path Choice** – The player chooses between two roads, each leading to a different poetic journey.  
5. **Final Reflection** – The poem concludes, shaped by the path the player took.  

Transitions between these scenes are smooth and gradual, creating a cinematic rhythm between stillness and motion.  
Music accompanies the flow — ambient sounds set a reflective tone, while a final composition plays during the emotional ending.

---

## Core Elements and Techniques Used

### Game States
The entire experience is built around a system that switches between clearly defined states such as **“title,” “game,” “poem,”** and **“ending.”**  
This structure allows complete control over how the poem unfolds visually and narratively.

### Smooth Transitions
Each scene fades into the next through gradual screen dimming, ensuring that the shift between reading and movement feels organic.

### Character Animation
A walking sprite sheet is used to animate the player’s movement in four directions.  
When the player stops, an idle frame is shown to preserve the sense of stillness.

### Movement Boundaries
Invisible rectangular zones define where the player can walk.  
This ensures they remain on the designed path and prevents them from wandering into unintended areas.

### Lighting Effect
A layered lighting system creates a **flashlight effect**, darkening the world except for a circular glow around the player.  
This light can expand in the final scene, symbolizing clarity or realization.

### Interactive Poetry
Each poem segment is displayed line by line in centered text, with a soft blinking prompt guiding the player to continue reading.

### Sound and Music
Two distinct soundtracks are used — one ambient and one for the finale.  
The code ensures they transition smoothly without overlapping, maintaining emotional continuity.

### Atmospheric Details
Small, glowing **fireflies** drift across the final scene, emphasizing stillness and wonder.

---

## Problems Faced and How They Were Solved

### Creating Smooth Scene Transitions
Early versions of the game abruptly switched from one screen to another, breaking the sense of calm.  
The solution was to implement a **controlled fade effect** that gradually darkens the screen, switches the scene in darkness, and fades it back in, maintaining immersion.

### Restricting Player Movement
The player should not wander into unintended areas of the map.  
This was solved by defining allowed zones and checking whether the player’s position remained within them before updating movement.

### Managing Background Music
Music from earlier scenes would sometimes continue playing into the next.  
The fix involved explicitly stopping or pausing one track before starting another, ensuring that ambient music began only once at the start of the experience.

### Timing the Flashlight Expansion
The final moment, where the flashlight expands to reveal the entire screen, originally happened too abruptly.  
A **gradual expansion variable** was added so the circle of light slowly grows, visually representing realization and closure.  
Once it reaches its maximum size, it triggers the final scene and music transition.

---

## Future Improvements
- Introduce ambient visual effects such as fog, falling leaves, or rain.  
- Add optional narration for poetic lines.  
- Make the ending paths more distinct with color changes or tone shifts.  
- Expand with new verses or branching poetic endings.
