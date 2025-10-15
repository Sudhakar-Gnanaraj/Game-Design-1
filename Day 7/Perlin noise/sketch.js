let x=0;
let size = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220)
  let noiseValue = noise(0.01*frameCount +1000);
  let noiseMapped = map(noiseValue,0,1,0,height);
  //drawLine(noiseMapped);
  perlin2D();
}

function drawLine(y){
  line(x,0,x,y);
  if(x==0){
    background(220);
  }
  x++;
  if(x==width){
    x=0;
  }
}

function perlin2D(){
  for(let i=0; i<width/size; i++){
    for(let j=0; j<height/size; j++){
      let outputNoise = noise((i+frameCount/5)*0.01,j*0.01);
      let outputMapped = map(outputNoise, 0, 1, 0, 255);
      fill(outputMapped);
      noStroke();
      rect(i*size,j*size,size,size);
    }
  }
}

