// query selectors to grab game board

const gameBoard = document.querySelector('.gameboard')
const score = document.getElementById('score')
const resultDisplay = document.querySelector('.result')
const width = 4
let tiles = []

//create game board insides

function createBoard() {
    for(let i = 0; i < width * width; i++) {
        let tile = document.createElement('div')
        tile.innerHTML = 0
        gameBoard.appendChild(tile)
        tiles.push(tile)
    }
    addNum()
    addNum()
}

createBoard()
// it WORKED 

// add a random 2 to the board
function addNum() {
    let num = Math.floor(Math.random() * tiles.length)
    if(tiles[num].innerHTML == 0) {
        tiles[num].innerHTML = 2
    } else addNum()
}

// move numbers in a direction
function moveRight() {
    for(let i = 0; i < 16; i++) {
        if(i % 4 === 0) {
            // grabbing all 4 tiles in a single row
            let tileOne = tiles[i].innerHTML
            let tileTwo = tiles[i+1].innerHTML
            let tileThree = tiles[i+2].innerHTML
            let tileFour = tiles[i+3].innerHTML
            // putting those 4 tiles in a single array as numbers
            let row = [parseInt(tileOne), parseInt(tileTwo), parseInt(tileThree), parseInt(tileFour)]

            let filteredRow = row.filter(numb => numb)
            // inserting 0's in the remaining array beside the 2's
            let emptyTile = 4 - filteredRow.length
            let zeroes = Array(emptyTile).fill(0)
            // pushing the 2's to the right of the gameboard
            let newRow = zeroes.concat(filteredRow)

            tiles[i].innerHTML = newRow[0]
            tiles[i+1].innerHTML = newRow[1]
            tiles[i+2].innerHTML = newRow[2]
            tiles[i+3].innerHTML = newRow[3]
        }
    }
}

// same thing but left, everything is the same besides the function name and the order you combine(concat)
function moveLeft() {
    for(let i = 0; i < 16; i++) {
        if(i % 4 === 0) {
            // grabbing all 4 tiles in a single row
            let tileOne = tiles[i].innerHTML
            let tileTwo = tiles[i+1].innerHTML
            let tileThree = tiles[i+2].innerHTML
            let tileFour = tiles[i+3].innerHTML
            // putting those 4 tiles in a single array as numbers
            let row = [parseInt(tileOne), parseInt(tileTwo), parseInt(tileThree), parseInt(tileFour)]

            let filteredRow = row.filter(numb => numb)
            // inserting 0's in the remaining array beside the 2's
            let emptyTile = 4 - filteredRow.length
            let zeroes = Array(emptyTile).fill(0)
            // pushing the 2's to the right of the gameboard
            let newRow = filteredRow.concat(zeroes)

            tiles[i].innerHTML = newRow[0]
            tiles[i+1].innerHTML = newRow[1]
            tiles[i+2].innerHTML = newRow[2]
            tiles[i+3].innerHTML = newRow[3]
        }
    }
}

// moving down now
function moveDown() {
    for(let i = 0; i < 4; i++) {
        // this time you do +width because you're moving down a row everytime
        let tileOne = tiles[i].innerHTML
        let tileTwo = tiles[i+width].innerHTML
        let tileThree = tiles[i+(width*2)].innerHTML
        let tileFour = tiles[i+(width*3)].innerHTML
        let column = [parseInt(tileOne), parseInt(tileTwo), parseInt(tileThree), parseInt(tileFour)]

        let filteredColumn = column.filter(numb => numb)
        let emptyTile = 4 - filteredColumn.length
        let zeroes = Array(missing).fill(0)
        let newColumn = zeroes.concat(filteredColumn)

        tiles[i].innerHTML = newColumn[0]
        tiles[i+width].innerHTML = newColumn[1]
        tiles[i+(width*2)].innerHTML = newColumn[2]
        tiles[i+(width*3)].innerHTML = newColumn[3]
    }
}

// annnd moving up
function moveUp() {
    for(let i = 0; i < 4; i++) {
        // this time you do +width because you're moving down a row everytime
        let tileOne = tiles[i].innerHTML
        let tileTwo = tiles[i+width].innerHTML
        let tileThree = tiles[i+(width*2)].innerHTML
        let tileFour = tiles[i+(width*3)].innerHTML
        let column = [parseInt(tileOne), parseInt(tileTwo), parseInt(tileThree), parseInt(tileFour)]

        let filteredColumn = column.filter(numb => numb)
        let emptyTile = 4 - filteredColumn.length
        let zeroes = Array(missing).fill(0)
        let newColumn = filteredColumn.concat(zeroes)

        tiles[i].innerHTML = newColumn[0]
        tiles[i+width].innerHTML = newColumn[1]
        tiles[i+(width*2)].innerHTML = newColumn[2]
        tiles[i+(width*3)].innerHTML = newColumn[3]
    }
}

// combine tiles in a row if they are the same number
function combineRow() {
    for(let i = 0; i < 15; i++) {
        if(tiles[i].innerHTML === tiles[i+1].innerHTML) {
            let combinedTile = parseInt(tiles[i].innerHTML) + parseInt(tiles[i+1].innerHTML)
            tiles[i].innerHTML = combinedTile
            tiles[i+1].innerHTML = 0
        }
    }
}

// and also combine tiles in a column if they are the same number
function combineColumn() {
    for(let i = 0; i < 12; i++) {
        if(tiles[i].innerHTML === tiles[i+width].innerHTML) {
            let combinedTile = parseInt(tiles[i].innerHTML) + parseInt(tiles[i+width].innerHTML)
            tiles[i].innerHTML = combinedTile
            tiles[i+width].innerHTML = 0
        }
    }
}

// assigning arrow key functionality! keycode.info gives you any keycode for your keyboard
function control(e) {
    if(e.keyCode === 39) {
        keyRight()
    } else if(e.keyCode === 37) {
        keyLeft()
    }
}

// event listener looking for key press and will invoke the control function
document.addEventListener('keyup', control)

// everytime you press the right arrow key the following will happen - tiles will move to the right and combine if they are the same and a new random tile will be assigned the value of 2
function keyRight() {
    moveRight()
    combineRow()
    moveRight()
    addNum()
}

function keyLeft() {
    moveLeft()
    combineRow()
    moveLeft()
    addNum()
}

function keyDown() {
    moveDown()
    combineColumn()
    moveDown()
    addNum()
}

function keyUp() {
    moveUp()
    combineColumn()
    moveUp()
    addNum()
}