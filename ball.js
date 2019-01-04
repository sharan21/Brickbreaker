function Ball()
{
  this.posx= width/2-100 + random(-50,50);
  this.posy=height/2-100 + random(-50,50)-50
  this.rad = 10;
  this.velx= 5;
  this.vely= 5;
  this.show = function()
  {
    ellipse(this.posx, this.posy, this.rad, this.rad);
  }
  this.move = function()

  {
    this.posx += this.velx;
    this.posy += this.vely;
  }

  this.bounce = function()
  {   
    if (this.posx <= 0 || this.posx >= width)
      this.velx = -this.velx;
    if (this.posy <= 0 )
      this.vely = -this.vely;
     
     
  }
}