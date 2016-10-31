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
}

Game.prototype.move = function(direction) {
  switch (direction)
  {
    case "up":
      console.log("Going up");
      for ( var i = 15; i > 3; i--) {
        if (this.gameString[i] != "0") {
          // Check it's neighbor::
          var neighbor = this.gameString[i-4]
          if (neighbor != "0") {
            if (this.gameString[i] = neighbor) {
              this.gameString = this.gameString.replaceAt(i-4, String(this.gameString[i] * 2) );
              this.gameString = this.gameString.replaceAt(i, "0");
            };
          } else {
            this.gameString = this.gameString.replaceAt(i-4, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
          }
        };
      };
      break;
    case "down":
      console.log("Going down");
      for ( var i = 0; i < 12; i++) {
        if (this.gameString[i] != "0") {
          // Check it's neighbor::
          var neighbor = this.gameString[i+4]
          if (neighbor != "0") {
            if (this.gameString[i] = neighbor) {
              this.gameString = this.gameString.replaceAt(i+4, String(this.gameString[i] * 2) );
              this.gameString = this.gameString.replaceAt(i, "0");
            };
          } else {
            this.gameString = this.gameString.replaceAt(i+4, this.gameString[i]);
            this.gameString = this.gameString.replaceAt(i, "0");
          } ;
        };
      };
      break;
    case "left":
      for (var i = 15 ; i > 0 ; i--) {
        if (i % 4 != 0 ) {
          if (this.gameString[i] != "0") {
             var neighbor = this.gameString[i-1]
             if (neighbor != "0") {
               if (this.gameString[i] = neighbor) {
                 this.gameString = this.gameString.replaceAt(i-1, String(this.gameString[i] * 2) );
                 this.gameString = this.gameString.replaceAt(i, "0");
               };
             } else {
               this.gameString = this.gameString.replaceAt(i-1, this.gameString[i]);
               this.gameString = this.gameString.replaceAt(i, "0");
             } ;
          } ;
        } ;
      } ;
      break;
    case "right":
      for (var i = 0 ; i < 15 ; i++) {
        if (i % 4 != 3 ) {
          if (this.gameString[i] != "0") {
             var neighbor = this.gameString[i+1]
             if (neighbor != "0") {
               if (this.gameString[i] = neighbor) {
                 this.gameString = this.gameString.replaceAt(i+1, String(this.gameString[i] * 2) );
                 this.gameString = this.gameString.replaceAt(i, "0");
               };
             } else {
               this.gameString = this.gameString.replaceAt(i+1, this.gameString[i]);
               this.gameString = this.gameString.replaceAt(i, "0");
             } ;
          } ;
        } ;
      } ;
      break;
    };
};


String.prototype.replaceAt = function(index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length,this.length - index - character.length)
};
