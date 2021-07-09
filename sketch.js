
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let world;
let engine;

var ball,ball_options;
var ground,ground_options;
var leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
  	ball_options ={
		isStatic:false,
		restitution:0,
		friction:2,
		density:1.2
	}
	ball=Matter.Bodies.circle(330,150,20,ball_options);
    World.add(world,ball);

	 ground_options = {
		isStatic:true
	  }

	ground=new Ground(500,390,1000,20,ground_options)
	leftSide=new Ground(550,350,20,60);
	rightSide=new Ground(750,350,20,60);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,37,37);
  ground.show();
  leftSide.show();
rightSide.show();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:17,y:-40});

	}
}

