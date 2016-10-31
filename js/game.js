var Game = function(gameString = '0000000000000000') {
    this.gameString = gameString ;
} ;

Game.prototype.toString = function() {
  var output = "";
  for ( var i = 0 ; i < 4 ; i++ ) {
    output += this.gameString.substr ( 4*i , 4 );
    output += '\n' ;
  } ;
  return output ;
}
