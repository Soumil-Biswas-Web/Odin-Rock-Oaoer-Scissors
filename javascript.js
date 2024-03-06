function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let n = Math.floor(Math.random() * 3);
    return choices[n];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == "rock") {
        if(computerSelection == "paper") {
            cpu++;
            return "You Lose! Paper beats Rock";
        }
        if(computerSelection == "scissors") {
            player++;
            return "You Win! Rock beats Scissors";
        }
        if(computerSelection == "rock") return "Draw!";
    } 
    else if (playerSelection == "paper") {
        if(computerSelection == "paper") return "Draw!";
        if(computerSelection == "scissors") {
            cpu++;
            return "You Lose! Scissors beats Paper";
        }
        if(computerSelection == "rock") {
            player++;
            return "You Win! Paper beats Rock";
        }
    }
    else if (playerSelection == "scissors") {
        if(computerSelection == "paper") {
            player++
            return "You Win! Scissors beats Paper";
        }
        if(computerSelection == "scissors") return "Draw!";
        if(computerSelection == "rock") {
            cpu++
            return "You Lose! Rock beats Scissors";
        }
    }
}

function playGame(){
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your Choice!");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection.toLowerCase(), computerSelection);
        console.log(result, player, cpu);
    }

    console.log(player, cpu);
    if (player > cpu){
        console.log("You Win! Your score is:", player , "-", cpu);
    }
    else if(cpu > player){
        console.log("You Lose. Your Score is:", cpu , "-", player);
    }
    else {
        console.log("Draw!");
    }
}

/*const playerSelection = "Rock";
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);*/
var player = 0;
var cpu = 0;
playGame();