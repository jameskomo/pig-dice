// BACK-END/BUSINESS LOGIC

function Player(playerName) {
  this.playerName = playerName;
  this.totalScore = 0;
  this.tempScore = 0;
}

Player.prototype.totalScoreReset = function() {
  this.totalScore = 0;
  return this.totalScore;
};

Player.prototype.tempScoreReset = function() {
  this.tempScore = 0;
  return this.tempScore;
}

Player.prototype.getTempScore = function() {
  return this.tempScore;
}

Player.prototype.somethingGame = function(currentScore) {
  this.tempScore += currentScore
}

Player.prototype.getTotalScore = function() {
  return this.totalScore;
}

Player.prototype.editTotalScore = function(totalScoreTotal) {
  return this.totalScore += totalScoreTotal;
}

Player.prototype.getName = function() {
  return this.playerName;
}

var currentScore = 0;
var player1Name;
var player2Name;
var totalScore = 0;
var aRollTotal = 0;
var bRollTotal = 0;
var rollAction;
var i = 2;

var diceRoll = function() {
  var randomNumbers = Math.floor((Math.random() * 6) + 1);
  return randomNumbers;
}

var playerTurns = function() {
  if (i % 2 === 0) {
    $("#turnOver").text("");
    $("#roll-display").html("");
    var player1Round = player1.editTotalScore(totalScore);
    player1.somethingGame(player1Round);
    $("#playera-display").text(player1.getTempScore());


  } else if (i % 2 === 1) {
    $("#turnOver").text("");
    $("#roll-display").html("");
    var player2Round = player2.editTotalScore(totalScore);
    player2.somethingGame(player2Round);
    $("#playerb-display").text(player2.getTempScore());
  }
}
var playerDisplayer = function() {
  if (i % 2 === 0) {

    $("#playerDisplayerParent").show();
    $("#playerDisplayer").text(player2.getName());


  } else if (i % 2 === 1) {

    $("#playerDisplayerParent").show();
    $("#playerDisplayer").text(player1.getName());

  }
}

// FRONT-END INTERFACE
$(document).ready(function() {

  $("form#nameEntry").submit(function(event) {
    event.preventDefault();

    var player1Name = $("#player1Name").val();
    var player2Name = $("#player2Name").val();

    player1 = new Player(player1Name);
    player2 = new Player(player2Name);

    $("form#nameEntry").hide();
    $("form#gameUI").show();

    $("#playeraName").text(player1.getName());
    $("#playerbName").text(player2.getName());
  });

  $("#roll").click(function(event) {
    $("#endTurn").show();
    $("#turnOver").text("");
    rollAction = diceRoll();

    $("#roll-display").text(rollAction);

    if (rollAction === 1) {
      player1.totalScoreReset();
      player2.totalScoreReset();
      rollAction = 0;
      $("#turnOver").text("Your rolled a 1.Your turn is over");
      $("#endTurn").hide();
      playerDisplayer();
      i++;
    }

    if (i % 2 === 0) {
      player1.editTotalScore(rollAction);
      $("#roundTotal").text(player1.getTotalScore());
    } else if (i % 2 === 1) {
      player2.editTotalScore(rollAction);
      $("#roundTotal").text(player2.getTotalScore());
    }

    event.preventDefault();
  });

  $("#startGame").click(function() {
    $("#playerDisplayerParent").show();
    $("#playerDisplayer").text(player1.getName());
    $("#startGame").hide();
    $("#endTurn").show();
    $("#roll").show();
    playerTurns();
  });


  $("#endTurn").click(function() {

    playerTurns();
    playerDisplayer();
    i++;

    player1.totalScoreReset();
    player2.totalScoreReset();


    if (player1.getTempScore() >= 100 || player2.getTempScore() >= 100) {
      $("#turnOver").text("100 Points Reached. Restart");
      $("#playera-display").text("0");
      $("#playerb-display").text("0");
      $("#roundTotal").text("0");
      $("#playerDisplayerParent").hide();
      $("#startGame").show();
      $("#endTurn").hide();
      $("#roll").hide();
      i = 2;
      player1.tempScoreReset();
      player2.tempScoreReset();
    }
  });

});
