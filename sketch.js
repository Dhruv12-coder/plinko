const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particle;

var particle = [];

function setup() {
  createCanvas(400,800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,795,400,10);
  
  
}

function draw() {
  background(0,0,0); 
  
  if(frameCount % 60 === 0 ){
    //console.log("if is working")
    particle.push(new Particle (random(width/2-10,width/2+10),10,10));
    //console.log("particle is getting created")
  }
  ground.display();
}