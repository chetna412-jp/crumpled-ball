
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world,bg;
var paper1,box1,box2,box3;


function preload()
{
   boximg = loadImage("dustbingreen.png");
   bg=loadImage("bg-2.jpg");
}

function setup() {
	var canvas = createCanvas(1400, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	
    
	box1 = new Box(1100,495,150,15);
	box2 = new Box(1185,420,15,170);
	box3 = new Box(1015,420,15,170);
	
	ground1 = new Ground(700,550,1400,30);
    paper1 = new Paper (200,460,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
 

  paper1.display();
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximg,1000,330,200,200);

	fill("black");
	textSize(25);
	textFont("itallic");
	text("PRESS UP ARROW KEY",600,100);
	
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:275,y:-275})
	}

	
		
}