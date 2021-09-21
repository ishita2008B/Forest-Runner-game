var gameState;
//var PLAY = 1


var player,playerImg;
var path,pathImg,forestSound,wolfHowl;
var fire, fireImg;
var coin , coinImg,coinSound;
var coinsCollection;
var cactus,cactusImg;
var ground;
var stone,stoneImg;
var sprite;
//var coinGroup = new group();


//gameState = PLAY;
//gameState = END;

function preload(){
  pathImg = loadImage("depositphotos_211414398-stock-video-halloween-shortcut-road-forest-scary.jpg");
  playerImg = loadAnimation("boy running 1.png","boy running 2.png","boy running 3.png","boy running 4.png");
  forestSound = loadSound("dark-forest.mp3");
 wolfHowl = loadSound("mixkit-lone-wolf-howling-1729.wav");
  fireImg = loadImage("fire.png");
  coinImg = loadImage("—Pngtree—coin golden 3d digital_5879622.png")
  coinSound = loadSound("mixkit-space-coin-win-notification-271.wav");
  cactusImg = loadImage("kisspng-cactus-clip-art-portable-network-graphics-image-fr-cactus-png-transparent-images-pictures-photos-pn-5c9d2a4d7ac150.5892471815538038535028.png")
  stoneImg = loadImage("PikPng.com_rocks-png_1002995.png");
  
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  forestSound.loop();
   path = createSprite(200,300,100,50)
   path.addImage(pathImg);
   path.scale = 4.5;
   path.velocityX  = -30;
    
   player = createSprite(250,500,100,50);
   player.addAnimation("player_running",playerImg);
   player.scale = 1;

   ground = createSprite(500,600,1000,10);
   ground.visible = false;

   //sprite = createSprite(20,30,80,50);
   

   textSize(25);

  

  

 // if (player.isTouching(fire)){
    //fire.destroy();
 // }



   
   
   


   
   
   

} function draw(){
  

 
 



 // if (player.isTouching(cactus)){
    //cactus.destroy();
    
  //}
 

  if (path.x < 0){
    path.x = width/2;
  }
  
 
  
  if(frameCount % 200 === 0){
    spawnFire();
      } 
  
      
  
  if (frameCount % 500 === 0 ){
    wolfHowl.play();
  }
  if(frameCount % 30 === 0){
    spawnCoins();
  }
  if (frameCount % 100 === 0){
    spawnCactus();
  }
  
  if(keyIsDown(UP_ARROW)){
    player.velocityY = -78;

    
  }

  player.velocityY = player.velocityY +10;
  player.collide(ground)

  if(frameCount % 60 === 0){
   spawnFire();
    
  }
  if(frameCount % 30 === 0){
    coinSound.play();
  }
  if (frameCount % 200 === 0){
    spawnStones();
  }
  







  
 

  
 
  textSize(25);
  text("Coins",20,30);
 
     drawSprites();

    

   

 

     
     }
   

   function spawnFire(){
     fire  = createSprite(500,500,40,40)
     fire.addImage(fireImg);
     fire.scale = 0.5;
     fire.lifetime = 60;
     fire.velocityX = -30;
    // obstaclesG.add(fire);

  
  //}else 
 
     
      }
  function spawnCoins(){
    coin = createSprite(400,450,40,40);
    coin.addImage(coinImg);
    coin.scale = 0.01;
    coin.lifetime = 4;
    coin.velocityX = -30;
  //  coin.add(coinGroup);
    
 }
 function spawnCactus(){
   cactus = createSprite(500,500,40,40);
   cactus.addImage(cactusImg);
   cactus.lifetime = 60;
   cactus.velocityX = -30;
   cactus.scale = 0.5
  // obstaclesG.add(cactus);
   
 }
 function spawnStones(){
   stone = createSprite(Math.round(random,500,1000,40,40));
   stone.addImage(stoneImg);
   stone.lifetime = 60;
   stone.velocityX = -30;
   stone.scale = 0.5;
   //stone.add(obstaclesG)

  
 }
 
  