// Initialize game variables
let secretNumber;
let attempts = 10;

// Generate a random number between 1 and 100
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// Start a new game
function startGame() {
    secretNumber = generateRandomNumber();
    attempts = 10;
    updateMessage("Guess a number between 1 and 100.");
    updateAttempts();
}

// Check the user's guess
function checkGuess() {
    const userGuess = parseInt(document.getElementById("userGuess").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        updateMessage("Please enter a valid number between 1 and 100.");
        return;
    }

    attempts--;

    if (userGuess === secretNumber) {
        updateMessage(`Congratulations! You guessed the correct number: ${secretNumber}`);
        disableInput();
    } else if (userGuess < secretNumber) {
        updateMessage(`Too low! Attempts left: ${attempts}`);
    } else {
        updateMessage(`Too high! Attempts left: ${attempts}`);
    }

    if (attempts === 0) {
        updateMessage(`Game over! The correct number was ${secretNumber}.`);
        disableInput();
    }

    updateAttempts();
}

// Update the message displayed to the user
function updateMessage(message) {
    document.getElementById("message").innerText = message;
}

// Update the number of attempts remaining
function updateAttempts() {
    document.getElementById("attempts").innerText = attempts;
}

// Disable the input field and submit button
function disableInput() {
    document.getElementById("userGuess").disabled = true;
    document.querySelector("button").disabled = true;
}

// Restart the game
function resetGame() {
    document.getElementById("userGuess").value = "";
    document.getElementById("userGuess").disabled = false;
    document.querySelector("button").disabled = false;
    startGame();
}

// Initialize the game when the page loads
// window.onload = startGame;
document.addEventListener('DOMContentLoaded', startGame);

