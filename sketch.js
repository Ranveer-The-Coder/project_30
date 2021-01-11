
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var polygon1,box1,sling1,ground1;


function preload()
{
}

function setup() {
	createCanvas(1550, 650);


    engine = Engine.create();
    	world = engine.world;


 
 
 ground1=new Ground(650,620,1600,30)
 ground2=new Ground(1000,370,320,15)

 polygon1 = new polygon(112,277,30,30)


// pyramind 1
 // bottom layer
 box1=new box(880,333,60,60)
  
 box2=new box(940,333,60,60)

 box3=new box(1000,333,60,60)

 box4=new box(1060,333,60,60)

 box5=new box(1110,333,60,60)

 // second layer

 box6=new box(937,272,60,60)

 box7=new box(1000,272,60,60)

 box8=new box(1060,272,60,60)

 // top layer

 box9=new box(1000,210,60,60)


 //________________________________________________________________________________________________________
 ground3=new Ground(680,570,320,15)
// pyramid 2
 // bottom layer
 box_1=new box(555,533,60,60)
  
 box_2=new box(620,533,60,60)

 box_3=new box(680,533,60,60)

 box_4=new box(740,533,60,60)

 box_5=new box(800,533,60,60)

 // second layer

 box_6=new box(617,472,60,60)

 box_7=new box(680,472,60,60)

 box_8=new box(740,472,60,60)

 // top layer

 box_9=new box(680,410,60,60)


 //______________________________________________________________________________________________________

 ground4 = new Ground(680,270,320,15)

 // pyramind 3
 // bottom layer
 boxc1=new box(570,240,60,60)
  
 boxc2=new box(630,210,60,60)

 boxc3=new box(690,210,60,60)

 boxc4=new box(750,210,60,60)

 boxc5=new box(810,235,60,60)

 // second layer

 boxc6=new box(630,200,60,60)

 boxc7=new box(690,200,60,60)

 boxc8=new box(750,200,60,60)

 // top layer

 boxc9=new box(689,110,60,60)

 
 sling1 = new sling (polygon1.body,{x:117, y:277});

	Engine.run(engine);
  
}


function draw() {
  
  background("lightBlue");
  Engine.update(engine);


  ground1.display()
  ground2.display()
  ground3.display()
  ground4.display()

  
sling1.display();


  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box_1.display();
  box_2.display();
  box_3.display();
  box_4.display();
  box_5.display();
  box_6.display();
  box_7.display();
  box_8.display();
  box_9.display();

  
  boxc1.display();
  boxc2.display();
  boxc3.display();
  boxc4.display();
  boxc5.display();
  boxc6.display();
  boxc7.display();
  boxc8.display();
  boxc9.display();

  polygon1.display();


  console.log(mouseX)
  console.log(mouseY)

  
  


  drawSprites();
 
}

function keyPressed (){
    if (keyCode===32){
    
        sling1 = new sling (polygon1.body,{x:117, y:277});
    
    }
    
    
    
    }

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling1.fly();
}
