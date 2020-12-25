class Form {
  constructor() {
    this.greeting=createElement("h2");
    this.input=createInput("Name");
    this.button=createButton("Play");
    this.reset = createButton("Reset");

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    
  }

  display() {
    var title = createElement("h1");
    title.html("Car Racing Game");
    title.position(displayWidth/2 - 170, displayHeight/12);
    this.reset.position(displayWidth-200, 50);

   
    this.input.position(displayWidth/2 - 135, displayHeight/5);

    //var button = createButton("Play");
    this.button.position(displayWidth/2 - 80, displayHeight/4);
    this.button.mousePressed(()=> {
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount++;
        player.updateCount(playerCount);
        player.updateName();
        
       // var greeting = createElement("h3");
       this. greeting.html("Hello! "+ player.name);
       this. greeting.position(displayWidth/2-120, displayHeight/5);

       player.index = playerCount; 
    } );
    
    this.reset.mousePressed(()=> {
    player.updateCount(0);
    game.update(0);
    database.ref("/").update(()=> {
      players: null
    })

    })

  }
  

}