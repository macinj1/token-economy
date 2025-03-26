var playerRed = "R";
var playerGreen = "G";
var playerWhite = "W";
// var currPlayer = playerRed;

var greenCount = 10 ;
var gameOver = false;
var board;

var rows = 6;
var columns = 7;
var currColumns = []; //keeps track of which row each column is at.

window.onload = function() {
    setGame();
}

function setGame() {
    document.getElementById("green-count").innerText = greenCount ;
    // currColumns = [5, 5, 5, 5, 5, 5, 5];

    board = [];
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            // JS
            row.push(' ');
            // HTML
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setColor);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
}

function setColor() {

	let tile = this ; 
	//
	if (tile.style.backgroundColor = "white") {
		// tile.style.backgroundColor = "red";
		tile.classList.add("red-piece");
	}
	else if (tile.style.backgroundColor = "red") {
		// tile.style.backgroundColor = "green";
		tile.classList.add("green-piece");
	}
	else if (tile.style.backgroundColor = "green") {
		// tile.style.backgroundColor = "white";
		tile.classList.add("white-piece");
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

    
    let tile = board[r][c] ; 
    currPlayer = tile.style.backgroundColor ; 
    // currPlayer = board[r][c] ; // tile.getBackground() ;
	
    if (currPlayer == playerWhite) {
        tile.classList.add("red-piece");
        // currPlayer = playerRed;
    }
    else if (currPlayer == playerRed) {
        tile.classList.add("green-piece");
        // currPlayer = playerGreen;
    }
    else {
        tile.classList.add("white-piece");
        // currPlayer = playerBlack;
    }
        

    /*
    // board[r][c] = currPlayer; //update JS board
    currPlayer = board[r][c] ;
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
    */

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
