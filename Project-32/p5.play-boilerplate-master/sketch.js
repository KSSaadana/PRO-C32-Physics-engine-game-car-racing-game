const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var car,carImg;
var road, roadImg;
var diamond,diamondImg;
var score=0;
function preload()
{
	carImg = loadImage("images/car.png");
  roadImg = loadImage("images/road.png");
  diamondImg= loadImage("images/diamond.png")
}

function setup() {
	createCanvas(700, 500);

	engine = Engine.create();
world = engine.world;

car= createSprite(100,250)
car.addImage(carImg);
car.scale=0.2;
road = createSprite(250,250,500,700);
road.addImage(roadImg);
road.scale = 2;



Engine.run(engine);
  
}


function draw() {
  background(255);
  
  rand = Math.round(random(400,600));
  if(frameCount%80===0){
      diamond = createSprite(random(10,700), random(10,500), 10, 10);
    diamond.addImage(diamondImg);
    diamond.scale= 0.07;
    diamond.velocityX = -2;
   
}

     textSize(30);
    fill("red");
        text("Score: "+score , width-400 , 30);


  road.depth = car.depth 
  car.depth+=2;

  road.velocityX = -3 ;

    if (road.x < 20){
      road.x = road.width/2;
    }
  
if(keyDown(UP_ARROW)){
  car.y-=10;
}
if(keyDown(DOWN_ARROW)){
  car.y+=10;
}


  drawSprites();
 
}



