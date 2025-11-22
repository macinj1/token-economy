// Colors
const WHITE = "white";
const GREEN = "#2ecc71";
const RED   = "#e74c3c";

const RGB_WHITE = "rgb(255, 255, 255)";
const RGB_RED   = "rgb(231, 76, 60)";
const RGB_GREEN = "rgb(46, 204, 113)";

const DAYS = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

let activityCount = 0; // dynamic

window.onload = () => {
    buildHeader();
    addActivityRow(); // start with 1 row if you want
    document.getElementById("addActivityBtn").addEventListener("click", addActivityRow);
    document.getElementById("printBtn").addEventListener("click", () => window.print());
    updateScore();
};

function buildHeader() {
    const grid = document.getElementById("grid");

    // Empty cell (top-left)
    grid.appendChild(createHeaderCell(""));

    // Day names
    DAYS.forEach(day => grid.appendChild(createHeaderCell(day)));
}

function createHeaderCell(text) {
    const div = document.createElement("div");
    div.classList.add("header");
    div.innerText = text;
    return div;
}

// -----------------------------------------------------
// ADD ACTIVITY ROW
// -----------------------------------------------------
function addActivityRow() {
    const grid = document.getElementById("grid");
    const rowIndex = activityCount;
    activityCount++;

    // Activity name input
    const input = document.createElement("input");
    input.type = "text";
    input.value = `Actividad ${rowIndex + 1}`;
    input.classList.add("activity-input");
    grid.appendChild(input);

    // 7 tiles for the week
    for (let c = 0; c < DAYS.length; c++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.dataset.row = rowIndex;
        tile.dataset.col = c;
        tile.style.backgroundColor = WHITE;

        tile.addEventListener("click", toggleTile);

        grid.appendChild(tile);
    }
}

// -----------------------------------------------------
// TILE CLICK
// -----------------------------------------------------
function toggleTile(e) {
    const tile = e.target;
    const bg = getComputedStyle(tile).backgroundColor;

    // Cycle: white → red → green → white
    if (bg === RGB_WHITE)       tile.style.backgroundColor = RED;
    else if (bg === RGB_RED)    tile.style.backgroundColor = GREEN;
    else                        tile.style.backgroundColor = WHITE;

    updateScore();
}

// -----------------------------------------------------
// SCORE
// -----------------------------------------------------
function updateScore() {
    let green = 0;

    document.querySelectorAll(".tile").forEach(tile => {
        const bg = tile.style.backgroundColor || getComputedStyle(tile).backgroundColor;
        if (bg === GREEN || bg === RGB_GREEN) {
            green++;
        }
    });

    document.getElementById("puntaje").innerText = green;
}
