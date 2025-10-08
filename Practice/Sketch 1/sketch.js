function setup() {
  createCanvas(400, 400);
  background(220);
  fill(255,0,0);
}

function draw() {
  
  noStroke();


  if(key == 1){
    fill(255,0,0);
  }
  else if(key == 2){
    fill(0,255,0);
  }
  else if(key == 3){
    fill(0,0,255);
  }

  
  if(mouseIsPressed){
    ellipse(mouseX,mouseY,20,20);
    ellipse(width - mouseX,mouseY,20,20);
  }


}
