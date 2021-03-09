class Form {
    constructor() {
      
    }
  
    display(){
      var title=createElement("h2")
      var input=createInput("Enter Name")
      var button=createButton("Play Now")
      button.position(500,500)
      input.position(450,300)
      title.html("Car Racing")
      title.position(50,100)
      
      
  
      button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount =playerCount +1 ;
        player.update(name)
        player.updateCount(playerCount);
        var greeting=createElement("h3")
        greeting.html("Hello"+name)
        greeting.position(100,100)
        
      });
  
    }
  }