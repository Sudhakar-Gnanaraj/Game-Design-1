class Firefly {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.size = random(2, 5);
    this.speedX = random(-0.5, 0.5);
    this.speedY = random(-0.5, 0.5);
    this.alpha = random(100, 255);
    this.alphaDirection = random() < 0.5 ? -1 : 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > windowWidth) this.speedX *= -1;
    if (this.y < 0 || this.y > windowHeight) this.speedY *= -1;

    this.alpha += this.alphaDirection * 2;
    if (this.alpha < 100) {
      this.alpha = 100;
      this.alphaDirection *= -1;
    } else if (this.alpha > 255) {
      this.alpha = 255;
      this.alphaDirection *= -1;
    }
  }

  display() {
    noStroke();
    fill(255, 255, 100, this.alpha);
    ellipse(this.x, this.y, this.size);
  }
}
