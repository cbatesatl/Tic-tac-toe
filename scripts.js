$(document).ready(function() {
  console.log("working");

  var $gamecells = $(".square");
  $($gamecells).one('click', function() {
    console.log(this.id);

  })


})




