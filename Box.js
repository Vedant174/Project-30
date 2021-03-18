class Box {
    constructor(x,y,width,height) {
      var options = {
          restitution:0.8
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;

       if(this.body.speed < 3){
        rectMode(CENTER);
        fill("cyan");
        rect(pos.x, pos.y, this.width, this.height);
       }else{       
        World.remove(world, this.body);
         push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          pop();
       }
      
      

    }
  };
