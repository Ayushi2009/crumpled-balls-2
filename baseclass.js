class baseclass {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true,
        'restitution':0.0,
       ' friction':0.0,
       'density':1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("red");
    rect(pos.x, pos.y, this.width, this.height);
  }
};

