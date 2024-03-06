function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let n = Math.random() * 2;
    return choices[n];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "Rock") {
        if(computerSelection == "Paper") return "You Lose! Paper beats Rock";
        if(computerSelection == "Scissors") return "You Win! Rock beats Scissors";
        if(computerSelection == "Rock") return "Draw!";
    } 
    else if (playerSelection == "Paper") {
        if(computerSelection == "Paper") return "Draw!";
        if(computerSelection == "Scissors") return "You Lose! Scissors beats Paper";
        if(computerSelection == "Rock") return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "Scissors") {
        if(computerSelection == "Paper") return "You Win! Scissors beats Paper";
        if(computerSelection == "Scissors") return "Draw!";
        if(computerSelection == "Rock") return "You Lose! Rock beats Scissors";
    }
}

/*function playGame(){

}*/

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);