$(document).ready(function() {
  var game = new Game;
  renderBoard(".gameboard", game.gameString)
  Mousetrap.bind("up",function() {
    game.move("up");
    renderBoard(".gameboard", game.gameString);
  })
  Mousetrap.bind("down",function() {
    game.move("down");
    renderBoard(".gameboard", game.gameString);
  })
  Mousetrap.bind("left",function() {
    game.move("left");
    renderBoard(".gameboard", game.gameString);
  })
  Mousetrap.bind("right",function() {
    game.move("right");
    renderBoard(".gameboard", game.gameString);
  })

});


