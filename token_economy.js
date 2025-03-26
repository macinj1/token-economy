var playerRed = "R";
var playerGreen = "G";
var playerBlack = "W";
var currPlayer = playerRed;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;
var currColumns = []; //keeps track of which row each column is at.

window.onload = function() {
    setGame();
}

function setGame() {
    board = [];
    // currColumns = [5, 5, 5, 5, 5, 5, 5];

    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // JS
            row.push(' ');
            // HTML
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) {
        return;
    }

    //get coords of that tile clicked
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    // figure out which row the current column should be on
    // r = currColumns[c]; 

    /*
    if (r < 0) { // board[r][c] != ' '
        return;
    }
    */

    /*
    let tile = this

    if (board[r][c] == ' ') {
        tile.classList.add("red-piece");
        currPlayer = playerRed;
    }
    else if (board[r][c] == "red-piece" ) {
        tile.classList.add("green-piece");
        currPlayer = playerGreen;
    }
    else {
        tile.classList.add("black-piece");
        currPlayer = playerBlack;
    }
    */    

    board[r][c] = currPlayer; //update JS board
    let tile = this; // document.getElementById(r.toString() + "-" + c.toString());
    // tile.classList.add("red-piece");

    if (currPlayer == playerRed) {
        tile.classList.add("red-piece");
        currPlayer = playerGreen;
    }
    else if (currPlayer == playerGreen) {
        tile.classList.add("green-piece");
        currPlayer = playerWhite;
    }
    else {
        tile.classList.add("white-piece");
        currPlayer = playerRed;
    }
    

    // r -= 1; //update the row height for that column
    // currColumns[c] = r; //update the array

    checkScore();
}

function checkScore() {
    var score = 0 ;
    // horizontal
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++){
	    if (board[r][c] == playerGreen) {
		    score = score + 1;
            }
         }
     }
	
     let winner = document.getElementById("winner");
     winner.innerText = score ;
	
}
