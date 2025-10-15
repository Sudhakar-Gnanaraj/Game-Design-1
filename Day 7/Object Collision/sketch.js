let flowerImage;
let flowers = [];

function preload() {
  flowerImage = loadImage('Images/flower.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(154,205,50);
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].moveFlower();
    flowers[i].drawFlower();
  }
}

function mousePressed() {
  flowers.push(new Flower(mouseX, mouseY, random(-5,5), random(-5,5)));
}


