class Flower {
  constructor(x,y,xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.size = 50;
    this.selected = false;
    this.noiseOffset = random(1000);
    this.growOffset = random(2000);
  }
  drawFlower() {
    push();
    translate(this.x, this.y);

    //Grow
    if(this.size<200){
        this.size *= 1.001;
    }
    
    fill(255, 100, 100);

    //Sway when near mouse pointer
    if (this.selected) {
       let angle = map(noise(this.noiseOffset + frameCount * 0.01), 0, 1, -90, 90);
        rotate(angle);
    }
    noStroke();

    let petalLength = this.size;
    let petalWidth = this.size;

    for (let i = 0; i < 5; i++) {
        let a = (360 / 5) * i;
        let px = cos(a) * (this.size / 2);
        let py = sin(a) * (this.size / 2);
        ellipse(px, py, petalLength, petalWidth);
    }

    fill(255, 220, 0); 
    ellipse(0, 0, this.size * 0.6);

    pop(); 
  }
  moveFlower() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.y>height || this.y<0) {
      this.ySpeed = -this.ySpeed;
    }
    if(this.x>width || this.x<0) {
      this.xSpeed = -this.xSpeed;
    }
  }
  checkMousePosition(mX, mY) {
    let distance = dist(mX, mY, this.x, this.y);
    if(distance < this.size*3){
      this.selected = true;
    } else {
      this.selected = false;
    }
  }

  checkCollision(otherFlower) {
    let distance = dist(this.x, this.y,otherFlower.x, otherFlower.y);
    if(distance < this.size/2 +otherFlower.size/2) {
      this.xSpeed = -this.xSpeed;
      this.ySpeed = -this.ySpeed;
    }
  }

}