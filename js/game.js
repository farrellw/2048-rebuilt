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
 $(gameBoardTag).empty()
 $(gameBoardTag).append("<table></table>")
 $board = $(gameBoardTag).first()
 for (var i = 0 ; i < 4 ; i++) {
  $board.append("<tr></tr>")
  $row = $board.last();
  for (var j = 0 ; j < 4 ; j++){
    $row.append("<td>"+this.gameString[i*4 + j]+"</td>")
  }
 }
};

Game.prototype.move = function(direction) {
  switch (direction)
  {
    case "up":
      console.log("Going up");
      for ( var i = 4; i < 16; i++) {
        var neighbor = this.gameString[i-4];
        var current = this.gameString[i];
        if (neighbor === "0" && current != "0") {
          this.gameString = this.gameString.replaceAt(i-4, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
            i -= 5;
        };
      };
      for ( var i = 4; i < 16; i++) {
        var neighbor = this.gameString[i-4];
        var current = this.gameString[i];
        if (current != "0" && current === neighbor) {
          this.gameString = this.gameString.replaceAt(i-4, String(current * 2) );
          this.gameString = this.gameString.replaceAt(i, "0");
        };
      };
      for ( var i = 4; i < 16; i++) {
        var neighbor = this.gameString[i-4];
        var current = this.gameString[i];
        if (neighbor === "0" && current != "0") {
          this.gameString = this.gameString.replaceAt(i-4, this.gameString[i]);
          this.gameString = this.gameString.replaceAt(i, "0");
          i -= 5;
        };
      };
      break;
    case "down":
      console.log("Going down");
      for ( var i = 11; i > -1; i--) {
        var neighbor = this.gameString[i+4];
        var current = this.gameString[i];
        if (neighbor === "0" && current != "0") {
          this.gameString = this.gameString.replaceAt(i+4, this.gameString[i]);
          this.gameString = this.gameString.replaceAt(i, "0");
          i += 5;
        };
      };
      for ( var i = 11; i > -1; i--) {
        var neighbor = this.gameString[i+4];
        var current = this.gameString[i];
        if (current != "0" && current === neighbor) {
          this.gameString = this.gameString.replaceAt(i+4, String(current * 2) );
          this.gameString = this.gameString.replaceAt(i, "0");
        };
      };
      for ( var i = 11; i > -1; i--) {
        var neighbor = this.gameString[i+4];
        var current = this.gameString[i];
        if (neighbor === "0" && current != "0") {
          this.gameString = this.gameString.replaceAt(i+4, this.gameString[i]);
          this.gameString = this.gameString.replaceAt(i, "0");
          i += 5;
        };
      };
      break;
    case "left":
      console.log("Going left");
      for ( var i = 1; i < 16; i++) {
        if (i % 4 != 0 ) {
          var neighbor = this.gameString[i-1];
          var current = this.gameString[i];
          if (neighbor === "0" && current != "0") {
            this.gameString = this.gameString.replaceAt(i-1, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
            i -= 2;
          }
        }
      }
      for ( var i = 1; i < 16; i++) {
        if (i % 4 != 0 ) {
          var neighbor = this.gameString[i-1];
          var current = this.gameString[i];
          if (current != "0" && current === neighbor) {
            this.gameString = this.gameString.replaceAt(i-1, String(current * 2) );
            this.gameString = this.gameString.replaceAt(i, "0");
          }
        }
      }
      for ( var i = 1; i < 16; i++) {
        if (i % 4 != 0 ) {
          var neighbor = this.gameString[i-1];
          var current = this.gameString[i];
          if (neighbor === "0" && current != "0") {
            this.gameString = this.gameString.replaceAt(i-1, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
            i -= 2;
          }
        }
      }
      break;
    case "right":
      console.log("Going right");
      for ( var i = 15; i > -1; i--) {
        if (i % 4 != 3 ) {
          var neighbor = this.gameString[i+1];
          var current = this.gameString[i];
          if (neighbor === "0" && current != "0") {
            this.gameString = this.gameString.replaceAt(i+1, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
            i += 2;
          };
        };
      };
      for ( var i = 15; i > -1; i--) {
        if (i % 4 != 3 ) {
          var neighbor = this.gameString[i+1];
          var current = this.gameString[i];
          if (current != "0" && current === neighbor) {
            this.gameString = this.gameString.replaceAt(i+1, String(current * 2) );
            this.gameString = this.gameString.replaceAt(i, "0");
          };
        };
      };
      for ( var i = 15; i > -1; i--) {
        if (i % 4 != 3 ) {
          var neighbor = this.gameString[i+1];
          var current = this.gameString[i];
          if (neighbor === "0" && current != "0") {
            this.gameString = this.gameString.replaceAt(i+1, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
            i += 2;
          };
        };
      };
      break;
  };
  if (this.gameString.includes("0")) {
    var indexWorks = true
    while (indexWorks) {
      var index = Math.floor(Math.random() * 16);
      if ( this.gameString[index] === "0" ){
        this.gameString = this.gameString.replaceAt(index, "2");
        indexWorks = false;
      };
    };
  } else {
    alert("Game Over")
  }

  // Replace that index with 2 if the value is 0
  // Get a new index
};


Array.prototype.replaceAt = function(index, character) {
  this[index] = character
  return this
};
