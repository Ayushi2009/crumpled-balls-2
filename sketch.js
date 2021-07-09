
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin1,dustbin2,dustbin3

function  preload(){
dustImg=loadImage("dustbingreen.png")
papeImg=loadImage("paper.png")
}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

 paper=new  Paper(200,600,20)
ground=new Ground(400,680,800,10)
dustbin1= new dustbin(550,670)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  ground.display()
  dustbin1.display()

  paper.display()
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50})



}




}

