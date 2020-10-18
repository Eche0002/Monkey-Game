
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running", monkey_running);   
  monkey.scale = 0.1;
  
  ground = createSprite(480,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
}


function draw() { 
  background(255);
  textSize(20);
  text("Survival Time:" + survivalTime,130,50);
  survivalTime = Math.round(frameCount/60);
  if (ground.x < 0) {
    ground.x = ground.width/2;
  }
  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY += 0.8;
  monkey.collide(ground);
  
  drawSprites();
  bananas();  
  obstacles();
}
function bananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(410, Math.round(random(120,200)));
    banana.addAnimation("banana", bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    banana.lifetime = 200;  
    FoodGroup.add(banana);     
  } 
}
function obstacles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(410, 330);
    obstacle.addAnimation("rock", obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -6;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}