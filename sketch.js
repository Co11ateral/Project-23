var helicopterIMG, helicopterSprite, packageSprite, packageIMG, box1, box2, box3;
var packageBody, ground, b1body, b2body, b3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	box1 = createSprite(350, 635, 10, 50);
	box1.shapeColor = "red";

	box2 = createSprite(405, 655, 100, 10);
	box2.shapeColor = "red";

	box3 = createSprite(450, 635, 10 ,50);
	box3.shapeColor = "red";

	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.125;

	helicopterSprite = createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);

    engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200, 5, 5,{restitution:0.7, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, 700, 10,{isStatic:true});
	World.add(world, ground);

    b1body = Bodies.rectangle(350, 635, 10, 50,{isStatic:true});
	World.add(world, b1body);

	b2body = Bodies.rectangle(405, 655, 100, 40,{isStatic:true});
	World.add(world, b2body);

	b3body = Bodies.rectangle(450, 635, 10, 50,{isStatic:true});
	World.add(world, b3body);


	Engine.run(engine);
	Engine.update(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  keyPressed();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, false);

  }
}