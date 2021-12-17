
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 1000);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject=new Paper(150,100,50)

	Engine.run(engine);
  
}


function draw() {

	Engine.update(engine)
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

  text(mouseX+','+mouseY,mouseX,mouseY)

}


function keyPressed(){
if(keyCode === UP_ARROW){
 Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:-2})	
}

}