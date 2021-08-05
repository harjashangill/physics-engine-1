
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
// creating the ground 2 and rock variables
var rock;
var ground2;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   //adding the properties to the rock and ground 2

   var rock_options ={
    restitution:0.75,
    frictionAir:0.02
   }
   var ground2_options={
     isStatic: true   
    };

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

    // definnig the variables

  rock = Bodies.circle(350,10,40,rock_options);
  World.add(world,rock)
  
  ground2 = Bodies.rectangle(380,200,40,20,ground2_options)
  World.add(world,ground2)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  // shwo the rock and ground 2
 ellipse(rock.position.x,rock.position.y,40)
 rect(ground2.position.x,ground2.position.y,40,20)
}

