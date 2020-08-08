function setup() {
  var balll,ball2
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  createSprite(x,y,30,30);
  createSprite(x,y,330,30);
  ball.velocityY=-3;
  ball2.velocityY=-3;
  sprite(white);
  if ball.Y>200(){
    ball.Y=1;
  }
  if ball2.Y>200(){
    ball2.Y=1;
  }
}
  
function  draw() {
  background(255,255,255);  
  drawSprites();
}