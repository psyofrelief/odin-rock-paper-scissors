const result = document.querySelector(".result");
const score = document.querySelector(".score");
const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// computerPlay FUNCTION ======================================================

// declares function that allows computer to return random choice
function computerPlay() {
    // sets index to number between 0, 1
    var index = Math.random();
    // multiplies index by length of choices list (3)
    index *= Math.floor(choices.length);
    // removes decimal place from new index
    index = Math.floor(index);
    return choices[index];
}

// playRound FUNCTION =========================================================

// declares function that allows user and computer to play 1 round of RPScissors
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    // checks if player or computer won the round
    if (
        (playerSelection === "Rock" &&
            computerSelection === "Scissors") ||
        (playerSelection === "Paper" &&
            computerSelection === "Rock") ||
        (playerSelection === "Scissors" &&
            computerSelection === "Paper")
    ) {
        winStatus = true;
    } else {
        winStatus = false;
    }

    // if player wins
    if (winStatus) {
        result.innerHTML = `${playerSelection} beats ${computerSelection}. <span>You won this round! Congrats on the point.</span>`;
        score.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
        playerScore++;

        // if  draw
    } else if (
        computerSelection.toLowerCase() ==
        playerSelection.toLowerCase()
    ) {
        result.textContent = `You both selected ${computerSelection}. It's a draw! No points accrued.`;
        score.textContent = `You: ${playerScore} | Computer: ${computerScore}`;

        // if computer wins
    } else {
        computerScore++;
        result.textContent = `${computerSelection} beats ${playerSelection}. You lost this round! Computer gains 1 point.`;
        score.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
    }

    // once player or computer reach 5 points
    if (computerScore === 5) {
        score.textContent = `Computer Wins! Computer: ${computerScore} | You: ${playerScore}`;
        playerScore = 0;
        computerScore = 0;
    } else if (playerScore === 5) {
        score.textContent = `You Win! You: ${playerScore} | Computer: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
    }
}

let button = document.querySelectorAll(".button");
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () =>
        playRound((playerSelection = button[i].getAttribute("id")))
    );
}
