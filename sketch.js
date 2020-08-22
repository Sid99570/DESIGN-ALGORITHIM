var fixed,moving ;

function setup() {
  createCanvas(800,400);
  fixed=createSprite(200, 300, 50, 50);
  fixed.shapeColor="green";
  fixed.debug=true ;

  moving=createSprite(200, 100, 50, 50);
  moving.shapeColor="green";
  moving.debug=true ;


  moving.velocityY=10;
  fixed.velocityY=-10
}

function draw() {
  background(0);  

  //moving.x=mouseX
  //moving.y=mouseY
 if(moving.x-fixed.x<moving.width/2+fixed.width/2 &&
  fixed.x-moving.x<fixed.width/2+moving.width/2) {
    moving.velocityX=-1*moving.velocityX;
    fixed.velocityX=-1*fixed.velocityX;
  }
  if(moving.y-fixed.y<moving.height/2+fixed.height/2 &&
    fixed.y-moving.y<fixed.height/2+moving.height/2) {
      moving.velocityY=-1*moving.velocityY;
      fixed.velocitY=-1*fixed.velocityY;
    }
   
 drawSprites() ;

}