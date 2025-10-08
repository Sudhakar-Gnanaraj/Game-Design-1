function setup() {
  createCanvas(1000, 1000);
  background(220);
}

function draw() {
  fill("yellow")
  rect(width/2,height/2,200,200);
}

function mouseClicked(){
  
  /*if(mouseY > height/2){
    fill("blue");
    if(mouseX >width/2){
      rect(mouseX,mouseY,100,100);
    }
    else{
      circle(mouseX,mouseY,100);
    }
  }
  else{
    fill("red");
    if(mouseX > width/2){
      rect(mouseX,mouseY,100,100);
    }
    else{
      circle(mouseX,mouseY,100);
    }
  }*/
  if(mouseY > height/2 && mouseX >width/2){
    fill("blue");
    rect(mouseX,mouseY,100,100);
  }
  else if(mouseY > height/2&& mouseX <= width/2){
    fill("blue");
    circle(mouseX,mouseY,100);
  }
  else if(mouseY < height/2 && mouseX >= width/2){
    fill("red");
    rect(mouseX,mouseY,100,100);
  }
  else{
    fill("red");
    circle(mouseX,mouseY,100);
  }
  
  if(mouseX > width/2 && mouseY > height/2 && mouseX <(width/2)+200 && mouseY < (height/2)+200){
    background(random(0,220));
    console.log("button click");
  }
  

}
