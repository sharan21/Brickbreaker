var mirror;
var ball = [];
var block;
var noofBalls = 1;
function setup() 
{
  createCanvas(500, 500);
  mirror = new Mirror();
  block = new Block();
  for ( i=0; i<noofBalls; i++)
    ball[i] = new Ball();
}

function draw() 
{
  background(1);
  mirror.show();
  mirror.move();
  block.show();
  for ( i=0; i<noofBalls; i++)
  {
    ball[i].show();
    ball[i].move();
    ball[i].bounce();
    mirror.freeze();
    if (mirror.collide(ball[i]) == 1)
      ball[i].vely = -ball[i].vely;
  }
}
function keyPressed()
{ 
  mirror.vel = 0;
  if (keyCode === 65)
    mirror.vel = -6;
  if (keyCode === 68)
    mirror.vel = 6;
}