class Bob{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':0.4,
            'isStatic':false

        }
       
        this.x=x;
        this.y=y;
        this.radius=radius;
    
        this.body = Bodies.circle(this.x, this.y,this.radius, options);
        World.add(world, this.body);
      }
      display(){
    
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
        fill ("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius)
        pop();
      }
}