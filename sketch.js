var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redbottom, redside1, redside2;
var redbody, redbody1, redbody2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6


	engine = Engine.create();
	world = engine.world;

	//red box
	redbottom = createSprite(width/2 ,height - 45,200,20);
	redbottom.shapeColor = color(255,0,0);
	redside1 = createSprite(width/2 - 110, height - 90, 20, 100);
	redside1.shapeColor = color(255,0,0);
	redside2 = createSprite(width/2 +110, height - 90, 20, 100);
	redside2.shapeColor = color(255,0,0);

	redbody = Bodies.rectangle(width/2,height-45,200,20,{isStatic:true});
	World.add(world, redbody);

	redbody1 = Bodies.rectangle(width/2 - 110,height-90,20,100,{isStatic:true});
	World.add(world, redbody1);

	redbody2 = Bodies.rectangle(width/2 + 110,height-90,20,100,{isStatic:true});
	World.add(world, redbody2);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;

  redbottom.x= redbody.position.x; 
  redbottom.y= redbody.position.y;

  redside1.x= redbody1.position.x; 
  redside1.y= redbody1.position.y;

  redside2.x= redbody2.position.x; 
  redside2.y= redbody2.position.y;

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    
  }
}



