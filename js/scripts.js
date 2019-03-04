function Player(playerN) {
  this.playerName = playerN;
  this.roundScore = 0;
  this.gameScore = 0;
}

Player.prototype.roundScoreReset = function() {
  this.roundScore = 0;
  return this.roundScore;
};

Player.prototype.gameScoreReset = function() {
  this.gameScore = 0;
  return this.gameScore;
}

Player.prototype.getGameScore = function() {
  return this.gameScore;
}

Player.prototype.somethingGame = function(currentScore) {
  this.gameScore += currentScore
}

Player.prototype.getRoundScore = function() {
  return this.roundScore;
}

Player.prototype.editRoundScore = function(roundScoreTotal) {
  return this.roundScore += roundScoreTotal;
}

Player.prototype.getName = function() {
  return this.playerName;
}

var currentScore = 0;
var player1Name;
var player2Name;
var roundScore = 0;
var aRollTotal = 0;
var bRollTotal = 0;
var rollAction;
var i = 2;

var diceRoll = function() {
  var x = Math.floor((Math.random() * 6) + 1);
  return x;
}

var playerTurns = function() {
  if (i % 2 === 0) {
    $("#turnOver").text("");
    $("#roll-display").html("");
    var player1Round = player1.editRoundScore(roundScore);
    player1.somethingGame(player1Round);
    $("#playera-display").text(player1.getGameScore());


  } else if (i % 2 === 1) {
    $("#turnOver").text("");
    $("#roll-display").html("");
    var player2Round = player2.editRoundScore(roundScore);
    player2.somethingGame(player2Round);
    $("#playerb-display").text(player2.getGameScore());
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
      player1.roundScoreReset();
      player2.roundScoreReset();
      rollAction = 0;
      $("#turnOver").text("Your turn is over");
      $("#endTurn").hide();
      playerDisplayer();
      i++;
    }

    if (i % 2 === 0) {
      player1.editRoundScore(rollAction);
      $("#roundTotal").text(player1.getRoundScore());
    } else if (i % 2 === 1) {
      player2.editRoundScore(rollAction);
      $("#roundTotal").text(player2.getRoundScore());
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

    player1.roundScoreReset();
    player2.roundScoreReset();


    if (player1.getGameScore() >= 100 || player2.getGameScore() >= 100) {
      $("#turnOver").text("GAME OVER");
      $("#playera-display").text("0");
      $("#playerb-display").text("0");
      $("#roundTotal").text("0");
      $("#playerDisplayerParent").hide();
      $("#startGame").show();
      $("#endTurn").hide();
      $("#roll").hide();
      i = 2;
      player1.gameScoreReset();
      player2.gameScoreReset();
    }
  });

});
