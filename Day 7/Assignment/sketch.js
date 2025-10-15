let flowers = [];
function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  for(let i =0;i<flowers.length;i++) {
    flowers[i].checkMousePosition(mouseX, mouseY);
    for(let j = 0;j<flowers.length;j++) {
      if(i!=j) {
        flowers[i].checkCollision(flowers[j]);
      }
    }
    flowers[i].moveFlower();
    flowers[i].drawFlower();
  }
}

function mousePressed() {
  let tempFlower = new Flower(mouseX, mouseY, random(-10,10), random(-10,10));
  flowers.push(tempFlower);
}
