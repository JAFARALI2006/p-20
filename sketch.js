var fixedRect,movingRect;
var fixedRect2;




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  movingRect=createSprite(400, 200, 80, 30);
  fixedRect2=createSprite(200, 100, 50, 80);
  fixedRect.debug=true;
  movingRect.debug=true;
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect2.shapeColor="green";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  } else{
     movingRect.shapeColor="green";
     fixedRect.shapeColor="green";
  }
  //console.log(fixedRect.x -movingRect.x);
  //console.log(fixedRect.width/2+movingRect.width/2);
  //console.log(fixedRect.y -movingRect.y);
  //console.log(fixedRect.height/2+movingRect.height/2);
 


 if(isTouching(fixedRect2,movingRect)){
    fixedRect2.shapeColor="red";
    movingRect.shapeColor="red";
  } else{
     movingRect.shapeColor="green";
     fixedRect2.shapeColor="blue";
  }
  drawSprites();
}