var wall, thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1500,400);
  
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(255);

  wall = createSprite(900 ,200 ,thickness ,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0); 
  
  if (wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
    if(deformation > 180){
      wall.shapeColor = color(255,0,0);
      textSize(60);
      stroke("white");
      fill("red");
      text("Danger 👿😱", 300, 200);
      textFont("Arial");    }
    if(deformation < 180 && deformation > 100){
      wall.shapeColor = color(230,230,0);

      textSize(60);
      stroke("white");
      fill("yellow");
      text("Little Danger 😠😤", 300, 200);
      textFont("Arial");
    }

    if(deformation < 100){
      wall.shapeColor = color(0,255,0);

      textSize(60);
      stroke("white");
      fill("green");
      text("Okay 😇🤗🤝", 300, 200);
      textFont("Arial");
    }
  }

  
  
  

  drawSprites();
}