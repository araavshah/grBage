class Paper{
    constructor(x, y, r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.r = r;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, r, options)
        World.add(world, this.body);


    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
       
        push();
        
        translate(pos.x,pos.y);
        rotate(angle);
        
        imageMode(CENTER);
        image(this.image,0,0,10*this.r,10*this.r);

        pop();
    }
}