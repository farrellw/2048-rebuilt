var Game = function(gameString = '') {
  this.gameString = gameString;
  if ( gameString.length === 0) {
    var randOne = Math.floor(Math.random() * 16)
    var randTwo = Math.floor(Math.random() * 16)
    for ( var i = 0; i < 16; i++) {
      if (i === randOne || i === randTwo) {
       this.gameString += 2;
      }
      else {
       this.gameString += 0;
      };
    };
  };
};

Game.prototype.toString = function() {
  var output = "";
  for ( var i = 0 ; i < 4 ; i++ ) {
    output += this.gameString.substr ( 4*i , 4 );
    output += '\n' ;
  } ;
  return output ;
} ;

Game.prototype.move = function(direction) {
  switch (direction)
  {
    case "up":
      console.log("Going up");
      for ( var i = 4; i < 16; i++) {
        var neighbor = this.gameString[i-4]
        var current = this.gameString[i]
        if (neighbor === "0" && current != "0") {
          this.gameString = this.gameString.replaceAt(i-4, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
            i -= 5
        }
      }
      for ( var i = 4; i < 16; i++) {
        var neighbor = this.gameString[i-4]
        var current = this.gameString[i]
        if (current != "0" && current === neighbor) {
          this.gameString = this.gameString.replaceAt(i-4, String(current * 2) );
          this.gameString = this.gameString.replaceAt(i, "0");
        }
      }
      for ( var i = 4; i < 16; i++) {
        var neighbor = this.gameString[i-4]
        var current = this.gameString[i]
        if (neighbor === "0" && current != "0") {
          this.gameString = this.gameString.replaceAt(i-4, this.gameString[i]);
          this.gameString = this.gameString.replaceAt(i, "0");
          i -= 5
        }
      }
      break;
    case "down":
      console.log("Going down");
      for ( var i = 11; i > -1; i--) {
        var neighbor = this.gameString[i+4]
        var current = this.gameString[i]
        if (neighbor === "0" && current != "0") {
          this.gameString = this.gameString.replaceAt(i+4, this.gameString[i]);
          this.gameString = this.gameString.replaceAt(i, "0");
          i += 5
        }
      }
      for ( var i = 11; i > -1; i--) {
        var neighbor = this.gameString[i+4]
        var current = this.gameString[i]
        if (current != "0" && current === neighbor) {
          this.gameString = this.gameString.replaceAt(i+4, String(current * 2) );
          this.gameString = this.gameString.replaceAt(i, "0");
        }
      }
      for ( var i = 11; i > -1; i--) {
        var neighbor = this.gameString[i+4]
        var current = this.gameString[i]
        if (neighbor === "0" && current != "0") {
          this.gameString = this.gameString.replaceAt(i+4, this.gameString[i]);
          this.gameString = this.gameString.replaceAt(i, "0");
          i += 5
        }
      }
      break;
    case "left":
      console.log("Going left");
      for ( var i = 1; i < 16; i++) {
        if (i % 4 != 0 ) {
          var neighbor = this.gameString[i-1]
          var current = this.gameString[i]
          if (neighbor === "0" && current != "0") {
            this.gameString = this.gameString.replaceAt(i-1, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
            i -= 2
          }
        }
      }
      for ( var i = 1; i < 16; i++) {
        if (i % 4 != 0 ) {
          var neighbor = this.gameString[i-1]
          var current = this.gameString[i]
          if (current != "0" && current === neighbor) {
            this.gameString = this.gameString.replaceAt(i-1, String(current * 2) );
            this.gameString = this.gameString.replaceAt(i, "0");
          }
        }
      }
      for ( var i = 1; i < 16; i++) {
        if (i % 4 != 0 ) {
          var neighbor = this.gameString[i-1]
          var current = this.gameString[i]
          if (neighbor === "0" && current != "0") {
            this.gameString = this.gameString.replaceAt(i-1, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
            i -= 2
          }
        }
      }
      break;
    case "right":
      console.log("Going right");
      for ( var i = 15; i > -1; i--) {
        if (i % 4 != 3 ) {
          var neighbor = this.gameString[i+1]
          var current = this.gameString[i]
          if (neighbor === "0" && current != "0") {
            this.gameString = this.gameString.replaceAt(i+1, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
            i += 2
          }
        }
      }
      for ( var i = 15; i > -1; i--) {
        if (i % 4 != 3 ) {
          var neighbor = this.gameString[i+1]
          var current = this.gameString[i]
          if (current != "0" && current === neighbor) {
            this.gameString = this.gameString.replaceAt(i+1, String(current * 2) );
            this.gameString = this.gameString.replaceAt(i, "0");
          }
        }
      }
      for ( var i = 15; i > -1; i--) {
        if (i % 4 != 3 ) {
          var neighbor = this.gameString[i+1]
          var current = this.gameString[i]
          if (neighbor === "0" && current != "0") {
            this.gameString = this.gameString.replaceAt(i+1, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
            i += 2
          }
        }
      }
      break;
  };
};


String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length,this.length - index - character.length)
};
