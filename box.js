class box {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction:2,
          density:1
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255;      
      World.add(world, this.body);
      
    }
    
    display(){
      fill(165,42,42)
    console.log(this.body.speed)
      
      if(this.body.speed>1.928){
        push();
        this.visibility= this.visibility -5
        tint(255,this.visibility)
        World.remove(world,this.body)
        pop();
      }
      
     else{
        var angle = this.body.angle;
        var pos= this.body.position;
        push()
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
pop();
      }
      
    
      
      
    }
      
      
      
    }