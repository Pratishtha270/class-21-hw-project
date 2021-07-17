
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
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
  	ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball=Matter.Bodies.circle(260,100,20,ball_options);
    World.add(world,ball);

	 ground_options = {
		isStatic:true
	  }

	ground=new Ground(width/2,670,width,20,ground_options)
	leftSide=new Ground(1100,600,20,120);
	rightSide=new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  ellipseMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,40,40);
  ground.show();
  leftSide.show();
rightSide.show();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:45,y:-65});
		//Matter.Body.applyForce(ball,{x:0,y:0},{x:17,y:-40});

	}
}

