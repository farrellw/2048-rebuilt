var Game = function(gameString = '') {
  this.gameString = gameString.split("");
  if ( gameString.length === 0) {
    var randOne = Math.floor(Math.random() * 16);
    var randTwo = Math.floor(Math.random() * 16);
    for ( var i = 0; i < 16; i++) {
      if (i === randOne || i === randTwo) {
       this.gameString.push("2");
      }
      else {
       this.gameString.push("0");
      };
    };
  };
};

// Game.prototype.toString = function() {
//   var output = "";
//   for ( var i = 0 ; i < 4 ; i++ ) {
//     output += this.gameString. 4*i , 4 );
//     output += '\n' ;
//   };
//   return output ;
// };

Game.prototype.renderBoard = function(gameBoardTag) {
 $(gameBoardTag).empty();
 $(gameBoardTag).append("<table class='table'></table>")
 $board = $(gameBoardTag).children().first()
 console.log($board)
 for (var i = 0 ; i < 4 ; i++) {
  $board.append("<tr class='board-row'></tr>")
  $row = $board.children().last();
  for (var j = 0 ; j < 4 ; j++){
    $row.append("<td class='board-cell'>" + this.gameString[i*4 + j] + "</td>")
  }
 }
};

Game.prototype.move = function(direction) {
  var tempGame = this.gameString.slice(0);
  switch (direction)
  {
    case "up":
      console.log("Going up");
      this.gameString = upMove(this.gameString)
      break;
    case "down":
      console.log("Going down");
      this.gameString = downMove(this.gameString)
      break;
    case "left":
      this.gameString = leftMove(this.gameString)
      break;
    case "right":
      this.gameString = rightMove(this.gameString)
      break;
  };
  if (tempGame.toString() != this.gameString.toString()) {
    this.gameString = addNumber(this.gameString);
  }
  var tempGame = this.gameString.slice(0);
  console.log(tempGame);
  tempGame = upMove(tempGame);
  if (tempGame.toString() != this.gameString.toString()) { return }
  console.log("Just moved up");
  console.log(tempGame);
  tempGame = downMove(tempGame);
  if (tempGame.toString() != this.gameString.toString()) { return }
  console.log("Just moved down");
  console.log(tempGame);
  tempGame = leftMove(tempGame);
  if (tempGame.toString() != this.gameString.toString()) { return }
  console.log(tempGame);
  tempGame = rightMove(tempGame);
  if (tempGame.toString() != this.gameString.toString()) { return }
    alert("Game Over");
};


Array.prototype.replaceAt = function(index, character) {
  this[index] = character;
  return this;
};

var upMove = function(gameString) {
  for ( var i = 4; i < 16; i++) {
    var neighbor = gameString[i-4];
    var current = gameString[i];
    if (neighbor === "0" && current != "0") {
      gameString = gameString.replaceAt(i-4, gameString[i]);
        gameString = gameString.replaceAt(i, "0");
        i -= 5;
    };
  };
  for ( var i = 4; i < 16; i++) {
    var neighbor = gameString[i-4];
    var current = gameString[i];
    if (current != "0" && current === neighbor) {
      gameString = gameString.replaceAt(i-4, String(current * 2) );
      gameString = gameString.replaceAt(i, "0");
    };
  };
  for ( var i = 4; i < 16; i++) {
    var neighbor = gameString[i-4];
    var current = gameString[i];
    if (neighbor === "0" && current != "0") {
      gameString = gameString.replaceAt(i-4, gameString[i]);
      gameString = gameString.replaceAt(i, "0");
      i -= 5;
    };
  };
  return gameString;
}

var downMove = function(gameString) {
  for ( var i = 11; i > -1; i--) {
    var neighbor = gameString[i+4];
    var current = gameString[i];
    if (neighbor === "0" && current != "0") {
      gameString = gameString.replaceAt(i+4, gameString[i]);
      gameString = gameString.replaceAt(i, "0");
      i += 5;
    };
  };
  for ( var i = 11; i > -1; i--) {
    var neighbor = gameString[i+4];
    var current = gameString[i];
    if (current != "0" && current === neighbor) {
      gameString = gameString.replaceAt(i+4, String(current * 2) );
      gameString = gameString.replaceAt(i, "0");
    };
  };
  for ( var i = 11; i > -1; i--) {
    var neighbor = gameString[i+4];
    var current = gameString[i];
    if (neighbor === "0" && current != "0") {
      gameString = gameString.replaceAt(i+4, gameString[i]);
      gameString = gameString.replaceAt(i, "0");
      i += 5;
    };
  };
  return gameString;
};

var leftMove = function(gameString) {
  for ( var i = 1; i < 16; i++) {
    if (i % 4 != 0 ) {
      var neighbor = gameString[i-1];
      var current = gameString[i];
      if (neighbor === "0" && current != "0") {
        gameString = gameString.replaceAt(i-1, gameString[i]);
        gameString = gameString.replaceAt(i, "0");
        i -= 2;
      };
    };
  };
  for ( var i = 1; i < 16; i++) {
    if (i % 4 != 0 ) {
      var neighbor = gameString[i-1];
      var current = gameString[i];
      if (current != "0" && current === neighbor) {
        gameString = gameString.replaceAt(i-1, String(current * 2) );
        gameString = gameString.replaceAt(i, "0");
      };
    };
  };
  for ( var i = 1; i < 16; i++) {
    if (i % 4 != 0 ) {
      var neighbor = gameString[i-1];
      var current = gameString[i];
      if (neighbor === "0" && current != "0") {
        gameString = gameString.replaceAt(i-1, gameString[i]);
        gameString = gameString.replaceAt(i, "0");
        i -= 2;
      };
    };
  };
  return gameString;
};

var rightMove = function(gameString) {
  for ( var i = 15; i > -1; i--) {
    if (i % 4 != 3 ) {
      var neighbor = gameString[i+1];
      var current = gameString[i];
      if (neighbor === "0" && current != "0") {
        gameString = gameString.replaceAt(i+1, gameString[i]);
        gameString = gameString.replaceAt(i, "0");
        i += 2;
      };
    };
  };
  for ( var i = 15; i > -1; i--) {
    if (i % 4 != 3 ) {
      var neighbor = gameString[i+1];
      var current = gameString[i];
      if (current != "0" && current === neighbor) {
        gameString = gameString.replaceAt(i+1, String(current * 2) );
        gameString = gameString.replaceAt(i, "0");
      };
    };
  };
  for ( var i = 15; i > -1; i--) {
    if (i % 4 != 3 ) {
      var neighbor = gameString[i+1];
      var current = gameString[i];
      if (neighbor === "0" && current != "0") {
        gameString = gameString.replaceAt(i+1, gameString[i]);
        gameString = gameString.replaceAt(i, "0");
        i += 2;
      };
    };
  };

  return gameString;
}

var addNumber = function(gameString) {
    if (gameString.includes("0")) {
    var indexWorks = true;
    while (indexWorks) {
      var index = Math.floor(Math.random() * 16);
      if ( gameString[index] === "0" ){
        gameString = gameString.replaceAt(index, "2");
        indexWorks = false;
      };
    };
  }
  return gameString;
}
