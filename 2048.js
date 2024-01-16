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
        [0, 2, 4, 0],
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

document.addEventListener("keyup", (a) => {
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

}

function moveRight() {
    
}

function moveUp() {
    
}

function moveDown() {
    
}

//updates the score
function updateScore() {

}