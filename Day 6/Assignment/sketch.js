let fireflies = [];
count = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < count; i++) {
    fireflies.push(new Firefly());
  }
}

function draw() {
  background(0);
  fireflies.forEach(f => {
    f.update();
    f.display();
  });
}
