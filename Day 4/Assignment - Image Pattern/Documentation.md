This p5.js sketch generates a computer-created grid pattern made up of random images. It loads a fixed number of  image files and arranges them in a repeating grid layout. Each grid cell displays one randomly selected image, producing a fresh and unique collage every frame.

Program Flow
    All images are loaded into memory before the sketch begins.
    The canvas is created and the refresh rate is set.
    On each frame, the program clears the background and draws a complete grid of randomly selected images.
    The process repeats, creating a constantly changing visual composition.

Function Descriptions
preload()
    This function loads all the required images before the program begins.
    The images are named sequentially (for example, 0.png, 1.png, 2.png, etc.) and are stored inside the Images folder.
    Each image is saved in the array so that it can be randomly accessed later during pattern generation.

setup()
    This initializes the canvas and defines the behavior of the sketch.
    The canvas automatically fills the browser window.
    The frame rate is intentionally kept low so that the grid pattern refreshes slowly, allowing each new random arrangement to be visible before it changes again.

draw()
    This function continuously refreshes the screen and regenerates the pattern.
    Each frame begins with a light background color.
    The pattern() function is then called to create the grid using the preloaded images.
    Commented-out sections within this function show where the screen-recording feature can be activated in future.

pattern(size)
    This function is responsible for the visual grid generation.
    It divides the entire canvas into equal square cells based on the given size value.
    For every cell position, a random image is chosen from the preloaded array and drawn within that cell.
    Because a random image is chosen each time, no two patterns are ever identical.
    The smaller the size value, the denser the pattern; larger values produce fewer, bigger image tiles.

keyPressed() (commented out)
    This section, if enabled, would allow you to record the animation.
    Pressing “r” would start recording and pressing “s” would stop and save it.
    This feature requires an additional external library such as CCapture.js.