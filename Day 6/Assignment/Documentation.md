This p5.js sketch creates an animated swarm of glowing fireflies.
Each firefly:
    Moves slowly and randomly within the canvas.
    Bounces back when reaching screen edges.
    Flickers between bright and dim using its alpha (transparency) value.
    The animation produces a relaxing, natural night-time scene.

How It Works Visually
Each frame:
    The background resets to black.
    Each firefly moves slightly and flickers.
    Their positions and brightness combine to create a dynamic glowing swarm.
    This produces a soft, organic effect reminiscent of a forest at night.

Functions
    setup()
    Creates a canvas the size of the browser window using createCanvas(windowWidth, windowHeight).
    Loops count times to:
        Create a new Firefly instance.
        Store it inside the global array fireflies.

draw()
    Clears the background with black (background(0)).
    Loops through each firefly in the array:
    Calls update() to change its position and brightness.
    Calls display() to draw it on the screen.

Class: Firefly
    Represents one animated firefly.
    Each firefly has random position, size, movement direction, and glow intensity.

Constructor
    Initializes:
        x, y: random position on the canvas.
        size: random glow size between 2 and 5 pixels.
        speedX, speedY: small random velocities for gentle motion.
        alpha: initial brightness (transparency).
        alphaDirection: decides whether the firefly starts getting brighter or dimmer.
    
update()
    Makes Firefly objects:
        Moves according to speedX and speedY.
        Bounces off canvas edges by reversing velocity.
        Adjusts alpha to flicker smoothly between 100 and 255.
        Reverses alphaDirection whenever hitting min/max brightness.

display()
    Uses a yellowish color (255, 255, 100) with variable transparency.
    Draws a soft glowing circle representing the firefly’s light.

Possible Improvements
    Add gentle color variation (greens and yellows).
    Introduce noise-based motion for more natural drifting.
    Add depth effect (different speeds and sizes).
    Make them attracted to the mouse or to each other.