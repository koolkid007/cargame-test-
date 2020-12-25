class Player {
  constructor() {
    this.index=0;
    this.distance=0;
    this.name=null

  }
  
  getCount() {
    var countRefer = database.ref('playerCount');
    countRefer.on("value", function (data) {
      playerCount = data.val();  
    });  
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count  
    });  
  }
  
  updateName() {
    var playerRef = "players/player" + this.index;  
    database.ref(playerRef).set({ name: this.name ,
    distance: this.distance});  
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })

  }




}