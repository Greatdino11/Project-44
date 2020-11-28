
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player1, player2, upWall, btWall, ghWall;

function preload()
{
	
}

function setup() 
{
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	player1 = new Player1(250, 10);
	player2 = new Player2(150, 10);

	upWall = new Edge(500, -30, 1000, 20); //top wall
	btWall = new Edge(500, 710, 1000, 20);  //bottom wall
}

function draw() {
  	rectMode(CENTER);
  	background(255, 153, 0);
	Engine.update(engine);

	  Matter.Body.applyForce(player1.body,player1.body.position,{x:0,y:0.01});
	  Matter.Body.applyForce(player2.body,player2.body.position,{x:0,y:0.01});

	if(keyWentDown("W")){
		Matter.Body.applyForce(player1.body,player1.body.position,{x:0,y:-0.2});
	}

	if(keyDown("A")){
		player1.x = player1.x-10;
	}

	if(keyDown("D")){
		player1.x = player1.x+10;
	}

	if(player1.x<= -240){
		player1.x=-239;
	}

	if(player1.x>= 740){
		player1.x = 739;
	}

	if(keyWentDown("UP")){
		Matter.Body.applyForce(player2.body,player2.body.position,{x:0,y:-0.2});
	}

	if(keyDown("LEFT")){
		player2.x = player2.x-10;
	}

	if(keyDown("RIGHT")){
		player2.x = player2.x+10;
	}

	if(player2.x<= -140){
		player2.x=-139;
	}

	if(player2.x>= 840){
		player2.x = 839;
	}

	console.log(player1.y);

	player1.display();
	player2.display();
	
	drawSprites();
}



