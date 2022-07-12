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

function singleRound(playerSelection, computerSelection) {
  playerSelection = prompt("Select 'Rock', 'Paper', or 'Scissors'");
  computerSelection = computerPlay();
  const playerRegex = /^Rock$|^Paper$|^Scissors$/i;
  let input = playerRegex.test(playerSelection);

  let win = false;

  if (
    (input &&
      playerSelection === "rock" &&
      computerSelection === "Scissors") ||
    (playerSelection === "paper" && computerSelection === "Rock") ||
    (playerSelection === "scissors" && computerSelection === "Paper")
  ) {
    win = true;
  } else {
    win = false;
  }

  if (win) {
    console.log(
      `${playerSelection} beats ${computerSelection}. You win!`
    );
  } else if (
    computerSelection.toLowerCase() === playerSelection.toLowerCase()
  ) {
    console.log("It's a draw!");
  } else {
    console.log(
      `${computerSelection} beats ${playerSelection}. You lose!`
    );
  }

  console.log(playerSelection);
  console.log(computerSelection);
}
