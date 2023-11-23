function getComputerChoice() {
    // Generates a random number between 0 and 2
const randomNumber = Math.floor(Math.random() * 3);

// Map the random number to "Rock", "Paper", or "Scissors"
switch (randomNumber) {
    case 0:
        return "Rock";
    case 1:
        return "Paper";
    case 2:
        return "Scissors";
    default:
        return "Error: Invalid random number!";
    }
}

const computerChoice = getComputerChoice();
console.log("Computer chose: " + computerChoice);