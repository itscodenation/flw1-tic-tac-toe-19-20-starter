let playerTurn = "X";
let totalTurn = 0;
let gameEnded = false;




$("#button1").click(function() {
    //performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    //performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    //performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    //performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    //performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    //performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    //performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    //performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    //performLogic("#button9","#tile9");
});

function performLogic(buttonID,tileID){
  // $("#button1")
  //buttonID = "#button1"
  //console.log(buttonID, tileID)
  if(gameEnded == false){
    $(buttonID).hide();
    $(tileID).text(playerTurn);
    verticalCheck();
    horizontalCheck();
    diagonalCheck();
    endCheck();
    switchPlayer();
  }
}
function switchPlayer(){
  if(playerTurn == "X"){
    playerTurn = "O"
  }
  else{
    playerTurn = "X"
  }
}

// this function checks if given 3 tiles have the same value and equal to playerTurn
function sameValueCheck(tileId1, tileId2, tileId3) {
  console.log('Called same value check')
  console.log(tileId1, $(tileId1).text());
  if ($(tileId1).text() == $(tileId2).text() && $(tileId2).text() == $(tileId3).text() && $(tileId1).text() == playerTurn) {
    console.log("Player won!")
    gameEnded=true;
    $("h1").text("Player " + playerTurn + " won!");
    //return "Player " + playerTurn + " won!"
  }
}

function verticalCheck() {
  sameValueCheck("#tile1", "#tile4", "#tile7");
  sameValueCheck("#tile2", "#tile5", "#tile8");
  sameValueCheck("#tile3", "#tile6", "#tile9");
}
function horizontalCheck(){
  sameValueCheck("#tile1", "#tile2", "#tile3");
  sameValueCheck("#tile4", "#tile5", "#tile6");
  sameValueCheck("#tile7", "#tile8", "#tile9");
}
function diagonalCheck(){
  sameValueCheck("#tile1", "#tile5", "#tile9");
  sameValueCheck("#tile3", "#tile5", "#tile7");
}

function endCheck(){
  totalTurn++;
  // totalTurn = totalTurn + 1 ;
  if(totalTurn == 9){
    gameEnded=true;
    $("h1").text("It's a draw!");
  }
}