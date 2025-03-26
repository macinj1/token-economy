// Define the two colors to toggle between
const color1 = '#2ecc71'; // Green
const color2 = '#e74c3c'; // Red

// Variables
var board;
var rows = 6;
var columns = 7;

// Start code
window.onload = function() {
    setGame();
}

function setGame() {

    // Make tile
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
            tile.addEventListener("click", clickTile);
            document.getElementById("board").append(tile);
        }
        board.push(row);
    }
    
}

function clickTile() {

    let tile = this ; 
    // Get the current background color
    const currentColor = getComputedStyle(tile).backgroundColor;

    // Get coords of that tile clicked
    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    board[r][c] = currentColor; //update JS board

    // Analyze the current color and determine the next color
    if (currentColor === color1 || currentColor === 'rgb(255, 255, 255)') {
      // If the current color is white, change to red
      tile.style.backgroundColor = color2;
    } else if (currentColor === color2 || currentColor === 'rgb(231, 76, 60)') {
      // If the current color is red, change to green
      tile.style.backgroundColor = color1;
    } else {
      tile.style.backgroundColor = 'rgb(255, 255, 255)';
    }

    // Count the score base on the number of green tiles
    let greenCount = countGreenTiles();
    document.getElementById("puntaje").innerText = greenCount;
  
}

// Function to count how many green tiles there are
function countGreenTiles() {
    let greenCount = 0;

    // Loop through the board to count the green tiles
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r + "-" + c);
            const currentColor = getComputedStyle(tile).backgroundColor;

            // Check if the tile is green
            if (currentColor === 'rgb(46, 204, 113)' || currentColor === color1) {
                greenCount++;
            }
        }
    }

    return greenCount;
}
