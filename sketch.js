const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];

var engine, world;
var divisionHeight=300;
var score =0;
var turn = 0;
var gameState = "play";
function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }   
    Engine.run(engine);
}
 
function draw() {
  background("black");
  
  fill("yellow");
  line(0, 400, 800, 400);
  
  textSize(20);
  fill(255);
  text("Score : "+ score, 20, 30);
  
  textSize(20);  
  text("500", 25, 525);

  textSize(20);
  text("500", 105, 525);

  textSize(20);  
  text("500", 185, 525);

  textSize(20);  
  text("500", 265, 525);

  textSize(20);  
  text("100", 345, 525);
  
  textSize(20);  
  text("100", 425, 525);

  textSize(20);  
  text("100", 505, 525);

  textSize(20);  
  text("200", 585, 525);

  textSize(20);  
  text("200", 665, 525);

  textSize(20);  
  text("200", 745, 525);

  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  
  //if(frameCount%90===0){
     //particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     //score++;
   //}
   if(particles !== null){
     particles.display();

   if(particles.body.position.y > 760){
     if(particles.body.position.x < 300){
     score = score+500;
     particles = null;
     if(score >= 5){
       gameState = "end";
     }
    }
     }
    }
  //for (var j = 0; j < particles.length; j++) {
     //particles[j].display();
   //}

}
function mousePressed(){
  if(gameState !== "end"){
    score++;
    particles = new Particle(mouseX, 10, 10);
  }
}