var renderBoard = function(gameBoardTag, arrayGameBoard) {
 $(gameBoardTag).empty();
 $(gameBoardTag).append("<table class='table'></table>")
 $board = $(gameBoardTag).children().first()
 console.log($board)
 for (var i = 0 ; i < 4 ; i++) {
  $board.append("<tr class='board-row'></tr>")
  $row = $board.children().last();
  for (var j = 0 ; j < 4 ; j++){
    $row.append("<td class='board-cell " + colorCell(arrayGameBoard[i*4 + j]) + "'>" + arrayGameBoard[i*4 + j] + "</td>")
  }
 }
};


// if arrayGameBoard[] =

var colorCell = function(cell) {
  switch(cell)
  {
    case "0":
      return "gray"
      break;
    case "2":
      return "beige"
      break;
    case "4":
      return "yellow"
      break;
    case "8":
      return "orange"
      break;
    case "16":
      return "oranger"
      break;
    case "32":
      return "red"
      break;
    case "64":
      return "purple"
      break;
    case "128":
      return "blue"
      break;
    case "256":
      return "green"
      break;
    case "512":
      return "aqua"
      break;
    case "1024":
      return "pink"
      break;
    case "2048":
      return "white"
      break;
  }
}
