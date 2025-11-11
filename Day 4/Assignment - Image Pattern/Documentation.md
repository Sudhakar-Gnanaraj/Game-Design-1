# Random Image Grid Generator — p5.js

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
