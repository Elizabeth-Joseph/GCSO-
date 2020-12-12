//declaring the variables
var car,wall;
var speed,weight;
var deformation;
var approvedCars=0;


function setup() {
  //creating the canvas
  createCanvas(1600,400);

  //setting speed and weight to random values 
  speed=random(55,90);
  weight=random(400,1500);

  //creating the car
  car=createSprite(50, 200, 50, 50);


  //creating the wall
  wall=createSprite(1500, 200, 60, height/2);
  wall.shapeColor="brown";

  //making the car sprite move towards the wall
  car.velocityX=speed;

}

function draw() {
  //clearing the background
  background("lightgreen"); 

  approvedCars=0;


  //text settings
  fill("red");
  textFont("Comic Sans MS");
  textSize(30);
  

  //Detecting the collision of the car with the wall
  if(wall.x-car.x <= car.width/2 + wall.width/2 ) {
  
  //stopping the car
    car.velocityX=0;

    //adding the formula
   deformation= 0.5 * weight* speed* speed  / 22500;

   //assigning different colors to the car based on the collision

   if(deformation>180){

    car.shapeColor="red";
   
  }

  if(deformation>100 && deformation < 180){

    car.shapeColor="yellow";
    approvedCars=approvedCars+1;

  }

  if(deformation<100){

     car.shapeColor="green";
     approvedCars=approvedCars+1;

   }
  
  }


  //displaying the sprites
  drawSprites();

  //displaying the no of approved cars
  text("Approved cars :"+approvedCars,100,200);

}

