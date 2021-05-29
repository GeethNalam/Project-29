const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base;
var hexagon;
var slingshot;


function setup() {
  createCanvas(1600,500);
  engine = Engine.create();
    world = engine.world;
  block8 = new Block(330,225,30,40);
  block9 = new Block(360,225,30,40);
  block10 = new Block(390,225,30,40);
  block11 = new Block(420,225,30,40);
  block12 = new Block(450,225,30,40);
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40); 
  block15 = new Block(420,195,30,40);
  block16 = new Block(390,155,30,40);
  
  base = new Base(390,250,500,10);
  hexagon = new Base(200,400,20,20);

  polygon = Bodies.circle(50,200,20);
      World.add(world,polygon);
  slingShot = new Slingshot(hexagon.body,{x:100, y:200});
}

function draw() {
  background("blue");  
  Engine.update(engine);
  drawSprites();
 
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  
  base.display();
  hexagon.display();
  slingShot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}