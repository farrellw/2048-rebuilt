var Game = function(gameString = '') {
  this.gameString = gameString;
  if ( gameString.length === 0) {
    var randOne = Math.floor(Math.random() + 16)
    var randTwo = Math.floor(Math.random() + 16)
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
