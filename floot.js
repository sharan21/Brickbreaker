function Mirror()
{
  this.posx= width/2-90;
  this.posy= height-20;
  this.len = 100;
  this.wid = 10;
  this.vel = 0;

  this.show = function()
  {
    rect(this.posx, this.posy, this.len, -this.wid);
  }



  this.move = function()
  {
    this.posx += this.vel;
  }


  this.collide = function(Ball)
  {
    if (Ball.posy >= (this.posy-this.wid)) // if its lower enough
      if (Ball.posx > this.posx && Ball.posx < (this.posx + this.len))
        //Ball.posy= -Ball.posy;
        return 1;
  }
  this.freeze = function()
  {
    if (this.posx <= 0 || (this.posx + this.len) >= width)
      this.vel=0;
  }
}