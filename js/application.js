$(document).ready(function() {
  var game = new Game("2240422020000004");
  console.log("left")
  console.log(game.toString())
  game.move("left");
  console.log(game.toString())
  game.move("left");
  console.log(game.toString())

  // var game = new Game("2240422020000004");
  // console.log("right")
  // console.log(game.toString())
  // game.move("right");
  // console.log(game.toString())

  // var game = new Game("2240422020000004");
  // console.log("up")
  // console.log(game.toString())
  // game.move("up");
  // console.log(game.toString())

  // var game = new Game("2240422020000004");
  // console.log("down")
  // console.log(game.toString())
  // game.move("down");
  // console.log(game.toString())
});
