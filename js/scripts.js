// var Players=function (names){
//   this.names=names;
//   this.totalScore=0;
//   this.activeScore=0;
//   this.changingScores=[];
// }
//
// Players.prototype.rollDie= function(){
//   var playerScores=Math.floor((Math.random() * 6) + 1);
//   this.activeScore+=playerScores;
//   this.changingScores.push(playerScores);
//   return this.activeScore;
// }
// Players.prototype.hold=function() {
//   this.totalScore+=this.activeScore;
// }
//
// // Clear if player gets a 1
// Players.prototype.clear=function() {
//   this.activeScore=0;
//   this.changingScores=[];
// }
//
// // Check Winner
// Players.prototype.winner=function() {
//   if (this.totalScore=>100)
//   alert(this.name+ "! has won the game");
// }

  // jQuery generate random Numbers with a click
  $(".roll").click(function() {
    // Generate Random Numbers between 1-6, Add 1 to ensure we get 6 random numbers since Math.Random generates between 0-5 and Round off to the nearest whole number using Math.floor () function
    var randomNumbersOne = Math.floor((Math.random() * 6) + 1);
    $('.player1-score-area').html(randomNumbersOne);
    // PLAYER 1

    // Use random Number to select respective dice image and use concatenation to and number to end of Dice string
    var DiceImage = "die" + randomNumbersOne + ".png"; //die1.png - die6.png
    var ImageLink = "images/" + DiceImage; //images/die1.png - images/die6.png
    var imageOne = document.querySelectorAll("img")[0];
    imageOne.setAttribute("src", ImageLink);
  });
  // Player 2
  $(".roll").click(function() {
    var randomNumbersTwo = Math.floor((Math.random() * 6) + 1);
    $('.player2-score-area').html(randomNumbersTwo);
    var imageLinkTwo = "images/die" + randomNumbersTwo + ".png";
    var imageTwo = document.querySelectorAll("img")[1];
    imageTwo.setAttribute("src", imageLinkTwo);
  });

  $(".hold").click(function() {

  });
