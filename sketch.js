var spaceImg, space;
var rock1Img , rock1, rock1Group
var rocketImg, rocket;
var starImg, star, starGroup;
var gameState = "play"

var score=0;


function preload(){
spaceImg = loadImage("Background(1).jpg");

rock1Img = loadImage("Rock_1_-removebg-preview (1).png");

rocketImg = loadImage("Rocket(2).png");
starImg = loadImage("star-removebg-preview (1).png");
}

function setup() {
 createCanvas(600, 600);
 space = createSprite(300,300);
 space.addImage("space",spaceImg);
 space.velocityY = 1;

 rocket = createSprite(200,200,10,10 );
 rocket.addImage("rocket", rocketImg);
 rocket.scale = 0.3;


 rock1Group = new Group();
 
 starGroup = new Group();

 score=0;
}

function draw() {
 background(200);


 if(gameState==="play"){

    if(space.y > 400){
        space.y = 300
    }

    if(keyDown("left_arrow"))
    {
        rocket.x = rocket.x - 3;
    }

    if(keyDown("right_arrow"))
    {
        rocket.x = rocket.x + 3;
    }

    if(keyDown("space"))
    {
        rocket.velocityY = -5;
    }

    rocket.velocityY = rocket.velocityY + 0.8;

    if(rock1Group.isTouching(rocket))
    {
       rocket.destroy();
       gameState="end";
    }

    if(starGroup.isTouching(rocket))
    {
       score = score + 1; 
       text("Score: "+ score, 500,50);
    }
    spawnGood();
    spawnBad();
    drawSprites();
 }
 if(gameState==="end")
 {
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over",230,250)
 }
}

function spawnGood()
{
    if(frameCount%240===0)
    {
        star = createSprite(200,-50,);
        star.addImage("star", starImg);
        star.scale = 0.3;
       
       
       
        star.x = Math.round(random(120,400));
      

        star.velocityY = 1;
      

        star.lifetime = 800;
        

        starGroup.add(star);
       

       
       
     
    }
}

function spawnBad()
{
    if(frameCount%240===0)
    {
        rock1 = createSprite(200,30);
        rock1.addImage("rock1", rock1Img);
        rock1.scale = 0.3;

        
        rock1.x = Math.round(random(120,400));
        

        rock1.velocityY = 1;
        

        rock1.lifetime = 800;
        

        rock1Group.add(rock1);
       

    
    }
}