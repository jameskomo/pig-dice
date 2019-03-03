var rollDice=function (totalScore, player, activeScore) {
  this.totalScore=totalScore;
  this.player=player;
  this.activeScore=activeScore;
}

// Generate Random Numbers between 1-6, Add 1 to ensure we get 6 random numbers since Math.Random generates between 0-5 and Round off to the nearest whole number using Math.floor () function
var randomNumbersOne=Math.floor((Math.random() * 6) + 1);
console.log(randomNumbersOne);
