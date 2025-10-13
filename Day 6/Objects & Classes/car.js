class Car{
    constructor(x,y,size,colour,speed){
        this.x = x;
        this.y = y;
        this.size = size;
        this.colour = colour;
        this.speed = speed;

    }

    show(colour){
        fill(colour,0,0);
        rect(this.x,this.y,this.size,this.size/2);
        fill("black");
        ellipse(this.x+this.size/5, this.y+this.size/2,this.size/4);
        ellipse(this.x+this.size-this.size/5, this.y+this.size/2,this.size/4);
    }

    move(){
        this.x += this.speed;
        if (this.x > width){
            this.x = 0 - this.size;
        }
    }
}