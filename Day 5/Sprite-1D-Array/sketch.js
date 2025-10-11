
let spriteImg;
let sRows=3,sCols=5;
let sprites=[];
let anim = false;
let animCount = 0;
let startFrameRate = 0;

function preload(){
  spriteImg = loadImage("Images/216X209-explosion.png");
  frameRate(20);
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  let sWidth = spriteImg.width/sCols;
  let sHeight = spriteImg.height/sRows;

  for(let i =0;i<sRows;i++){
    for(let j=0;j<sCols;j++){
      sprites.push(spriteImg.get(j*sWidth,i*sHeight,sWidth,sHeight));
    }
  }
}

function draw() {
  background(0);
  if(anim == true){
    
    let frame = ((frameCount-startFrameRate)%sprites.length);
    
    if(frame != 0){
      image(sprites[frame],0,0);
      animCount++;
    }
    else{
      if(animCount==0){
        image(sprites[frame],0,0);
        animCount++;
      }
      else{
          animCount = 0;
          anim=false;
      }
    }
  }
}

function keyReleased() {
  if(keyCode == 32){
    anim = true;
    startFrameRate = frameCount+1;
  }
}

