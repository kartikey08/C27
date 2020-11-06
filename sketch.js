
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var pendulum1;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	pendulum1= new Bob(280,200,30);
	pendulum2= new Bob(340,200,30);
	pendulum3= new Bob(400,200,30);
	pendulum4= new Bob(460,200,30);
	pendulum5= new Bob(520,200,30);

	roof = new Roof(400,100,600,30);
	
	rope1 = new Rope(pendulum1.body, {x: 280,y: 120});
	rope2 = new Rope(pendulum2.body, {x: 340,y: 120});
	rope3 = new Rope(pendulum3.body, {x: 400,y: 120});
	rope4 = new Rope(pendulum4.body, {x: 460,y: 120});
	rope5 = new Rope(pendulum5.body, {x: 520,y: 120});

	Engine.run(engine);
  
}


function draw() {
 
  Engine.update(engine);
  
  rectMode(CENTER);
 
  background(0);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(pendulum1.body,pendulum1.body.position,{x:-200,y:0});

  
	}
}

