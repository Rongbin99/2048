//initializing global variables
var board;
var score = 0;
var rows = 4;
var columns = 4;
//starting function
window.onload = function() {
    startGame();
}
//initializes the board
function startGame() {
    board = [
        [2, 2, 4, 0],
        [0, 8, 64, 0],
        [0, 0, 32, 0],
        [16, 0, 0, 0]
    ];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let number = board[r][c];
            updateTile(tile, number);
            //returns board logic to HTML file
            document.getElementById("game").append(tile);
        }
    }
}
//updates text and stlying of the tile
function updateTile(tile, number) {
    tile.innerText = "";
    tile.classList.value = ""; //clears the class assigned
    tile.classList.add("tile");

    if (number > 0) {
        tile.innerText = number;
        
        if (number <= 4096) {
            tile.classList.add("t" + number.toString());
        }
        else {
            tile.classList.add("t8192");
        }
    }
}

/*keyboard inputs for moving tiles around*/

document.addEventListener("keydown", (a) => {
    if ((a.code == "ArrowLeft") || (a.code == "KeyA")) {
        moveLeft();
    }
    else if ((a.code == "ArrowRight") || (a.code == "KeyD")) {
        moveRight();
    }
    else if ((a.code == "ArrowUp") || (a.code == "KeyW")) {
        moveUp();
    }
    else if ((a.code == "ArrowDown") || (a.code == "KeyS")) {
        moveDown();
    }
    updateScore();
})

function moveLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = shift(row);
        board[r] = row;
        //updates value at the tile
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let number = board[r][c];
            updateTile(tile, number);
        }
    }
}

function moveRight() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = shift(row.reverse());
        board[r] = row.reverse();
        //updates value at the tile
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let number = board[r][c];
            updateTile(tile, number);
        }
    }
}

function moveUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = shift(row);
        //updates value at the tile
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r]; //assigning array to be a column
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let number = board[r][c];
            updateTile(tile, number);
        }
    }
}

function moveDown() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = shift(row.reverse());
        row = row.reverse(); //reverse back
        //updates value at the tile
        for (let r = 0; r < rows; r++) {
            board[r][c] = row[r]; //assigning array to be a column
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let number = board[r][c];
            updateTile(tile, number);
        }
    }
}

function shift(row) {
    row = row.filter(number => number != 0); //removes 0 from array
    //shifts values over
    for (let i = 0; i < row.length-1; i++) {
        if (row[i] == row[i+1]) {//if adjacent values are the same
            row[i] *= 2; //one gets doubled
            row[i+1] = 0; //other turns into 0, or empty
            score += row[i]; //increase score
        }
    }
    row = row.filter(number => number != 0); //removes 0 from array again

    //re-add 0's
    while (row.length < columns) {
        row.push(0);
    }
    return row;
}

//updates the score
function updateScore() {
    document.getElementById("score").innerText = score;
}