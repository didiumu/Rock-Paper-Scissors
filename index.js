 console.log("HI");

const options = ["rock", "paper", "scissors"];

function getComputerChoice(){
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function checkWinner(playSelection, computerSelection){
  if(playSelection == computerSelection){
    return "Tie";
  }
  else if (
    (playSelection == "rock" && computerSelection == "scissors") ||
   (playSelection == "scissors" && computerSelection == "paper") ||
   (playSelection == "paper" && computerSelection == "rock")
  ){
    return "Player";

  }
  else{
    return "computer"
  }
  }
function playRound(playSelection, computerSelection){
  const result = checkWinner(playSelection, computerSelection);
  if(result =="Tie"){
    return "It's a Tie!"
  }
   else if(result == "Player"){
     return 'You Winner! ${playerSelection} beats ${computerSelection}'
 }
  else{
    return 'You Lose! ${computerSelection} beats ${playerSelection}'
  }
}
// const playerSelection = "rock";
// const computerSelection =getComputerChoice();
// console.log(playRound(playerSelection,computerSelection));

function getPlayerChoice(){
  let validatedInput = false;
  while(validatedInput == false){
    const choice = prompt("Rock Paper Scissors");
    if(choice == null){
      continue
    }
    const choiceInLower = choice.toLowerCase();
  if (options.includes(choiceInLower)){
    validatedInput = true;
    return choiceInLower;
  }
  
  
  }
}


function game(){
  let scorePlayer = 0;
  let scoreComputer = 0;
 console.log("Welcom")
  for (let i = 0; i < 5; i++){
 const playerSelection = getPlayerChoice();
 const computerSelection = getComputerChoice();
 console.log(playRound(playerSelection, computerSelection));
 console.log("-----------")
 
 if(checkWinner(playerSelection, computerSelection) == "Player"){
  scorePlayer++;
 }
  else if(checkWinner(playerSelection, computerSelection) == "computer")   
scoreComputer++;
}
}
console.log("Game Over")

//  
game()