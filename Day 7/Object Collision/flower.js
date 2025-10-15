class Flower {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  drawFlower() {
    image(flowerImage, this.x, this.y);
  }

  moveFlower(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x > width || this.x < 0){
        this.xSpeed *= -1;
    }
    if(this.y > height || this.y <0){
        this.ySpeed *= -1;
    }
  }
}