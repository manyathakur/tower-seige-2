class sling{
    constructor(bodyA,pointB){
        var GG={
          bodyA:bodyA,
          pointB:pointB,
          length:160,
          stiffness:0.06
      }
      this.rope = bind.create(GG);
      this.pointB = pointB;
  
      World.add(world,this.rope);
    }
    detach(){
      this.rope.bodyA = null;
    }
    attach(glue){
      this.rope.bodyA = glue;
    }
  }