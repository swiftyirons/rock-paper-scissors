function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  switch(randomNumber) {
    case 1: 
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
  }
}
function playRound(playerSelection, computerSelection) {

  playerSelection = playerSelection.toLowerCase();
  const won = (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper");
  const lost = (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors");

  if (won) {
    return `You won! ${playerSelection} beats ${computerSelection}`;
  } else if (lost) {
    return `You lost! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You tied. You both chose ${playerSelection}`
  }
}

console.log(playRound("Scissors", getComputerChoice()));