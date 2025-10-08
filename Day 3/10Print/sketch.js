let size
function setup() {
  createCanvas(1000, 1000);
  size = 50;
  xLength = width/size;
  yLength = height/size;
  background(220);
}

function draw() {
  
}

function mouseClicked(){
  background(220);
  for(let i = 0; i < xLength; i++){
    for(let y = 0; y < yLength; y++){
      randomLine(size*i,size*y,random(0,1))
    }
  }
}

function randomLine(x,y,r){
  strokeWeight(5);
  stroke(random(0,255),random(0,255),random(0,255))
  //console.log(r);
  if(r < 0.5){
    line(x+size,y,x,y+size);
  }
  else{
    line(x,y,x+size,y+size);
  }
}
