class Box  {
  constructor(x,y,width,height)
  {
    var options = {
      restitution:0.4,
      friction:1,
      isStatic: false,
    }
      this.box = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.box);
  }
  display()
  {
    
    rectMode(CENTER);
    
    rect(this.box.position.x, this.box.position.y, this.width, this.height);
  }  
    
}