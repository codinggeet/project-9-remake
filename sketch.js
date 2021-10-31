var box;
function setup() {
  var box= createSprite(190,210,10,10);
  box.scale=2.5
  createCanvas(400,400);
}

function draw() 

{ 
  background(30);
  if(keyIsDown(DOWN_ARROW))
  {
    background('red')
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    background('blue')
  }
  if(keyIsDown(LEFT_ARROW))
  {
    background('pink')
  }
  if(keyIsDown(UP_ARROW))
  {
    background('yellow')
  }
  drawSprites();
}




