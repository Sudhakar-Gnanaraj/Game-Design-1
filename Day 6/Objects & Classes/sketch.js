let myCar;
let cars = [];
let count;

function setup() {
  createCanvas(1000, 400);
  count = 5;

  for(let i=0; i<count; i++){
    let tempCar = new Car(random(20,width-20), ((height/count)*i)+20, random(40,100), 
                          color(random(0,255), random(0,255), random(0,255)), random(1,5));
    cars.push(tempCar);
  }
}

function draw() {
  background(220);
  for(let i=0; i<count; i++){
    cars[i].show(map(mouseX,0,width,0,255));
    cars[i].move();
  }
}
