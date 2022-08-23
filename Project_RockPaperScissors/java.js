

function getComputerChoice() {
   const choices = ["rock", "paper", "scissors"];
   return choices[~~(choices.length * Math.random())];
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection ==  "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")) {
         return "You win! " + playerSelection + " defeats " + computerSelection   
    }
    else if (playerSelection == computerSelection) {
        return "It\'s a tie! You both selects " + playerSelection
    }
    else {
        return "You lose! " + computerSelection + " defeats " + playerSelection
    }
}
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));

  function game () {
    for (let i = 0; i < 5; i++) {
        playRound();
     }
  } 



