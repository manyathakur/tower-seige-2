class stone{
    constructor(){
        var prop={
            restitution:0.3,
            friction:0.4
        }
        this.rock = Bodies.circle(150,200,10,prop);
        World.add(world,this.rock);
    }
    show(){
        var pos = this.rock.position;
        var angle = this.rock.angle;
        push();
        rotate(angle);
        ellipseMode(CENTER);
        fill("green");
        ellipse(pos.x,pos.y,30);
        pop();
    }
}