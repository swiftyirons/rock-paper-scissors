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

function declareWinner(gamesWon, gamesLost) {
  if (gamesWon > gamesLost) {
    return `You are the Winner! You won ${gamesWon} and lost ${gamesLost} games.`;
  } else if (gamesWon < gamesLost) {
    return `You are the Loser! You won ${gamesWon} and lost ${gamesLost} games.`;
  } else {
    return `You tied. You won ${gamesWon} and lost ${gamesLost} games.`
  }
}

function game() {
  let gamesWon = 0;
  let gamesLost = 0;
  for (let i = 1; i <= 5; i++) {
    let playerSelection = prompt("Please enter rock, paper, or scissors: ");
    let result = playRound(playerSelection, getComputerChoice());
    console.log(result);
    if (result.charAt(4) === "w") {
      gamesWon +=1;
    } else if (result.charAt(4) === "l") {
      gamesLost += 1;
    }
  }
  console.log(declareWinner(gamesWon, gamesLost));
} 
game();
