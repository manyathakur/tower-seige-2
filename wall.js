class wall{
    constructor(x,y,width){
       var op={
           restitution:0.5,
           frictiion:20
       }
       this.wall = Bodies.rectangle(x,y,width,30,op);
       this.w = width;

       this.load = loadImage("square.png");

       World.add(world,this.wall);
    }
    block(){
        var pos = this.wall.position;
        var angle = this.wall.angle;
        var visibilty = this.visibilty;
        
        if(this.wall.speed<4){
        push();
        rotate(angle);
        imageMode(CENTER);
        fill("red");
        image(this.load,pos.x,pos.y,this.w,30);
        pop();
        }
        else{
            World.remove(world,this.wall);
            push();
            visibilty -= visibilty;
            tint(255,visibilty);
            image(this.load,pos.x,pos.y,this.w,30);
            pop();
        }
    }
}