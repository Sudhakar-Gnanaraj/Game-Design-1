class Paddle{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 20;
        this.speed = 6;
    }

    show(){
        rect(this.x,this.y,this.width,this.height);
    }

    move(direction){
        if (direction == -1){
            if (this.y >= 0){
                this.y += direction*this.speed;
            }
        }
        else if (direction == 1){
            if (this.y+this.height <= height){
                this.y += direction*this.speed;
            }
        }    
    }

    moveFollowBall(ballY){
        if (this.y == ballY){
            this.speed = 0
        }
        else if (this.y < ballY){
            this.speed = 6
        } 
        else if (this.y > ballY){
            this.speed = -6
        }
        //console.log(this.y,ballY);

        if (this.speed == -6){
            if (this.y >= 0){
                this.y += this.speed;
            }
        }
        else if (this.speed == 6){
            if (this.y+this.height <= height){
                this.y += this.speed;
            }
        }    
    }

    getWidth(){
        return this.width;
    }
}