let cols, rows;
let scale = 10;
let noiseScale = 0.01;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB, 255); 
  noStroke();
  cols = floor(width / scale);
  rows = floor(height / scale);
}

function draw() {
  background(0);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let xoff = x * noiseScale;
      let yoff = y * noiseScale;
      let zoff = frameCount * 0.01;
      let n = noise(xoff, yoff, zoff);

      let hue = map(n, 0, 1, 0, 255); 
      fill(hue, 200, 255); 
      rect(x * scale, y * scale, scale, scale);
    }
  }
}
