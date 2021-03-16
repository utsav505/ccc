const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine,world,shoot,ground,plat,rope,box1,box2,box3,box4,box5,box6;
var score=0;
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  plat = new Ground(700,670,300,150);
  ground = new Ground(600,750,1200,10);
  shoot =  new Shooter(300,400,30);
  rope =  new Sling(shoot.body,{x:200,y:410});
  box1 = new Box(700,565,50,50);
  box2 = new Box(685,565,50,50);
  box3 = new Box(675,565,50,50);
  box4 = new Box(730,565,50,50);
  box5 = new Box(760,565,50,50);
  box6 = new Box(720,520,50,50);
  box7 = new Box(700,520,50,50);
  box8 = new Box(675,520,50,50);
  box9 = new Box(730,520,50,50);
  box10 = new Box(750,520,50,50);
  box11 = new Box(680,475,50,50);
  box12 = new Box(690,475,50,50);
  box13 = new Box(700,475,50,50);
  box14 = new Box(730,475,50,50);
  box15 = new Box(720,430,50,50);
  box16 = new Box(705,430,50,50);

  

 

}




function draw() {
  Engine.update(engine);
  background(255,255,255);  
  
  text("score :"+score,700,300);
  console.log(score);
  shoot.display();
  plat.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  rope.display();
  
 
  
  drawSprites();
}

function mouseDragged(){
 
  Matter.Body.setPosition(shoot.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  rope.fly();
 
}

function keyPressed(){
  if(keyCode === 32){
      rope.attach(shoot.body);
  }
}