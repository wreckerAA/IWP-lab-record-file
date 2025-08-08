// Get all the necessary elements from the DOM
const statusDisplay = document.querySelector('.game--status');
const restartButton = document.querySelector('.game--restart');
const cells = document.querySelectorAll('.cell');

// --- Game State Variables ---

// Is the game currently active?
let gameActive = true;
// Who is the current player? 'X' goes first.
let currentPlayer = 'X';
// The game board state. An array of 9 empty strings representing the 3x3 grid.
let gameState = ["", "", "", "", "", "", "", "", ""];

// --- Messages ---

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// --- Game Logic Functions ---

// Function to handle a cell being played
function handleCellPlayed(clickedCell, clickedCellIndex) {
    // 1. Update our internal game state to reflect the played move.
    gameState[clickedCellIndex] = currentPlayer;
    // 2. Update the UI to reflect the played move.
    clickedCell.innerHTML = currentPlayer;
}

// Function to change the current player
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}

// Function to check if the game has a winner or is a draw
function handleResultValidation() {
    let roundWon = false;
    // Define all possible winning combinations
    const winningConditions = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Left-to-right diagonal
        [2, 4, 6]  // Right-to-left diagonal
    ];

    // Loop through each winning condition
    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        // If any cell in the condition is empty, it's not a win yet
        if (a === '' || b === '' || c === '') {
            continue;
        }
        // If all three cells are the same, we have a winner!
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    // If we have a winner
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }

    // Check for a draw (if all cells are filled and there's no winner)
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    // If the game is still on, change the player
    handlePlayerChange();
}

// Function to handle a click on a cell
function handleCellClick(clickedCellEvent) {
    // Get the DOM element that was clicked
    const clickedCell = clickedCellEvent.target;
    // Get the 'data-cell-index' attribute, converting it from a string to a number
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    // Check if the cell has already been played or if the game is paused
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return; // Do nothing
    }

    // If the move is valid, proceed
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

// Function to handle restarting the game
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    // Clear all the cell content on the board
    cells.forEach(cell => cell.innerHTML = "");
}


// --- Event Listeners ---

// Set the initial status message
statusDisplay.innerHTML = currentPlayerTurn();

// Add a click event listener to each cell
cells.forEach(cell => cell.addEventListener('click', handleCellClick));

// Add a click event listener to the restart button
restartButton.addEventListener('click', handleRestartGame);