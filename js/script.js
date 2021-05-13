let player = 1;
let result = "";
let tile = "";
let turns = 0;
let status = "";
let tile1 = "";
let tile2 = "";
let tile3 = "";
let tile4 = "";
let tile5 = "";
let tile6 = "";
let tile7 = "";
let tile8 = "";
let tile9 = "";

$(".reset").hide();

$("#button1").click(function() {
  tile = "#tile1";
  playerTurn(player);
  tile1 = result;
  updateScreen(tile);
  checkRow();
  console.log(player);
});

$("#button2").click(function() {
  tile = "#tile2";
  playerTurn(player);
  tile2 = result;
  updateScreen(tile);
  checkRow();
  console.log(player);
});

$("#button3").click(function() {
  tile = "#tile3";
  playerTurn(player);
  tile3 = result;
  updateScreen(tile);
  checkRow();
  console.log(player);
});

$("#button4").click(function() {
  tile = "#tile4";
  playerTurn(player);
  tile4 = result;
  updateScreen(tile);
  checkRow();
  console.log(player);
});

$("#button5").click(function() {
  tile = "#tile5";
  playerTurn(player);
  tile5 = result;
  updateScreen(tile);
  checkRow();
  console.log(player);
});

$("#button6").click(function() {
  tile = "#tile6";
  playerTurn(player);
  tile6 = result;
  updateScreen(tile);
  checkRow();
  console.log(player);
});

$("#button7").click(function() {
  tile = "#tile7";
  playerTurn(player);
  tile7 = result;
  updateScreen(tile);
  checkRow();
  console.log(player);
});

$("#button8").click(function() {
  tile = "#tile8";
  playerTurn(player);
  tile8 = result;
  updateScreen(tile);
  checkRow();
  console.log(player);
});

$("#button9").click(function() {
  tile = "#tile9";
  playerTurn(player);
  tile9 = result;
  updateScreen(tile);
  checkRow();
  console.log(player);
});

//resets game
$(".reset").click(function() {
  //testing
  $("#button1").show();
  console.log("getting");
});

//changes a player's turn
function playerTurn(input) {
  if (input === 1) {
    player++;
    result = "X";
    console.log(result);
  } else {
    player--;
    result = "O";
  }
}

//Updates the how many turn has it been and whos turn is it rn also change the tile when button clicked
function updateScreen(tile) {
  $(tile).html(result);
  turns++;
  $(".turns").text("Turns: " + turns + ", Is player " + player + "'s turn.");
  if (turns === 9) {
    status = "end";
  }
  console.log(player);
}

//check if there is 3 in a row
function checkRow() {
  if (tile1 === "X" && tile2 === "X" && tile3 === "X") {
    result = "Player 1 WON!";
    $(".titles").text(result);
    $(".reset").show();
  } else if (tile1 === "O" && tile2 === "O" && tile3 === "O") {
    result = "Player 2 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile4 === "X" && tile5 === "X" && tile6 === "X") {
    result = "Player 1 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile4 === "O" && tile5 === "O" && tile6 === "O") {
    result = "Player 2 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile7 === "X" && tile8 === "X" && tile9 === "X") {
    result = "Player 1 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile7 === "O" && tile8 === "O" && tile9 === "O") {
    result = "Player 2 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile1 === "X" && tile5 === "X" && tile9 === "X") {
    result = "Player 1 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile1 === "O" && tile5 === "O" && tile9 === "O") {
    result = "Player 2 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile3 === "X" && tile5 === "X" && tile7 === "X") {
    result = "Player 1 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile3 === "O" && tile5 === "O" && tile7 === "O") {
    result = "Player 2 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile1 === "X" && tile4 === "X" && tile7 === "X") {
    result = "Player 1 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile1 === "O" && tile4 === "O" && tile7 === "O") {
    result = "Player 2 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile2 === "X" && tile5 === "X" && tile8 === "X") {
    result = "Player 1 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile2 === "O" && tile5 === "O" && tile8 === "O") {
    result = "Player 2 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile3 === "X" && tile6 === "X" && tile9 === "X") {
    result = "Player 1 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (tile3 === "O" && tile6 === "O" && tile9 === "O") {
    result = "Player 2 WON!";
    $(".container").text(result);
    $(".reset").show();
  } else if (status === "end") {
    result = "TIE";
    $(".container").text(result);
    $(".reset").show();
  }
}
