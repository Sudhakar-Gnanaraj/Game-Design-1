# Peaceful Landscape — p5.js Sketch

[View Live Demo](https://sudhakar-gnanaraj.github.io/Game-Design-1/Day%201/Assignment/)

---

This **p5.js** sketch creates a simple landscape scene that visually represents *peace*.  
The artwork features a **gradient sky** transitioning from white to a warm brown hue and **three trees** with organic, rounded shapes.  
The composition and color palette evoke **serenity** and **balance**.

---

## Artistic Concept

This artwork captures **peace through simplicity** — using minimal shapes, muted earth tones, and balanced composition.  
Each tree, though slightly different in shape and height, stands harmoniously with the others, emphasizing **coexistence** and **natural beauty**.

---

# Emotional Transition Animation — From Peace to Fear

[View Live Demo](https://sudhakar-gnanaraj.github.io/Game-Design-1/Day%202/Assignment/)

---

## Overview
This animation project is designed to **visually represent the emotional transition** from a state of *peace* to a state of *fear* using minimalistic landscape visuals and interactive elements.  
The transition is triggered by a **mouse click**, shifting the viewer from a calm, serene environment to one of turmoil and disturbance.

---

## Animation 1: Peace

### **Visual Elements**
- Upright, symmetric trees with oval canopies  
- Smooth rolling hills  
- Background gradient from light to darker brown (suggesting early morning or evening)  
- Leaves gently falling from the trees  

### **Symbolism**
- Represents **tranquility**, **balance**, and **stability**

### **Effects**
- **Animation:** Leaves slowly drifting down  

---

## Animation 2: Fear

### **Visual Elements**
- Trees are now slanted, as if bent by a powerful wind  
- Strong contrast in lighting (**dark red and black hues** dominate the scene)  
- Heavy rainfall animated with slanted lines  
- Lightning/thunder effect suggested with occasional flicker  

### **Symbolism**
- Fear is represented by **environmental chaos** and **disorientation**  
- Slanted trees suggest **instability** and **external threat** (wind/storm)  
- Darker colors evoke **discomfort** and **anxiety**  

### **Effects**
- **Animation:** Diagonal rain and tree swaying  

---

## Interaction

- **Trigger:** Mouse click  
- **Function:** Transitions the scene from *Animation 1 (Peace)* to *Animation 2 (Fear)*  

---

## Future Improvements
- Add **sound effects** for immersive visuals  
- Introduce a **transitional animation** (e.g., wind picking up, sky darkening)

---

# Vine and Flower Generator

[View Live Demo](https://sudhakar-gnanaraj.github.io/Game-Design-1/Day%203/Assignment/)

---

## Description
This **p5.js** sketch generates a **grid of stylized vines** with curving stems, leaves, and colorful flowers.  
Clicking the canvas regenerates the scene with new random vines and flowers, using **Bezier curves** for natural curvature and **trigonometry** for accurate leaf placement.

---

## Code Overview

### `setup()`
- Initializes a **500×500 pixel** canvas.  
- Defines the size of each grid cell (**50px**).  
- Calculates grid dimensions (`xLength`, `yLength`).  
- Sets angle mode to **degrees**.  
- Disables continuous drawing with `noLoop()`.

### `mouseClicked()`
- Clears the background to black on each click.  
- Uses nested **for-loops** to:  
  - Draw vines with leaves in each grid cell.  
  - Draw flowers at the endpoint of each vine (shifted by size on the x-axis).

---

## Vine Drawing Logic

### `drawVineWithLeaves(x, y)`
- Randomly chooses a direction (diagonal: top-left → bottom-right or bottom-left → top-right).  
- Generates a **Bezier curve** from `(x, y)` to `(x + size, y ± size)`.  
- Draws two curves:  
  - A thicker, lighter green vine as **background**.  
  - A thinner, darker green vine as **foreground**.  
- Adds leaves using **tangent vectors** from the curve.

---

## Leaves

### `addLeavesAlongBezier(...)`
- Selects **2–3 random points** along the vine.  
- Uses `bezierPoint()` and `bezierTangent()` to calculate:  
  - Position on the curve.  
  - Curve direction (**angle**) at that point.  
- Rotates each leaf to follow the curve’s flow.

### `drawLeaf(x, y, angle)`
- Draws a **stylized green leaf** using two `bezierVertex()` calls to form a closed shape.  
- Leaves are rotated to appear as if growing naturally from the vine.

---

## Flowers

### `drawFlower(cx, cy, petalSize, petals)`
- Draws multiple **elliptical petals** evenly spaced in a circle using **trigonometry**.  
- Petals are randomly colored.  
- A **central circle** is drawn as the flower’s core.

---

## Color Usage
- Vine colors use `colorMode(HSB)` for smooth **green variations**.  
- Flower colors are randomly chosen **RGB values** for visual diversity.

---

## Interaction
- **Clicking the canvas** regenerates a fresh vine-flower grid.  
- The organic randomness ensures every click produces a **unique composition**.

---

# Random Image Grid Generator — p5.js

[View Live Demo](https://sudhakar-gnanaraj.github.io/Game-Design-1/Day%204/Assignment%20-%20Image%20Pattern/)

---

## Description
This **p5.js** sketch generates a **computer-created grid pattern** made up of **random images**.  
It loads a fixed number of image files and arranges them in a repeating grid layout.  
Each grid cell displays one randomly selected image, producing a fresh and unique collage **every frame**.

---

## Program Flow
1. All images are **loaded into memory** before the sketch begins.  
2. The **canvas** is created and the **refresh rate** is set.  
3. On each frame:
   - The program **clears the background**.  
   - A complete grid of **randomly selected images** is drawn.  
4. The process repeats, creating a **constantly changing visual composition**.

---

## Function Descriptions

### `preload()`
- Loads all the required images **before** the program begins.  
- The images are named sequentially (e.g., `0.png`, `1.png`, `2.png`, etc.) and stored inside the **Images** folder.  
- Each image is stored in an **array** so it can be randomly accessed later during pattern generation.

---

### `setup()`
- Initializes the **canvas** and defines sketch behavior.  
- The canvas automatically **fills the browser window**.  
- The **frame rate** is intentionally kept **low**, so the grid pattern refreshes slowly — allowing each arrangement to be seen before it changes again.

---

### `draw()`
- Continuously refreshes the screen and **regenerates the pattern**.  
- Each frame begins with a **light background color**.  
- Calls the `pattern()` function to generate the grid using the preloaded images.  
- Contains **commented-out code** for an optional **screen recording** feature (future use).

---

### `pattern(size)`
- Responsible for the **visual grid generation**.  
- Divides the entire canvas into **equal square cells** based on the given `size` value.  
- For every cell position:
  - A **random image** is selected from the preloaded array.  
  - The image is drawn within that cell.  
- Because a random image is chosen each time, **no two patterns are identical**.  
- Smaller `size` values create **denser** grids, while larger ones produce **fewer, bigger tiles**.

---

# Bat Sprite Animation in p5.js

[View Live Demo](https://sudhakar-gnanaraj.github.io/Game-Design-1/Day%205/Assignment-Sprite-2D-Array/)

---

This program animates a **bat sprite sheet** using **p5.js**.  
The sprite sheet is divided into multiple frames arranged in a **4×4 grid**.  
Each row corresponds to a different movement direction — **up, down, left, right**.  
The bat moves on the canvas based on arrow key inputs and cycles through the animation frames.

---

## How It Works

1. The sprite sheet (4×4) is divided into frames using `get()`.
2. Each direction (**up, down, left, right**) is stored in a row.
3. The `draw()` function cycles through frames in the chosen row.
4. When an arrow key is pressed:
   - The correct row is selected.
   - The sprite moves in that direction.
   - The frame animation runs continuously, simulating flying.

---

## Possible Improvements

- Prevent the bat from flying off-screen  
- Add a background

---

# Firefly Swarm Animation in p5.js

[View Live Demo](https://sudhakar-gnanaraj.github.io/Game-Design-1/Day%206/Assignment/)

---

This p5.js sketch creates an animated swarm of glowing fireflies.  
Each firefly:
- Moves slowly and randomly within the canvas.  
- Bounces back when reaching screen edges.  
- Flickers between bright and dim using its alpha (transparency) value.  
- The animation produces a relaxing, natural night-time scene.

## How It Works Visually
Each frame:
- The background resets to black.  
- Each firefly moves slightly and flickers.  
- Their positions and brightness combine to create a dynamic glowing swarm.  
- This produces a soft, organic effect reminiscent of a forest at night.

## Functions

### setup()
Creates a canvas the size of the browser window using `createCanvas(windowWidth, windowHeight)`.  
Loops count times to:
- Create a new Firefly instance.  
- Store it inside the global array `fireflies`.

### draw()
Clears the background with black (`background(0)`).  
Loops through each firefly in the array:
- Calls `update()` to change its position and brightness.  
- Calls `display()` to draw it on the screen.

## Class: Firefly
Represents one animated firefly.  
Each firefly has random position, size, movement direction, and glow intensity.

### Constructor
Initializes:
- `x, y`: random position on the canvas.  
- `size`: random glow size between 2 and 5 pixels.  
- `speedX, speedY`: small random velocities for gentle motion.  
- `alpha`: initial brightness (transparency).  
- `alphaDirection`: decides whether the firefly starts getting brighter or dimmer.

### update()
Makes Firefly objects:
- Move according to `speedX` and `speedY`.  
- Bounce off canvas edges by reversing velocity.  
- Adjust `alpha` to flicker smoothly between 100 and 255.  
- Reverse `alphaDirection` whenever hitting min/max brightness.

### display()
Uses a yellowish color `(255, 255, 100)` with variable transparency.  
Draws a soft glowing circle representing the firefly’s light.

## Possible Improvements
- Add gentle color variation (greens and yellows).  
- Introduce noise-based motion for more natural drifting.  
- Add depth effect (different speeds and sizes).  
- Make them attracted to the mouse or to each other.

---

# Interactive Animated Flowers in p5.js

[View Live Demo](https://sudhakar-gnanaraj.github.io/Game-Design-1/Day%207/Assignment/)

---

This project is an interactive **p5.js** sketch that creates a dynamic field of animated flowers.  
Each flower appears when the user clicks on the canvas.  
The flowers move, bounce off edges, grow over time, and gently sway when the mouse moves near them.

---

## Visual and Interactive Effects

- **Swaying Motion:**  
  Triggered when the mouse is nearby. The sway angle is generated using **Perlin noise** for smooth, organic movement.

- **Growth Animation:**  
  Each flower gradually expands to a maximum size.

- **Collision and Movement:**  
  Flowers move freely but bounce off both each other and the canvas edges.

- **Mouse Interaction:**  
  Clicking the mouse creates new flowers at any position.

---

## Flower Class Description

The `Flower` class defines how each flower behaves and appears.  
Each instance contains its own properties such as position, speed, size, and interaction state.

### Variables

- **Position (`x`, `y`)**: Determines where the flower is drawn.  
- **Speed (`xSpeed`, `ySpeed`)**: Controls the flower’s motion.  
- **Size**: Starts at a base value and grows gradually over time.  
- **Selected state**: Indicates whether the mouse is close enough to make the flower sway.  
- **Noise offsets**: Introduce random variation to sway and growth behavior.

### Functions

#### `drawFlower()`
- Draws the flower:
  - Five ellipses as petals, evenly spaced in a circular pattern.  
  - One central ellipse representing the flower’s core.  
  - The petals and center have fixed colors to create a simple yet attractive flower design.
- **Growth:**  
  Flowers gradually increase in size each frame until they reach a maximum limit, giving the visual impression of blooming over time.
- **Sway:**  
  If the mouse is nearby, the flower slightly rotates back and forth, imitating swaying.

#### `moveFlower()`
- Flowers continuously move in the direction of their assigned speed.  
- If they reach the edge of the canvas, they bounce back by reversing direction, keeping them visible within the screen.

#### `checkMousePosition(mX, mY)`
- Each frame, the distance between the mouse pointer and the flower’s center is checked.  
- If the pointer is within a certain range, the flower becomes **“selected”** and begins to sway gently.

#### `checkCollision(otherFlower)`
- When two flowers come too close to each other, they collide and change direction.  
- This prevents overlap and adds a more natural dynamic to their movement.

---

# The Road Taken: Interactive Narrative in p5.js

[View Live Demo](https://sudhakar-gnanaraj.github.io/Game-Design-1/Weekend%201%20-%20Assignment/)

---

**“The Road Taken”** is an interactive narrative inspired by Robert Frost’s *The Road Not Taken*.  
The player navigates through different visual paths and poem screens, symbolizing life’s choices.  
Each path (left or right) reveals different verses and outcomes, ending in a reflective conclusion.

The experience blends:
- Sprite-based character animation  
- Scene transitions  
- Interactive movement within restricted areas  
- Background music and ambient effects  
- Firefly particle effects for atmosphere  

---

## Game Flow Summary

- **Title Screen:**  
  Shows title and instructions.  
  Press ENTER to start.

- **Poem Intro:**  
  Displays the first poem verse.  
  ENTER → transitions into the main exploration scene.

- **Main Game (“The Crossroads”):**  
  Player moves with arrow keys within `allowedAreas`.  
  Moving into left or right path triggers corresponding poem sequences.

- **Path Poem Screens:**  
  Display verses for the chosen path.  
  ENTER → opens next gameplay area (left or right forest).

- **Path Gameplay:**  
  Similar movement as before.  
  Stepping into a second trigger leads to the final poem.

- **Final Poem and Scene:**  
  Shows the last verses with thematic visuals (e.g., fireflies).  
  Ends with the final reflection.  
  ENTER resets back to title.

---

## Function-by-Function Documentation

### `preload()`
- Loads all images and sounds before `setup()`.  
- Ensures assets (backgrounds, sprites, sound) are available.

### `setup()`
- Initializes canvas, scaling, background music, sprites, and fireflies.  
- Splits the sprite sheet into individual frames stored in a 2D array (`sprites[row][col]`).  
- Calls `resetAllowedAreas()` to define playable zones.  
- Creates `Firefly` objects for particle effects.

### `windowResized()`
- Adjusts canvas and scaling ratios when the browser window is resized.

### `resetAllowedAreas()`
- Copies the default movement boundaries into the active array `allowedAreas`.

### `draw()`
- Main loop that:
  - Scales the drawing environment.  
  - Chooses which scene or state to display based on `gameState`.  
  - Manages transitions between states using `drawTransition()`.  

- Each `gameState` corresponds to one of:
  - `"title"` – Title screen  
  - `"poem_intro"` – Opening poem  
  - `"game"` – Main forest crossroad scene  
  - `"path_poem_left"` / `"path_poem_right"` – Midway poems  
  - `"path_game_left"` / `"path_game_right"` – Left/right exploration  
  - `"final_poem_left"` / `"final_poem_right"` – Closing poems  
  - `"final_game_left"` / `"final_game_right"` – Final visual scene  
  - `"final_poem_left_2"` / `"final_poem_right_2"` – Epilogue poems

### `drawGameScreen(bgImg, allowed)`
- Draws background image for the current area.  
- Handles player movement and sprite animation.  
- Detects whether the player steps into trigger zones to initiate path transitions.

### `playerInsideRect(rect)`
- Checks if player’s position (`x`, `y`) lies inside a given rectangular trigger zone.

### `drawPoemIntroScreen(lines)` / `drawPathPoemScreen(poem)`
- Draws text for poem stanzas centered on screen.  
- Adds “Press ENTER to continue” prompt with a blinking effect.

### `drawFinalScreenPrompt()`
- Displays a prompt (“Press ENTER to continue”) on final screens.

### `handlePlayerMovement()`
- Updates player position when arrow keys are pressed.  
- Animates sprite frames every few frames.  
- Prevents movement outside `allowedAreas`.  
- Disables movement during final scenes.

### `isInsideAllowedArea(px, py)`
- Checks whether a given point lies within any allowed movement zone.

### `keyPressed(event)`
- Handles key input:
  - Movement (Arrow keys) → update direction & sprite row  
  - Enter → moves between game states using `startTransition()`  
  - Prevents unintended scrolling with arrow keys using `event.preventDefault()`

### `keyReleased(event)`
- Resets movement direction when arrow keys are released.

### `startTransition(targetState)`
- Starts a fade transition to another scene.  
- Sets `transitioning = true` and stores `nextState`.

### `drawTransition()`
- Handles fade-in/out visual transition using black overlay (`transitionAlpha`).  
- When fade-in completes (alpha == 255), switches to the new game state.  
- Fade-out restores visibility after the change.

### `resetPlayerPositionForState(state)`
- Resets player position and idle animation frame when entering a new scene.  
- Shifts position slightly for final game scenes.

---

## Firefly Class (Particle System)

**class `Firefly`**  
Represents a single glowing firefly used in the final scenes.

| Method        | Description |
|---------------|-------------|
| `constructor()` | Initializes position, velocity, size, and glow alpha |
| `update()`      | Moves the firefly, bounces off edges, and oscillates glow intensity |
| `display()`     | Draws the glowing particle as a soft yellow ellipse |

---

## Sound System
- `ambientMusic` is looped during gameplay once the player presses ENTER on the title screen.  
- Music pauses and resets when the player returns to the title.

---

## Scene Scaling
- The original coordinate system (480×360) is scaled proportionally to fit the browser window, ensuring consistent positioning across resolutions.

---

## Sprite Animation System
- The character sprite sheet is divided into `spriteRows × spriteCols`:  
  - Each row represents a movement direction (up, down, left, right, idle).  
  - Each column represents animation frames.  
- The animation cycles every 5 frames when moving.  
- **Note:** The sprite sheet is downloaded from online sources.

---

# The Road Taken: A Poetic Interactive Experience Built in p5.js


[View Live Demo](https://sudhakar-gnanaraj.github.io/Game-Design-1/Weekend%201%20-%20Assignment%20-%20Updated/)

---

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

---







