var bullet, wall;

var speed, weight ;

var thickness;

function setup() {

  createCanvas(1600,400);
  
  speed = random(55,90);

  weight = random(400,1500);

  thickness = random(22,83);

  bullet = createSprite(50, 200, 50, 30);

  wall =createSprite(1500, 200, thickness, height/2);



  bullet.velocityX = speed;

  bullet.shapeColor = "blue";

  wall.shapeColor = "white";

}

function draw() {

  background("black");  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    
    bullet.velovityX=0;

    if(hasCollided(bullet,wall))
    {
      bullet.velocityX=0;
      
      var demage=0.5 * bulletweight * bulletspeed * bulletspeed/(thickness * thickness * thickness);
   
      if( demage>10){
      
       wall.shapeColor =color(255,0,0)
      
     } 
     
     if( demage<10){
     
      wall.shapeColor =color(0,255,0)
     
     }

    }

  
}
  
  
  drawSprites();

}

function hasCollided(lbullet,lwall){

  bulletRightEdge = lbullet.x + lwall.x
  wallLeftEge=lwall.x;
  if(bulletRightEdge>=wallLeftEge)
  {
    return true;
  }
    return false;


  }
