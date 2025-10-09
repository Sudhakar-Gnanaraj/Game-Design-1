Vine and Flower Generator

Description:
    This p5.js sketch generates a grid of stylized vines with curving stems, leaves, and colorful flowers. Clicking the canvas regenerates the scene with new random vines and flowers, using Bezier curves for natural curvature and trigonometry for proper leaf placement.

Code Overview

    setup():
        Initializes a 500×500 pixel canvas.
        Defines the size of each grid cell (50px).
        Calculates grid dimensions (xLength, yLength).
        Sets angle mode to degrees.
        Disables continuous drawing with noLoop().

    mouseClicked()
    Clears the background to black on each click.
    Uses nested for-loops to:
        Draw vines with leaves in each grid cell.
        Draw flowers at the endpoint of each vine (shifted by size on x-axis).
    
Vine Drawing Logic
    drawVineWithLeaves(x, y)
        Randomly chooses a direction (diagonal: top-left to bottom-right or bottom-left to top-right).
        Generates a Bezier curve from (x, y) to (x + size, y ± size).
        Draws two curves:
            A thicker, lighter green vine as background
            A thinner, darker green vine as foreground
        Adds leaves using tangent vectors from the curve.

Leaves
    addLeavesAlongBezier(...)
        Selects 2–3 random points along the vine.
        Uses bezierPoint() and bezierTangent() to calculate:
            Position on the curve
            Curve direction (angle) at that point
            Rotates each leaf to follow the curve’s flow.
    drawLeaf(x, y, angle)
        Draws a stylized green leaf using two bezierVertex() calls to form a closed shape.
        Leaves are rotated to appear as if growing naturally from the vine.

Flowers
    drawFlower(cx, cy, petalSize, petals)
        Draws multiple elliptical petals evenly spaced in a circle using trigonometry.
        Petals are randomly colored.
        A central circle is drawn as the flower’s core.

Color Usage
    Vine colors are generated using colorMode(HSB) for smooth green variations.
    Flower colors are randomly chosen RGB values for visual diversity.

Interaction
    Clicking the canvas regenerates a fresh vine-flower grid.
    The organic randomness ensures every click produces a unique composition.
