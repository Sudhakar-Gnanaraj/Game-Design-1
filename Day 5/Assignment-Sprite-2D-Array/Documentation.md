This program animates a bat sprite sheet using p5.js.The sprite sheet is divided into multiple frames arranged in a 4×4 grid.Each row corresponds to a different movement direction (up, down, left, right).The bat moves on the canvas based on arrow key inputs and cycles through the animation frames.

How It Works
    The sprite sheet (4×4) is divided into frames using get().
    Each direction (up, down, left, right) is stored in a row.
    The draw() function cycles through frames in the chosen row using frameCount % spriteX.
    When an arrow key is pressed:
        The correct row is selected.
        The sprite moves in that direction.
        The frame animation runs continuously, simulating flying.

Possible Improvements
    Prevent the bat from flying off-screen
    Add Background 

