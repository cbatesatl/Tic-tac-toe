
$(document).ready(function() {
  console.log("working");

  var count = 0;
  var $gamecells = $(".square");
  var moves = ["", "", "", "", "", "", "", "", ""];
  var turn = "X";
  var xWins = 0;
  var oWins = 0;
  //var nameX = prompt("Player X enter your name");
  //var nameO = prompt("Player O enter your name");

  $(".reset").click(function() {
    $($gamecells).html("");
    count = 0;
    turn = "X";
    moves = ["", "", "", "", "", "", "", "", ""];
    $("h2").html("X Goes First");
    game();
    console.log(moves, count, turn);
  })

  game();

  function game() {
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
      $($gamecells).on('click', checkWinner());
      // checks win conditions
      function checkWinner() {
        if (moves[0] === "X" && moves[1] === "X" && moves[2] === "X" ||
          moves[3] === "X" && moves[4] === "X" && moves[5] === "X" ||
          moves[6] === "X" && moves[7] === "X" && moves[8] === "X" ||
          moves[0] === "X" && moves[3] === "X" && moves[6] === "X" ||
          moves[1] === "X" && moves[4] === "X" && moves[7] === "X" ||
          moves[2] === "X" && moves[5] === "X" && moves[8] === "X" ||
          moves[0] === "X" && moves[4] === "X" && moves[8] === "X" ||
          moves[2] === "X" && moves[4] === "X" && moves[6] === "X") {
          $("h2").html("X WINS!!!"), $($gamecells).off(), xWins++, $("#xscore").html("X Score " + xWins ) ;
        } else if (moves[0] === "O" && moves[1] === "O" && moves[2] === "O" ||
          moves[3] === "O" && moves[4] === "O" && moves[5] === "O" ||
          moves[6] === "O" && moves[7] === "O" && moves[8] === "O" ||
          moves[0] === "O" && moves[3] === "O" && moves[6] === "O" ||
          moves[1] === "O" && moves[4] === "O" && moves[7] === "O" ||
          moves[2] === "O" && moves[5] === "O" && moves[8] === "O" ||
          moves[0] === "O" && moves[4] === "O" && moves[8] === "O" ||
          moves[2] === "O" && moves[4] === "O" && moves[6] === "O") {
          $("h2").html("O WINS!!!"), $($gamecells).off(), oWins++, $("#oscore").html("O Score " + oWins ) ;
        } else if (count === 9) {
          $("h2").html("TIE!!!"), $($gamecells).off(), console.log("Tie");

        }

        function checkPlayer() {
        if (turn = 'X') {
          $("h2").html("X's Turn")
        } else if (turn = "X") {
          $("h2").html("O's Turn")
        }

      }

      }



    })
  }


})
