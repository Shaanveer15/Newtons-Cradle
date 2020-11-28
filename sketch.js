var bob1,bob2,roof,rope1,rope2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(540,450,20);
roof=new Roof(570,100,230,20);
rope1 = new Rope(bob1.body,roof.body,50,0);
bob2=new Bob(560,450,20);
rope2 = new Rope(bob2.body,roof.body,90,0);
	Engine.run(engine);
  
}


function draw() {


  background(255);
  bob1.display();

  bob2.display();
  roof.display();
  rope1.display();
  rope2.display();
  drawSprites();
 
}



