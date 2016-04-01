$(document).ready(function() {
  console.log("working");

  var count = 1;
  var $gamecells = $(".square");
  var moves = ["", "", "", "", "", "", "", "", ""];

  $($gamecells).one('click', function() {
    count ++;
    moves[this.id] = this.id;

    if(count % 2 === 0){
      moves[this.id] ='X';
    }
    else {
      moves[this.id] ='O';
    }
    console.log(moves,count);

  })


})
