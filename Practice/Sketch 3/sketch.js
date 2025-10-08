function setup() {
  createCanvas(1000, 1000);
  background(220);
}

function draw() {
  
}

function mouseClicked(){
  drawShape(mouseX,mouseY,100);
}

function drawShape(x,y,headSize){
  fill("blue");
  rect(x-50,y+50,100,150);
  fill(random(0,200),0,0);
  circle(x,y,headSize);
}