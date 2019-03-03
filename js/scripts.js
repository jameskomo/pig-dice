var rollDice = function(totalScore, player, activeScore) {
  this.totalScore = totalScore;
  this.player = player;
  this.activeScore = activeScore;
}

// jQuery generate random Numbers with a click
$(".roll").click(function() {
  // Generate Random Numbers between 1-6, Add 1 to ensure we get 6 random numbers since Math.Random generates between 0-5 and Round off to the nearest whole number using Math.floor () function
  var randomNumbersOne = Math.floor((Math.random() * 6) + 1);
  $('.player1-score-area').html(randomNumbersOne);

  var randomNumbersTwo = Math.floor((Math.random() * 6) + 1);
  $('.player2-score-area').html(randomNumbersTwo);
});

if (randomNumbersOne>randomNumbersTwo){
  alert("Player 1 Wins");
}else if (randomNumbersTwo>randomNumbersOne){
alert("Player 2 Wins");
}else {
  alert("It is a draw");
}
