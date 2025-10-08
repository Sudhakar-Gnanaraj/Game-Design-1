function setup() {
  createCanvas(640,480);
  let c1 = color(255, 255, 255); 
  let c2 = color(144, 98, 66); 
  gradientBG(0, 0, 640, 480, c1, c2);
}

function draw() {
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