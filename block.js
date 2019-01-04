function Block()
{
  this.posx= random(width);
  
  this.posy= random(height);
  this.rad = 10;
  this.show = function()
  {ellipse(this.posx,this.posy,this.rad,this.rad);
  
  
  }
  this.move = function()
  {
  
  }
  
}
