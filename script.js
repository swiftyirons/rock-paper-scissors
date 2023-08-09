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

  const won = (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper");
  const lost = (playerSelection === "scissors" && computerSelection === "rock") || (playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors");

  if (won) {
    return `You won this round! ${playerSelection} beats ${computerSelection}`;
  } else if (lost) {
    return `You lost this round! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `You tied this round. You both chose ${playerSelection}`;
  }
}

function displayResults(gamesWon, gamesLost) {
  let pluralWon = "games";
  let pluralLost = "games";
  if (gamesWon === 1) {
    pluralWon = "game";
  }
  if (gamesLost === 1) {
    pluralLost = "game";
  }
  if (gamesWon > gamesLost) {
    return `You have won ${gamesWon} ${pluralWon} and lost ${gamesLost} ${pluralLost}.`;
  } else if (gamesWon < gamesLost) {
    return `You have won ${gamesWon} ${pluralWon} and lost ${gamesLost} ${pluralLost}.`;
  } else {
    return `You have won ${gamesWon} ${pluralWon} and lost ${gamesLost} ${pluralLost}.`;
  }
}

function checkGameOver(gamesWon, gamesLost) {
  if (gamesWon === 5 || gamesLost === 5) {
    return true;
  }
}

function declareWinner(gamesWon, gamesLost) {
  if (gamesWon === 5) {
    const winner = document.createElement("div");
    winner.textContent = "Congratulations! You won!";
    results.appendChild(winner);
  } else if (gamesLost === 5) {
    const loser = document.createElement("div");
    loser.textContent = "You lost! Better luck next time.";
    results.appendChild(loser);
  }
    
}

let gamesWon = 0;
let gamesLost = 0;

function game(playerSelection) {
    const results = document.querySelector("#results");
    let result = playRound(playerSelection, getComputerChoice());
    const resultOfRound = document.createElement("div");
    resultOfRound.textContent = result;
    results.appendChild(resultOfRound);
    if (result.charAt(4) === "w") {
      gamesWon +=1;
    } else if (result.charAt(4) === "l") {
      gamesLost += 1;
    }
    const score = document.createElement("div");
    score.textContent = displayResults(gamesWon, gamesLost);
    results.appendChild(score);
    if (declareWinner(gamesWon, gamesLost)) {
      declareWinner(gamesWon);
    }
} 




document.getElementById("rockBtn").addEventListener("click", function(){ game("rock"); });
document.getElementById("paperBtn").addEventListener("click", function(){ game("paper"); });
document.getElementById("scissorsBtn").addEventListener("click", function(){ game("scissors"); });