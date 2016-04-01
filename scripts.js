$(document).ready(function() {
  console.log("working");

  var count = 0;
  var $gamecells = $(".square");
  var moves = ["", "", "", "", "", "", "", "", ""];
  var turn = "X"

  $($gamecells).one('click', function() {
   moves[this.id] = turn;
    count++;
    $(this).html(turn);
    if(count % 2 === 0){
      turn ='X';
    }
    else {
      turn ='O';
    }
    console.log(moves,count);

  })


})
