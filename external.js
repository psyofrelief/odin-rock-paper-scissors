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
