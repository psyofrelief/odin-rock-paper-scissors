// defines winStatus variable with default value of false
let winStatus = false;

let playerScore = 0;
let computerScore = 0;
let promptValid = "Select Rock, Paper or Scissors.";
let promptInvalid = "Select:\nROCK, PAPER or SCISSORS";
const choices = ["Rock", "Paper", "Scissors"];
const playerRegex = /^Rock$|^Paper$|^Scissors$/i;

// computerPlay FUNCTION ======================================================

// declares function that allows computer to return random choice
function computerPlay() {
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
    playerSelection = prompt(`${promptValid}`);
    //   assigns random choice from computerPlay() to computerSelection
    computerSelection = computerPlay();
    // assigns boolean result of user input's regex test to `input`
    let input = playerRegex.test(playerSelection);
    // defines a variable that makes the user's input title case
    let playerSelectionUpper =
        // transforms first letter to uppercase
        playerSelection[0].toUpperCase() +
        // transforms second to last letters to lowercase
        playerSelection.slice(1).toLowerCase();

    // defines condition - if true, winStatus = true & add 1 to playerScore
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
        winStatus = true;
        playerScore++;
    }

    // defines condition - return winner and return score if winStatus = true
    if (winStatus) {
        promptValid = promptValid;
        console.log(
            `\nYou: ${playerSelectionUpper}\nComputer: ${computerSelection}.\n\nYou won this round! Congrats on the point`
        );
        return `---- You: ${playerScore}\nComputer: ${computerScore}.`;

        // defines condition - return draw statement and return score if computer & player have same selection
    } else if (
        computerSelection.toLowerCase() ==
        playerSelection.toLowerCase()
    ) {
        console.log(
            `\nYou: ${playerSelectionUpper}\nComputer: ${computerSelection}.\n\nIt's a draw! No points accrued.`
        );
        return `---- You: ${playerScore} | Computer: ${computerScore}`;

        // defines condition - call playRoundError function if input regex is invalid
    } else if (!input) {
        promptValid = promptInvalid;
        console.log(playRound());
        // defines condition - return loss statement and return current score if winStatus != true;
    } else {
        computerScore++;
        console.log(
            `\nComputer: ${computerSelection}\nYou: ${playerSelectionUpper}.\n\nYou lost this round! Computer gains 1 point.`
        );
        return `---- You: ${playerScore} | Computer: ${computerScore}`;
    }
}

// ============================================================================
// playRound function, but with scorekeeping and a final message
function game() {
    // i = number of games, if playRound() is called and i < 5, call playRound() & add 1 to i
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
    // defines condition - if player wins
    if (playerScore > computerScore) {
        console.log(
            `\nYOU WON THE GAME! ${playerScore} - ${computerScore}.`
        );
    } else if (playerScore === computerScore) {
        console.log(
            `\nWELL MATCHED... It's a tie ${playerScore} - ${computerScore}.`
        );
    } else {
        console.log(
            `\nCOMPUTER WINS THE GAME! ${computerScore} - ${playerScore}.`
        );
    }

    // resets score after game() function has finished running
    if (playerScore >= 0 || computerScore >= 0) {
        playerScore = 0;
        computerScore = 0;
        return "What an interesting game of Rock Paper Scissors!";
    }
}
