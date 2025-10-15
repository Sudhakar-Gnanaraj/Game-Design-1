This project is an interactive p5.js sketch that creates a dynamic field of animated flowers. Each flower appears  when the user clicks on the canvas. The flowers move, bounce off edges, grow over time, and gently sway when the mouse moves near them.

Visual and Interactive Effects
    Swaying Motion:
        Triggered when the mouse is nearby. The sway angle is generated using Perlin noise for smooth, organic movement.
    Growth Animation:
        Each flower gradually expands to a maximum size.
    Collision and Movement:
        Flowers move freely but bounce off both each other and the canvas edges.
    Mouse Interaction:
        Clicking the mouse creates new flowers at any position.


Flower Class Description
    The Flower class defines how each flower behaves and appears.
    Each instance contains its own properties such as position, speed, size, and interaction state.

    Variables:
    Position (x, y): Determines where the flower is drawn.
    Speed (xSpeed, ySpeed): Controls the flower’s motion.
    Size: Starts at a base value and grows gradually over time.
    Selected state: Indicates whether the mouse is close enough to make the flower sway.
    Noise offsets: Introduce random variation to sway and growth behavior.

    Functions:
    drawFlower()
    Drawing the flower:
        Five ellipses as petals, evenly spaced in a circular pattern.
        One central ellipse representing the flower’s core.
        The petals and center have fixed colors to create a simple yet attractive flower design.
    Growth:
        Flowers gradually increase in size each frame until they reach a maximum limit.
        This gives the visual impression of blooming over time.
    Sway:
        If the mouse is nearby, the flower slightly rotates back and forth, imitating swaying.

    moveFlower()
        Flowers continuously move in the direction of their assigned speed.
        If they reach the edge of the canvas, they bounce back by reversing direction, keeping them visible within the screen.

    checkMousePosition(mX, mY)
        Each frame, the distance between the mouse pointer and the flower’s center is checked.
        If the pointer is within a certain range, the flower becomes “selected” and begins to sway gently.

    checkCollision(otherFlower)
        When two flowers come too close to each other, they collide and change direction.
        This prevents overlap and adds a more natural dynamic to their movement.

