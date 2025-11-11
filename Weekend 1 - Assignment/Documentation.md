# The Road Taken: Interactive Narrative in p5.js

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
