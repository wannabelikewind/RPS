const whoChoseWhat = document.querySelector('.whoChoseWhat')
const whoWon = document.querySelector('.whoWon')
const btn = document.querySelectorAll('.but')
const playerScoreCard = document.querySelector('#playerScore');
const computerScoreCard = document.querySelector('#computerScore');
const resetButton = document.querySelector('.res');
let computerScore = 0, playerScore = 0;

function getComputerChoice(){
    let choices = ['rock','paper','scissor']
    return choices[Math.floor(Math.random() * 3)]
}
function round(playerSelection){
    let computerSelection = getComputerChoice();
    let result = "result"
    whoChoseWhat.textContent= ("Maggie chose to play " + computerSelection + ", you chose "+ playerSelection)
    if(playerSelection == computerSelection){
        result =  "It's a tie"
    }
    else if(playerSelection == 'rock'){
        if(computerSelection == 'paper'){
            result =  "You Lose! Paper beats Rock"
        }
        else {
            result =  "You win ! Rock beats Scissor"
        }
    }
    else if(playerSelection == 'paper'){
        if(computerSelection == 'scissor'){
            result =  "You Lose! Scissor beats Paper"
        }
        else {
            result =  "You win ! Paper beats Rock"
        }
    }
    else if(playerSelection == 'scissor'){
        if(computerSelection == 'rock'){
            result =  "You Lose! Rock beats Scissor"
        }
        else {
            result =  "You win ! Scissor beats Paper"
        }
    }
    whoWon.textContent = result;
    return result;
}
function game(e){

    // let computerSelection =  getComputerChoice();
    let rresult = round(e);
        if(rresult == "You win ! Rock beats Scissor" || rresult =="You win ! Paper beats Rock" || rresult == "You win ! Scissor beats Paper"){
            playerScore++;
        } 
        else if(rresult == "You Lose! Rock beats Scissor"|| rresult== "You Lose! Scissor beats Paper" || rresult == "You Lose! Paper beats Rock"){
            computerScore++
        }
        playerScoreCard.textContent = "You : " + playerScore;
        computerScoreCard.textContent = "Maggie : " + computerScore;

  return rresult;
    }

    btn.forEach((button) => {
        button.addEventListener('click', (e) => {
          if (playerScore < 5 && computerScore < 5) {
            game(e.target.value);
            console.log(e.target.value)
          }
          else if (playerScore >= 5) {
            endgame.textContent = "You defeated Maggie , Maggie would like a rematch, Click paw";
          }
          else if (computerScore >= 5) {
            endgame.textContent = "Maggie defeated you loser , Click paw";
          }
        });
    });
    
    function resetScores() {
      computerScore = 0, playerScore = 0;
      playerScoreCard.textContent = " ";
      computerScoreCard.textContent = " ";
      whoWon.textContent = " ";
      endgame.textContent = " ";
      whoChoseWhat.textContent=""
    }
    
    resetButton.addEventListener('click', () => {
      resetScores();
    });