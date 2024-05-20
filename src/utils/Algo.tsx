
export function whoWin(board: Array<Array<number>>){
    for (let colIndex = 0; colIndex < board.length; colIndex++) {
        for (let rowIndex = 0; rowIndex <= board[colIndex].length - 4; rowIndex++) {
            if (board[colIndex][rowIndex] !== 0 &&
                board[colIndex][rowIndex] === board[colIndex][rowIndex + 1] &&
                board[colIndex][rowIndex] === board[colIndex][rowIndex + 2] &&
                board[colIndex][rowIndex] === board[colIndex][rowIndex + 3]) {
                return board[colIndex][rowIndex]; // Return the winning player
            }
        }
    }

    // Check for horizontal lines
    for (let rowIndex = 0; rowIndex < board[0].length; rowIndex++) {
        for (let colIndex = 0; colIndex <= board.length - 4; colIndex++) {
            if (board[colIndex][rowIndex] !== 0 &&
                board[colIndex][rowIndex] === board[colIndex + 1][rowIndex] &&
                board[colIndex][rowIndex] === board[colIndex + 2][rowIndex] &&
                board[colIndex][rowIndex] === board[colIndex + 3][rowIndex]) {
                return board[colIndex][rowIndex]; // Return the winning player
            }
        }
    }

    // Check for diagonal lines (bottom-left to top-right)
    for (let colIndex = 0; colIndex <= board.length - 4; colIndex++) {
        for (let rowIndex = 0; rowIndex <= board[colIndex].length - 4; rowIndex++) {
            if (board[colIndex][rowIndex] !== 0 &&
                board[colIndex][rowIndex] === board[colIndex + 1][rowIndex + 1] &&
                board[colIndex][rowIndex] === board[colIndex + 2][rowIndex + 2] &&
                board[colIndex][rowIndex] === board[colIndex + 3][rowIndex + 3]) {
                return board[colIndex][rowIndex]; // Return the winning player
            }
        }
    }

    // Check for diagonal lines (top-left to bottom-right)
    for (let colIndex = 0; colIndex <= board.length - 4; colIndex++) {
        for (let rowIndex = 3; rowIndex < board[colIndex].length; rowIndex++) {
            if (board[colIndex][rowIndex] !== 0 &&
                board[colIndex][rowIndex] === board[colIndex + 1][rowIndex - 1] &&
                board[colIndex][rowIndex] === board[colIndex + 2][rowIndex - 2] &&
                board[colIndex][rowIndex] === board[colIndex + 3][rowIndex - 3]) {
                return board[colIndex][rowIndex]; // Return the winning player
            }
        }
    }

    // Check for a tie
    if(isBoardFull(board)){
        return -1
    }
    // If no winner and the game is not a tie, return null
    return null;
}

function isBoardFull(board: Array<Array<number>>): boolean{
    for(const row of board){
        for(const cell of row ){
            if(cell == 0){
                return false
            }
        }
    }
    return true
}