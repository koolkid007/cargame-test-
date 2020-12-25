class Game{
  constructor() {

  }
 
  getStarted() {
    var gameStateRefer = database.ref("gameState"); 
    gameStateRefer.on("value", function(data) {
      gameState = data.val();
    });
  }

  async start() {
    if(gameState === 0) {
      console.log(gameState);
      player = new Player();

      var playerRefer = await database.ref('playerCount').once("value");
      if(playerRefer.exists()) {
        playerCount = playerRefer.val();
        player.getCount();
      }

      form = new Form();  
      form.display();
      console.log("I am in start");
    }  
      car1 = createSprite(150,200);
      car2 = createSprite(200,200);
      car3 = createSprite(300,200);
      car4 = createSprite(400,200);

      car1.addImage(carImg1);
      car2.addImage(carImg2);
      car3.addImage(carImg3);
      car4.addImage(carImg4);

      cars.push(car1);
      cars.push(car2);
      cars.push(car3);
      cars.push(car4);

      console.log(cars);
}

  update(count) {
    database.ref("/").update({gameState: count});
    console.log("HELLO");
  }  

  play(){
    form.hide();
    textSize(30);
    text("Game Start", displayWidth/2-130, displayHeight/5)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      image(bgImg, 0, -displayHeight*4, displayWidth, displayHeight);
      console.log(allPlayers)
      var index = 0;
      var x = 0;
      var y = 0;

      //var display_position = displayHeight/4;
      for(var plr in allPlayers){
        index++;
        x = x+200;
        y = displayHeight-allPlayers[plr].distance;
        cars[index-1].x = x; 
        cars[index-1].y = y;

        
        console.log(index + "," + player.index);

        if(index != player.index) {
          textAlign(CENTER);
          textSize(15);
          text(allPlayers[plr].name, x-20, y+80);
        }
        
       if(index === player.index){ 
          fill("red");
          ellipse(x,y,70,70);

          console.log("hi");
          cars[index-1].shapeColor= "red"; 
          camera.position.x=displayWidth/2; camera.position.y=cars[index-1].y 
          console.log("GAME START");

          text(allPlayers[plr].name, x-20, y+80);
        }


        /*if (plr === "player" + player.index)
          fill("red")
        else
          fill("black");

        display_position+=20;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, displayWidth/2 - 80,display_position)*/
      
      }
    }

    if(keyDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.updateName();
    }
    
    drawSprites();
  }

}