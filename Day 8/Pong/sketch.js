let gBall,player1,player2;
let pingSound;

function preload(){
  pingSound = loadSound("Sound/2.mp3");
}
function setup() {
  createCanvas(800, 400);
  gBall = new Ball(width / 2, height / 2, 5, 5);
  player1 = new Paddle(0,0);
  player2 = new Paddle(width-player1.getWidth(),0);
}

function draw() {
  background(220);
  gBall.show();
  gBall.move();
  player1.show();
  player2.show();

  if (keyIsDown(UP_ARROW) === true) {
    player2.move(-1)
  }
  else if (keyIsDown(DOWN_ARROW) === true) {
    player2.move(1)
  }
  let tempY = gBall.returnY();
  //console.log(tempY)
  player1.moveFollowBall(tempY);
  gBall.checkCollision(player1);
  gBall.checkCollision(player2);
}

