console.log("HI")
function playGame() {
  const choices = ['rock', 'paper', 'scissors'];

  const playerChoice = getPlayerChoice();

  if (playerChoice) {

    displayResult("Invalid choice. Please choose Rock, Paper, or Scissors.");
    return;
  }
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  const result = determineWinner(playerChoice, computerChoice);

   displayResult(result);
}

function getPlayerChoice() {
  const playerChoice = prompt("Enter your choice: Rock, Paper, or Scissors").toLowerCase();
  return playerChoice;
}

function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function displayResult(result) {
  const resultDiv = document.createElement("div");
  resultDiv.classList.add("result");
  resultDiv.textContent = result;
  document.body.appendChild(resultDiv);
}

playGame();
