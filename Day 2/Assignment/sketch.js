let leafSpawnSpeed = 300;
let leafFallSpeedFast = 4;
let leafFallSpeed = 1;
let leafPosition = [0,0,0,0,0,0];
let leafSpawnIndex = 0;
let isVisible = true;
let randomFlicker = 80;
let drops = [];
let state = 1
function setup() {
  createCanvas(640,480);
  for (let i = 0; i < 300; i++) {
    let x = random(width);
    let y = random(height);
    drops.push({ x: x, y: y });
  }
}

function draw() {
  if (state ==1){
    peace();
  }
  else{
    fear();
  }
}

function mouseClicked(){
  state*=-1;
}

function peace() {
  let c1 = color(255, 255, 255); 
  let c2 = color(144, 98, 66); 
  gradientBG(0, 0, 640, 480, c1, c2);
  fill(179,126,79);
  noStroke();
  ellipse(95, 175, 100, 160);
  ellipse(305, 135, 110, 180);
  ellipse(545, 235, 100, 160);
  fill(59,31,7);
  noStroke();
  circle(70,650,500);
  circle(270,650,550);
  circle(550,650,430);
  fill(59,31,7);
  noStroke();
  ellipse(100, 180, 100, 160);
  ellipse(310, 140, 110, 180);
  ellipse(550, 240, 100, 160);
  stroke(59,31,7);
  strokeWeight(5);
  line(100,480,100,180);
  line(100,300,140,200);
  line(100,280,55,190);
  
  line(310,480,310,180);
  line(310,300,340,200);
  line(310,280,275,130);
  
  line(550,480,550,180);
  line(550,380,590,200);
  line(550,360,510,220);

  /*if(frameCount>leafSpawnSpeed){
    
  }
  
  ellipse(90, 160 + leafPosition[1], 5, 13);

  leafPosition[1] += leafFallSpeed;
  //print(leafFallSpeed);
  //leaves()*/
  
  leavesPeace(110,250,160,0);
  leavesPeace(60,215,190,1);
  
  leavesPeace(320,215,165,2);
  leavesPeace(260,160,220,3);
  
  leavesPeace(520,290,160,4);
  leavesPeace(580,290,190,5);
}


function leavesPeace(startX, startY, endY, i){
      ellipse(startX, startY + leafPosition[i], 5, 13);
      leafPosition[i] += leafFallSpeed;
  
      if(leafPosition[i] > endY)
      {
         leafPosition[i] = 0;
      }
}

function fear(){
  angleMode(DEGREES);
  
  flicker();
  rain();
  fill(166,20,20);
  noStroke();
  rotatedEllipse(95,175,100,160);
  rotatedEllipse(305,135,110,180);
  rotatedEllipse(545, 235, 100, 160);
  fill(41,0,0);
  noStroke();
  circle(70,650,500);
  circle(270,650,550);
  circle(550,650,430);
  fill(41,0,0);
  noStroke();
  rotatedEllipse(100, 180, 100, 160);
  rotatedEllipse(310, 140, 110, 180);
  rotatedEllipse(550, 240, 100, 160);
  stroke(41,0,0);
  strokeWeight(5);
  line(100,480,180,180);
  //line(140,,140,200); //+40
  //line(100,280,55,190);
  
  line(310,480,390,180);
  //line(310,300,340,200);
  //line(310,280,275,130);
  
  line(550,480,680,180);
  //line(550,380,590,200);
  //line(550,360,510,220);

  /*if(frameCount>leafSpawnSpeed){
    
  }
  
  ellipse(90, 160 + leafPosition[1], 5, 13);

  leafPosition[1] += leafFallSpeed;
  //print(leafFallSpeed);
  //leaves()*/
  
  leavesFear(110,280,160,0);
  leavesFear(60,250,190,1);
  
  leavesFear(320,215,165,2);
  leavesFear(260,220,220,3);
  
  leavesFear(130,280,160,4);
  leavesFear(350,215,190,5);
}
function gradientBG(x, y, w, h, c1, c2) {
  noFill();
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, y + h, 0, 1);
    let gradColor = lerpColor(c1, c2, inter);
    stroke(gradColor);
    line(x, i, x + w, i);
  }
}

function leavesFear(startX, startY, endY, i){
      rotatedLeaves(startX + leafPosition[i], startY + leafPosition[i] , 5, 13);
      leafPosition[i] += leafFallSpeedFast;
  
      if(leafPosition[i] + startY > 640)
      {
         leafPosition[i] = 0;
      }
}

function rotatedEllipse(x,y,w,h){
  push();
  translate(x,y);
  rotate(25);
  ellipse(100,0,w,h);
  pop();
}

function rotatedLeaves(x,y,w,h){
  push();
  translate(x,y);
  rotate(-25);
  ellipse(100,0,w,h);
  pop();
}

function rain(){
  stroke(173, 216, 230); 
  strokeWeight(1);

  for (let drop of drops) {
    line(drop.x, drop.y, drop.x + 4, drop.y + 10);

    drop.x += 2;
    drop.y += 5;

    if (drop.y > height || drop.x > width) {
      drop.x = random(-1200, width); 
      drop.y = random(-100, 0);
    }
  }
}

function flicker(){
  let c3 = color(84,72,72); 
  let c4 = color(41,0,0); 
  let c5 = color(255,255,255);
  if (isVisible) {
    gradientBG(0, 0, 640, 480, c3, c4);
  } else {
    gradientBG(0, 0, 640, 480, c5, c4);
  }
  if (frameCount>randomFlicker){
    isVisible = !isVisible;
    if(isVisible){
         randomFlicker+=random(30,120);
       }
    else{
      randomFlicker+=random(10,30);
    }
    
  }
}