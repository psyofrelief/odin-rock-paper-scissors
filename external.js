// allows computer to return random choice
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

// allows user and computer to play 1 round of RPScissors
function singleRound(playerSelection, computerSelection) {
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
      (playerSelection === "paper" && computerSelection === "Rock") ||
      (playerSelection === "scissors" &&
        computerSelection === "Paper"))
  ) {
    win = true;
  }

  // defines a variable that makes the user's input title case
  let playerSelectionUpper =
    // transforms first letter to uppercase
    playerSelection[0].toUpperCase() +
    // transforms second to last letters to lowercase
    playerSelection.slice(1).toLowerCase();

  // defines condition - if win = true
  if (win) {
    return `${playerSelectionUpper} beats ${computerSelection}. You win!`;
    // defines condition - if both playerSelection and computerSelection in lowercase are ===
  } else if (
    computerSelection.toLowerCase() == playerSelection.toLowerCase()
  ) {
    return `${playerSelectionUpper} matches evenly with ${computerSelection}. It's a draw!`;
    // defines condition - if input doesn't pass regex test
  } else if (!input) {
    console.log(singleRoundError());
    //   defines condition - if win = false
  } else {
    return `${computerSelection} beats ${playerSelectionUpper}. You lose!`;
  }
}

// declares function to be called when invalid user input (invalid regex)
function singleRoundError(playerSelection, computerSelection) {
  playerSelection = prompt("Pick ROCK, PAPER, or SCISSORS.");
  computerSelection = computerPlay();
  const playerRegex = /^Rock$|^Paper$|^Scissors$/i;
  let input = playerRegex.test(playerSelection);
  let win = false;

  if (
    input &&
    ((playerSelection === "rock" &&
      computerSelection === "Scissors") ||
      (playerSelection === "paper" && computerSelection === "Rock") ||
      (playerSelection === "scissors" &&
        computerSelection === "Paper"))
  ) {
    win = true;
  }

  let playerSelectionUpper =
    playerSelection[0].toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  if (win && input) {
    return `${playerSelectionUpper} beats ${computerSelection}. You win!`;
  } else if (
    computerSelection.toLowerCase() == playerSelection.toLowerCase()
  ) {
    return `${playerSelectionUpper} matches evenly with ${computerSelection}. It's a draw!`;
  } else if (!input) {
    singleRoundError();
  } else {
    return `${computerSelection} beats ${playerSelectionUpper}. You lose!`;
  }
}
