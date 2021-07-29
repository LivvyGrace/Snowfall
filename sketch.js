function preload(){
  snowbg = loadImage("snow1.jpg");
snowflake1 = loadImage ("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  snow  = createSprite(400, 200, 100, 100);
snow.addImage(snowbg);
}

snowflake = createSprite(200,300,50,40);
snowflake.addImage(snowflake1);

function draw() {
  background(255,255,255);  
  drawSprites();
}