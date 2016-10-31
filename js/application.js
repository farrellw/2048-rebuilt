$(document).ready(function() {
  var game = new Game("2240422020000004");
  console.log("left")
  // console.log(game.toString())
  game.move("left");
  // console.log(game.toString())
  // game.move("left");
  // console.log(game.toString())
  game.renderBoard(".gameboard")
  Mousetrap.bind("up",function() {
    game.move("up")
    game.renderBoard(".gameboard")
  })
  Mousetrap.bind("down",function() {
    game.move("down")
    game.renderBoard(".gameboard")
  })
  Mousetrap.bind("left",function() {
    game.move("left")
    game.renderBoard(".gameboard")
  })
  Mousetrap.bind("right",function() {
    game.move("right")
    game.renderBoard(".gameboard")
  })

});


