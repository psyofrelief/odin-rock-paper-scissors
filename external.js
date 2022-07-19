const result = document.querySelector(".result");
const win = document.querySelector(".win");
let scoreBoard = document.querySelector(".scoreBoard");
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
        playerScore++;
        result.innerHTML = `<span>${playerSelection} beats ${computerSelection} → <span id='span'>You <span class="won">WON</span> this round! Congrats on the point.</span id='span'>`;
        win.textContent = `You: ${playerScore}  |  Computer: ${computerScore}`;

        // if  draw
    } else if (
        computerSelection.toLowerCase() ==
        playerSelection.toLowerCase()
    ) {
        result.innerHTML = `You both selected ${computerSelection} → <span id='span'>It's a <span class="draw">DRAW!</span> No points accrued.</span id='span'>`;
        win.textContent = `You: ${playerScore}  |  Computer: ${computerScore}`;

        // if computer wins
    } else {
        computerScore++;
        result.innerHTML = `${computerSelection} beats ${playerSelection} → <span id='span'>You <span class="lost">LOST</span> this round! Computer gains 1 point.</span id='span'>`;
        win.textContent = `You: ${playerScore}  |  Computer: ${computerScore}`;
    }

    // once player or computer reach 5 points
    if (computerScore === 5) {
        win.style.cssText = "border-color: var(--clr-score);";
        win.textContent = `COMPUTER Wins!`;
        scoreBoard.textContent = `Computer: ${computerScore}  |  You: ${playerScore}`;
        playerScore = 0;
        computerScore = 0;
        scoreBoard.style.display = "block";
    } else if (playerScore === 5) {
        win.style.cssText = "; border-color: var(--clr-win);";
        win.textContent = `YOU Win!`;
        scoreBoard.textContent = `You: ${playerScore}  |  Computer: ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
        scoreBoard.style.display = "block";
    } else {
        scoreBoard.textContent = "";
        scoreBoard.style.display = "none";
        win.style.cssText = "; border-color: rgb(175, 175, 255);";
    }
}

// ============================================================================
// calls playRound() with correct selection on click

let button = document.querySelectorAll(".button");

button.forEach((button) => {
    button.addEventListener("mousedown", (e) => {
        playRound((playerSelection = button.getAttribute("id")));
        win.style.display = "block";
        button.classList.toggle("buttonClick");
    });

    button.addEventListener("transitionend", () =>
        button.classList.remove("buttonClick")
    );
});

// JS CSS STYLING =====
