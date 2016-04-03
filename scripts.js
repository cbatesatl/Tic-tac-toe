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
    if (count % 2 === 0) {
      turn = 'X';
    } else {
      turn = 'O';
    }
    console.log(moves, count, turn);
    //long conditonal statements, try to condense later
    if (moves[0] === "X" && moves[1] === "X" && moves[2] === "X" || moves[3] === "X" && moves[4] === "X" && moves[5] === "X" || moves[6] === "X" && moves[7] === "X" && moves[8] === "X" || moves[0] === "X" && moves[3] === "X" && moves[6] === "X" || moves[1] === "X" && moves[4] === "X" && moves[7] === "X" || moves[2] === "X" && moves[5] === "X" && moves[8] === "X" || moves[0] === "X" && moves[4] === "X" && moves[8] === "X" || moves[2] === "X" && moves[4] === "X" && moves[6] === "X") {
      alert("X WINS!!!!!!"), location.reload();
    } else if (moves[0] === "O" && moves[1] === "O" && moves[2] === "O" || moves[3] === "O" && moves[4] === "O" && moves[5] === "O" || moves[6] === "O" && moves[7] === "O" && moves[8] === "O" || moves[0] === "O" && moves[3] === "O" && moves[6] === "O" || moves[1] === "O" && moves[4] === "O" && moves[7] === "O" || moves[2] === "O" && moves[5] === "O" && moves[8] === "O" || moves[0] === "O" && moves[4] === "O" && moves[8] === "O" || moves[2] === "O" && moves[4] === "O" && moves[6] === "O") {
      alert("O WINS!!!!!!"), location.reload();
      }
      else if (count === 9){
       alert("TIE!!!"),location.reload();
      }

  })
   $(".reset").click(function() {
    location.reload();
  })
})
