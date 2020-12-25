var database;
var form;
var playerCount = 0;
var gameState = 0;
var game;
var player;
var allPlayers;
var distance=0;
var car1, car2, car3, car4;
var carImg1, carImg2, carImg3, carImg4;
var bgImg, groundImg;
var background;
var cars = [];

function preload() {
  carImg1 = loadImage("car1.png");
  carImg2 = loadImage("car2.png");
  carImg3 = loadImage("car3.png");
  carImg4 = loadImage("car4.png");
  groundImg = loadImage("ground.png")
  bgImg = loadImage("track.jpg");
}


function setup(){
    background("white");
    createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    game = new Game();
    game.getStarted();
    game.start();
  //  var background = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight);
   // background.addImage(bgImg);
}

function draw(){
    background(groundImg);
    console.log(gameState);
    
    if(playerCount === 4) {
      game.update(1);
     // console.log(playerCount);  
    }

    if(gameState === 1) {
      clear();
      game.play();
    }

    
}

