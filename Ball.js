class Ball {
  constructor(x, y,width,height) {
    var options = {
      restitution:0.5, 
      density: 1, 
      friction: 0.005};

    this.body = Bodies.rectangle(x, y, width, height, options);
    //this.body = Bodies.circle(x,y,radius,options)
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}
