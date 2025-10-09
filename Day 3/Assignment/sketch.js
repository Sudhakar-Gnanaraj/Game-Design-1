let size;
let xLength, yLength;

function setup() {
  createCanvas(500, 500);
  size = 50; 
  xLength = width / size;
  yLength = height / size;
  background(0);
  noLoop();
  angleMode(DEGREES);
}

function draw() {
  
}

function mouseClicked() {
  background(0);

  for (let col = 0; col < xLength; col++) {
    for (let row = 0; row < yLength; row++) {
      let x = size * col;
      let y = size * row;
      drawVineWithLeaves(x, y);
    }
  }
  
  for (let col = 0; col < xLength; col++) {
    for (let row = 0; row < yLength; row++) {
      let x = size * col;
      let y = size * row;
      drawFlower(x+size, y, size * 0.1, 6);
    }
  }
}

function drawVineWithLeaves(x, y) {
  colorMode(HSB);
  let baseHue = random(90, 140);
  let lightVineColor = color(baseHue, 50, 90);
  let darkVineColor = color(baseHue, 100, 60); 
  colorMode(RGB); 

  let startX, startY, endX, endY;
  let controlX1, controlY1, controlX2, controlY2;

  if (random() < 0.5) {
    startX = x;
    startY = y + size;
    endX = x + size;
    endY = y;

    controlX1 = startX + size * 0.1;
    controlY1 = startY - size * 0.6;
    controlX2 = startX + size * 0.9;
    controlY2 = startY - size * 0.4;
  } else {
    startX = x;
    startY = y;
    endX = x + size;
    endY = y + size;

    controlX1 = startX + size * 0.1;
    controlY1 = startY + size * 0.6;
    controlX2 = startX + size * 0.9;
    controlY2 = startY + size * 0.4;
  }


  stroke(lightVineColor);
  strokeWeight(5);
  noFill();
  bezier(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY);

  stroke(darkVineColor);
  strokeWeight(2);
  bezier(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY);

  addLeavesAlongBezier(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY);
  
}

function addLeavesAlongBezier(x0, y0, x1, y1, x2, y2, x3, y3) {
  let numLeaves = int(random(2, 4));
  for (let i = 0; i < numLeaves; i++) {
    let t = random(0.2, 0.8);
    let x = bezierPoint(x0, x1, x2, x3, t);
    let y = bezierPoint(y0, y1, y2, y3, t);

    let dx = bezierTangent(x0, x1, x2, x3, t);
    let dy = bezierTangent(y0, y1, y2, y3, t);
    let angle = atan2(dy, dx) + random(-45, 45);  

    drawLeaf(x, y, angle);
  }
}

function drawLeaf(x, y, angle) {
  push();
  translate(x, y);
  rotate(angle);
  fill(34, 139, 34); 
  noStroke();
  beginShape();
  vertex(0, 0);
  bezierVertex(5, -7.5, 15, -7.5, 20, 0);
  bezierVertex(15, 7.5, 5, 7.5, 0, 0);
  endShape(CLOSE);
  pop();
}

function drawFlower(cx, cy, petalSize, petals) {
  push();
  translate(cx, cy);
  fill(random(255), random(255), random(255));
  noStroke();
  for (let i = 0; i < petals; i++) {
    let angle = 360 / petals * i;
    let px = cos(angle) * petalSize;
    let py = sin(angle) * petalSize;
    ellipse(px, py, petalSize, petalSize * 1.5);
  }
  fill(random(255), random(255), random(255));
  ellipse(0,0, petalSize * 1.5, petalSize * 1.5);
  pop();
}
