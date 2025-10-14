let g = [] , imageCount = 5;
/*let capturer;
let recording = false;*/

function preload(){
  for(let i=0; i< imageCount; i++){
    g[i] = loadImage("Images/"+i+".png");
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(2);
}

function draw() {
  background(220);
  pattern(50);

  /*if (recording) {
    capturer.capture();
  }*/
}

function pattern(size){

  for (let i=0; i<width/size; i++){
    for(let y=0; y<height/size; y++){
      let r = floor(random(0,imageCount));
      image(g[r],size*i,size*y);
      /*console.log(r);
      switch (r) {
      case 0:
        image(g0,size*i,size*y);
        break;
      case 1:
        image(g1,size*i,size*y);
        break;
      case 2:
        image(g2,size*i,size*y);
        break;
      case 3:
        image(g3,size*i,size*y);
        break;
      default:
        image(g4,size*i,size*y);
        break;
      }*/
    }
  }

  /*function keyPressed() {
    if (key === 'r') {
      recording = true;
      capturer.start();
      console.log("Recording started...");
    }

    if (key === 's') {
      recording = false;
      capturer.stop();
      capturer.save();
      console.log("Recording stopped and saved.");
    }
  }*/
}

