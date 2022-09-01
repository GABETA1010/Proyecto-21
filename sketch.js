
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.


	Engine.run(engine);
    
	ground = new Ground(400,675,800,50,groundOptions);
    World.add(world,ground);

	ball = new Ball(50,30,30,ballOptions);
    
}


function draw() {
  background(0);

  ground.display();
  ball.display();

  drawSprites();
 
}



