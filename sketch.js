
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var ground;
var boy1,boyimage;
var tree1;
var stone;
var rope1;
var mango1, mango2,mango3,mango4,mango5,mango6,mango7,mango8;


function preload()
{
	boyimage=loadImage("Pluckingmangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	ground=new Ground(400,690,800,20);

  boy1= createSprite(200,590,150,200);
  boy1.addImage(boyimage);
  boy1.scale=0.1;

	tree1=new Tree(500,540,200,300);

	stone= new Stone(165,165,20,20);

	rope1=new Rope(stone.body,{x:140,y:500});

	mango1=new Mango(500,400,20,20);
	mango2=new Mango(500,425,30,30);
	mango3=new Mango(500,450,30,30);
	mango4=new Mango(500,475,30,30);
	mango5=new Mango(500,450,30,30);
	mango6=new Mango(500,500,30,30);
	mango7=new Mango(500,525,30,30);
	mango8=new Mango(500,525,30,30);
	
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0,0,255);
  ground.display();
  stone.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  if (stone.y+tree1.y>stone.y-tree1.y) {
	  Matter.Body.setStatic(mango1,false);
  }

  
  
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.fly();
}




