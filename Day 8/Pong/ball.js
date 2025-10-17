class Ball{
    constructor(x,y,xSpeed,ySpeed){
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.size = 20;
    }

    show(){
        circle(this.x,this.y,this.size);
    }

    move(){
        if(this.x ==0 || this.x == width){
            this.xSpeed *= -1;
        }
        if(this.y ==0 || this.y == height){
            this.ySpeed *= -1;
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed
    }

    returnY(){
        return this.y;
        //console.log(this.y);
    }

    checkCollision(paddle) {
        if(this.x < paddle.x + paddle.width && this.x >paddle.x && this.y > paddle.y && this.y < (paddle.y+paddle.height)) {
            this.xSpeed = -this.xSpeed;
            //this.ySpeed = -this.ySpeed;
            console.log("Bam");
            pingSound.play();
        }
    }

}