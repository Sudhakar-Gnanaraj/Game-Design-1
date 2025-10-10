function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  let petalCount = 12;
  drawFlower(12,500,300);
}

function drawFlower(petalNo,x,y){
  push();
  translate(x,y);
  rotate(frameCount);
  for(let i=0;i<petalNo;i++){
    ellipse(80,0,100,50);
    rotate(360/petalNo);
  }
  ellipse(0,0,80,80);
  pop();
}
