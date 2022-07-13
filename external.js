let playerScore = 0;
let computerScore = 0;

// computerPlay FUNCTION ======================================================

// declares function that allows computer to return random choice
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    // sets index to number between 0, 1
    var index = Math.random();
    // multiplies index by length of choices list (3)
    index *= choices.length;
    // removes decimal place from new index
    index = Math.floor(index);
    return choices[index];
}

// playRound FUNCTION =========================================================

// declares function that allows user and computer to play 1 round of RPScissors
function playRound(playerSelection, computerSelection) {
    //   assigns prompt dialogue box to `playerSelection`
    playerSelection = prompt("Select 'Rock', 'Paper', or 'Scissors'");
    //   assigns random choice from computerPlay() to computerSelection
    computerSelection = computerPlay();
    const playerRegex = /^Rock$|^Paper$|^Scissors$/i;
    //   assigns boolean result of user input's regex test to `input`
    let input = playerRegex.test(playerSelection);
    // defines win variable, prior to it having a value
    let win = null;

    // defines what is considered as a win
    if (
        // if input regex is true and if playerSelection > computerSelection
        input &&
        ((playerSelection === "rock" &&
            computerSelection === "Scissors") ||
            (playerSelection === "paper" &&
                computerSelection === "Rock") ||
            (playerSelection === "scissors" &&
                computerSelection === "Paper"))
    ) {
        win = true;
        ++playerScore;
    }

    // defines a variable that makes the user's input title case
    let playerSelectionUpper =
        // transforms first letter to uppercase
        playerSelection[0].toUpperCase() +
        // transforms second to last letters to lowercase
        playerSelection.slice(1).toLowerCase();

    // defines condition - if win = true
    if (win) {
        console.log(
            `${playerSelectionUpper} beats ${computerSelection}. You win!`
        );
        return `The score is ${playerScore} to ${computerScore}.`;
        // defines condition - if both playerSelection and computerSelection in lowercase are ===
    } else if (
        computerSelection.toLowerCase() ==
        playerSelection.toLowerCase()
    ) {
        console.log(
            `${playerSelectionUpper} matches evenly with ${computerSelection}. It's a draw!`
        );
        return;
        `The score is STILL ${playerScore} - ${computerScore}.`;

        // defines condition - if input doesn't pass regex test
    } else if (!input) {
        console.log(playRoundError());
        // defines condition - if win = false
    } else {
        ++computerScore;
        console.log(
            `${computerSelection} beats ${playerSelectionUpper}. You lose!`
        );
        console.log(
            `The score is ${playerScore} to ${computerScore}.`
        );
    }
}

// playRoundError FUNCTION ====================================================

// declares function to be called when invalid user input (invalid regex)
function playRoundError(playerSelection, computerSelection) {
    playerSelection = prompt("Pick ROCK, PAPER, or SCISSORS.");
    computerSelection = computerPlay();
    const playerRegex = /^Rock$|^Paper$|^Scissors$/i;
    let input = playerRegex.test(playerSelection);
    let win = false;

    // defines what is considered as a win
    if (
        // if input regex is true and if playerSelection > computerSelection
        input &&
        ((playerSelection === "rock" &&
            computerSelection === "Scissors") ||
            (playerSelection === "paper" &&
                computerSelection === "Rock") ||
            (playerSelection === "scissors" &&
                computerSelection === "Paper"))
    ) {
        win = true;
    }

    // defines a variable that makes the user's input title case
    let playerSelectionUpper =
        playerSelection[0].toUpperCase() +
        playerSelection.slice(1).toLowerCase();

    // defines condition - if win = true
    if (win) {
        return `${playerSelectionUpper} beats ${computerSelection}. You win!`;
        // defines condition - if both playerSelection and computerSelection in lowercase are ===
    } else if (
        computerSelection.toLowerCase() ==
        playerSelection.toLowerCase()
    ) {
        return `${playerSelectionUpper} matches evenly with ${computerSelection}. It's a draw!`;
        // defines condition - if input doesn't pass regex test then repeat function
    } else if (!input) {
        playRoundError();
        // defines condition - if win = false
    } else {
        return `${computerSelection} beats ${playerSelectionUpper}. You lose!`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    if (playerScore > computerScore) {
        return "Player wins!";
    } else if (playerScore === computerScore) {
        console.log("Well matched... It's a tie");
    } else {
        console.log("Computer wins!");
    }
}
