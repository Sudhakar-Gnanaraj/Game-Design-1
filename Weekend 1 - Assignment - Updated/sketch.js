let gameState = "title";
let transitioning = false;
let transitionAlpha = 0;
let transitionDirection = 1;
let nextState = "";
let lightLayer;

let spriteImage, sprites = [];
let spriteCols = 4, spriteRows = 5;
let count = 0;
let row = 3;
let idleCol = 0;
let x = 240, y = 320;
let xdir = 0, ydir = 0;

let ambientMusic;
let musicStarted = false;

let flashlightRadius = 60;
let flashlightMaxRadius = 480;
let flashlightExpanding = false;

let backgroundImage;
let backgroundLeft, backgroundRight;
let backgroundLeftFinal, backgroundRightFinal;

let allowedAreasDefault = [
  { x: 181, y: 61, w: 121, h: 61 },
  { x: 131, y: 0, w: 51, h: 101 },
  { x: 301, y: 0, w: 61, h: 101 },
  { x: 201, y: 121, w: 91, h: 241 }
];

let allowedAreas = [];

let pathChoiceLeft = { x: 131, y: 0, w: 51, h: 30 };
let pathChoiceRight = { x: 301, y: 0, w: 61, h: 30 };
let secondPathChoice = { x: 180, y: 0, w: 120, h: 30 };

let rightAllowed = [
  { x: 32, y: 40, w: 33, h: 289 },
  { x: 224, y: 296, w: 33, h: 65 },
  { x: 96, y: 200, w: 33, h: 97 },
  { x: 192, y: 72, w: 33, h: 65 },
  { x: 320, y: 168, w: 33, h: 65 },
  { x: 416, y: 40, w: 33, h: 161 },
  { x: 224, y: 0, w: 33, h: 73 },
  { x: 64, y: 296, w: 129, h: 33 },
  { x: 160, y: 264, w: 281, h: 33 },
  { x: 384, y: 296, w: 57, h: 33 },
  { x: 128, y: 200, w: 161, h: 33 },
  { x: 64, y: 40, w: 97, h: 33 },
  { x: 64, y: 136, w: 289, h: 33 },
  { x: 352, y: 200, w: 97, h: 33 },
  { x: 256, y: 40, w: 161, h: 33 }
];
let leftAllowed = [{ x: 180, y: 0, w: 120, h: 360 }];

let fireflies = [];

let scaleX, scaleY;

function preload() {
  backgroundImage = loadImage('Images/Sprite-0002.2.png');
  backgroundLeft = loadImage('Images/Sprite-0004.png');
  backgroundRight = loadImage('Images/Sprite-0010.png');
  backgroundLeftFinal = loadImage('Images/left_final.png');
  backgroundRightFinal = loadImage('Images/Sprite-0011.png');
  spriteImage = loadImage('Images/walking-export.png');
  ambientMusic = loadSound('Sound/ambient.mp3');
  finalMusic = loadSound('Sound/final_music.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  scaleX = width / 480;
  scaleY = height / 360;

  ambientMusic.setLoop(true);
  //ambientMusic.setVolume(0.3); 

  lightLayer = createGraphics(480, 360);
  lightLayer.pixelDensity(1);

  let w = spriteImage.width / spriteCols;
  let h = spriteImage.height / spriteRows;
  for (let i = 0; i < spriteRows; i++) {
    sprites[i] = [];
    for (let j = 0; j < spriteCols; j++) {
      sprites[i][j] = spriteImage.get(j * w, i * h, w, h);
    }
  }

  resetAllowedAreas();

  for (let i = 0; i < 30; i++) {
    fireflies.push(new Firefly());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scaleX = width / 480;
  scaleY = height / 360;
}

function resetAllowedAreas() {
  allowedAreas = allowedAreasDefault.map(area => ({ ...area }));
}

function draw() {
  push();
  scale(scaleX, scaleY);

  if (gameState == "title") {
    frameRate(60);
    background(30);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("The Road Taken", 480 / 2, 360 / 2 - 40);
    textSize(14);
    text("An Interactive Poem", 480 / 2, 360 / 2);
    if (frameCount % 60 < 30) {
      text("Press ENTER to continue", 480 / 2, 360 / 2 + 40);
    }
  } else if (gameState == "poem_intro") {
    frameRate(60);
    drawPoemIntroScreen([
      "Two roads diverged in a yellow wood,",
      "And sorry I could not travel both",
      "And be one traveler, long I stood",
      "And looked down one as far as I could",
      "To where it bent in the undergrowth;"
    ]);
  } else if (gameState == "game") {
    frameRate(30);
    drawGameScreen(backgroundImage, allowedAreas);
  } else if (gameState == "path_poem_left") {
    frameRate(60);
    drawPathPoemScreen([
      "Then took the other, worn and wide,",
      "With footsteps clear and voices near,",
      "It called with ease, its way defined",
      "Though less a mystery, more sincere,",
      "A path familiar, yet still unknown,"
    ]);
  } else if (gameState == "path_poem_right") {
    frameRate(60);
    drawPathPoemScreen([
      "Then took the other, as just as fair,",
      "And having perhaps the better claim,",
      "Because it was grassy and wanted wear;",
      "Though as for that the passing there",
      "Had worn them really about the same,"
    ]);
  } else if (gameState == "path_game_left") {
    frameRate(30);
    drawGameScreen(backgroundLeft, leftAllowed);
  } else if (gameState == "path_game_right") {
    frameRate(30);
    drawGameScreen(backgroundRight, rightAllowed);
  } else if (gameState == "final_poem_left") {
    frameRate(60);
    drawPathPoemScreen([
      "And both that morning equally lay",
      "In light that filtered soft and clear.",
      "Oh, I chose the one most traveled today,",
      "The one where many steps had strayed,",
      "And with that choice, I left behind fear.,"
    ]);
  } else if (gameState == "final_poem_right") {
    frameRate(60);
    drawPathPoemScreen([
      "And both that morning equally lay",
      "In leaves no step had trodden black.",
      "Oh, I kept the first for another day!",
      "Yet knowing how way leads on to way,",
      "I doubted if I should ever come back.,"
    ]);
  } else if (gameState == "final_game_left") {
    frameRate(60);
    drawGameScreen(backgroundLeftFinal, leftAllowed);
    drawFinalScreenPrompt();
  } else if (gameState == "final_game_right") {
    frameRate(60);
    drawGameScreen(backgroundRightFinal, rightAllowed);
    fireflies.forEach(f => {
      f.update();
      f.display();
    });
    if (ambientMusic.isPlaying() && flashlightExpanding) {
      ambientMusic.stop();     
    }
    if (!finalMusic.isPlaying() && flashlightExpanding) {
      finalMusic.loop();  
    }
    drawPlayerLight(flashlightRadius);
    drawFinalScreenPrompt();
  } else if (gameState == "final_poem_left_2") {
    frameRate(60);
    drawPathPoemScreen([
      "I shall be telling this with a smile",
      "Somewhere ages and ages hence:",
      "Two roads diverged in a wood, and I-",
      "Took the one well-worn, with ease,",
      "And that has made all the difference."
    ]);
  } else if (gameState == "final_poem_right_2") {
    frameRate(60);
    drawPathPoemScreen([
      "I shall be telling this with a sigh",
      "Somewhere ages and ages hence:",
      "Two roads diverged in a wood, and I—",
      "I took the one less traveled by,",
      "And that has made all the difference."
    ]);
  }

  pop();

  drawTransition();
}

/*function drawAllowedAreas() {
  noFill();
  stroke(0, 255, 0); 
  strokeWeight(1);
  
  for (let area of allowedAreas) {
    rect(area.x, area.y, area.w, area.h);
  }
}*/

function drawGameScreen(bgImg, allowed) {
  image(bgImg, 480 / 2, 360 / 2, 480, 360);
  allowedAreas = allowed;

  //drawAllowedAreas();
  if (gameState === "path_game_right" /*|| gameState == "final_game_right"*/) {
    drawPlayerLight(flashlightRadius);
  }
  handlePlayerMovement();

  let frameW = spriteImage.width / spriteCols;
  let frameH = spriteImage.height / spriteRows;

  if (xdir == 0 && ydir == 0) {
    image(sprites[0][idleCol], x, y, frameW, frameH);
  } else {
    image(sprites[row][count], x, y, frameW, frameH);
  }

  if (gameState == "game") {
    if (playerInsideRect(pathChoiceLeft)) startTransition("path_poem_left");
    else if (playerInsideRect(pathChoiceRight)) startTransition("path_poem_right");
  } else if (gameState == "path_game_left") {
    if (playerInsideRect(secondPathChoice)) startTransition("final_poem_left");
  } else if (gameState == "path_game_right") {
    if (playerInsideRect(secondPathChoice)) startTransition("final_poem_right");
  }
}

function playerInsideRect(rect) {
  return x > rect.x && x < rect.x + rect.w && y > rect.y && y < rect.y + rect.h;
}

function drawPoemIntroScreen(lines) {
  background(30);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  for (let i = 0; i < lines.length; i++) {
    text(lines[i], 480 / 2, 360 / 2 - 40 + i * 22);
  }
  textSize(12);
  if (frameCount % 60 < 30) {
    text("Press ENTER to continue", 480 / 2, 360 - 30);
  }
}

function drawPathPoemScreen(poem) {
  background(30);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(16);
  for (let i = 0; i < poem.length; i++) {
    text(poem[i], 480 / 2, 360 / 2 - 40 + i * 22);
  }
  textSize(12);
  if (frameCount % 60 < 30) {
    text("Press ENTER to continue", 480 / 2, 360 - 30);
  }
}

function drawFinalScreenPrompt() {
  fill(255);
  textSize(14);
  textAlign(CENTER, BOTTOM);
  text("Press ENTER to continue", 480 / 2, 360 - 20);
}

function handlePlayerMovement() {
  if (gameState == "final_game_left") return;


  let oldX = x, oldY = y;
  if ((xdir != 0 || ydir != 0)) {
    if (frameCount % 5 == 0) {
      count = (count + 1) % spriteCols;
    }
    x += xdir;
    y += ydir;
    if (!isInsideAllowedArea(x, y)) {
      x = oldX;
      y = oldY;
    }
  } else {
    count = 0;
  }
}

function isInsideAllowedArea(px, py) {
  for (let area of allowedAreas) {
    if (px> area.x && px < area.x + area.w && py > area.y && py< area.y + area.h) {
      return true;
    }
  }
  return false;
}

let keys = {};

function keyPressed(event) {
  if (transitioning) return;

  if (
    event.key == 'ArrowUp' ||
    event.key == 'ArrowDown' ||
    event.key == 'ArrowLeft' ||
    event.key == 'ArrowRight' ||
    event.key == 'Enter'
  ) {
    event.preventDefault();
  }

  keys[event.key] = true;

  if (gameState != "final_game_left" && gameState != "final_game_right") {
    if (keys['ArrowUp']) {
      row = 4; idleCol = 3;
      xdir = 0; ydir = -2;
    }
    if (keys['ArrowDown']) {
      row = 3; idleCol = 0;
      xdir = 0; ydir = 2;
    }
    if (keys['ArrowLeft']) {
      row = 2; idleCol = 2;
      xdir = -2; ydir = 0;
    }
    if (keys['ArrowRight']) {
      row = 1; idleCol = 1;
      xdir = 2; ydir = 0;
    }
  }

  if (event.key == 'Enter') {
    if (gameState == "title") {
      if (!musicStarted) {
      ambientMusic.play();
      musicStarted = true;
      }
      resetAllowedAreas();
      startTransition("poem_intro");
    } else if (gameState == "poem_intro") {
      startTransition("game");
    } else if (gameState == "path_poem_left") {
      startTransition("path_game_left");
    } else if (gameState == "path_poem_right") {
      startTransition("path_game_right");
    } else if (gameState == "final_poem_left") {
      startTransition("final_game_left");
    } else if (gameState == "final_poem_right") {
      startTransition("final_game_right");
    } else if (gameState == "final_game_left") {
      startTransition("final_poem_left_2");
    } else if (gameState == "final_game_right") {
      if(flashlightExpanding == false){
        flashlightExpanding = true;
      }
      else{
        startTransition("final_poem_right_2");
      }
    } else if (
      gameState == "final_poem_left_2" ||
      gameState == "final_poem_right_2"
    ) {
      resetAllowedAreas();
      ambientMusic.pause(); 
      musicStarted = false; 
      resetGameVariables(); 
      startTransition("title");
    }
  }
}

function keyReleased(event) {
  keys[event.key] = false;

  if (!keys['ArrowUp'] && ydir == -2) ydir = 0;
  if (!keys['ArrowDown'] && ydir == 2) ydir = 0;
  if (!keys['ArrowLeft'] && xdir == -2) xdir = 0;
  if (!keys['ArrowRight'] && xdir == 2) xdir = 0;
}

function startTransition(targetState) {
  if (transitioning) return;
  transitioning = true;
  transitionAlpha = 0;
  transitionDirection = 1;
  nextState = targetState;
}

function drawTransition() {
  if (!transitioning) return;

  transitionAlpha += 5 * transitionDirection;
  transitionAlpha = constrain(transitionAlpha, 0, 255);

  fill(0, transitionAlpha);
  rect(0, 0, width, height);

  if (transitionAlpha == 255 && transitionDirection == 1) {
    gameState = nextState;
    resetPlayerPositionForState(gameState);
    transitionDirection = -1;
  } else if (transitionAlpha == 0 && transitionDirection == -1) {
    transitioning = false;
  }
}

function resetPlayerPositionForState(state) {
  if (
    state == "game" ||
    state == "path_game_left" ||
    state == "path_game_right" ||
    state == "final_game_left" ||
    state == "final_game_right"
  ) {
    x = 240;
    y = 320;

    if (state == "final_game_left" || state == "final_game_right") {
      y -= 60;
    }

    xdir = 0;
    ydir = 0;
    row = 3;
    idleCol = 0;
    count = 0;
  }
}

function drawPlayerLight(radius = 100) {
  lightLayer.clear();
  lightLayer.fill(0);
  lightLayer.noStroke();
  lightLayer.rect(0, 0, 480, 360);
  lightLayer.erase();
  lightLayer.ellipse(x, y, radius * 2, radius * 2);
  lightLayer.noErase();
  image(lightLayer, 480 / 2, 360 / 2);

  if (flashlightExpanding && flashlightRadius < flashlightMaxRadius) {
    flashlightRadius += 2;
    if (flashlightRadius >= flashlightMaxRadius) {
      flashlightRadius = flashlightMaxRadius;
      flashlightExpanding = false;
    }
  }
}

function resetGameVariables() {
  flashlightRadius = 60;
  flashlightExpanding = false;
  finalMusic.stop();
}

