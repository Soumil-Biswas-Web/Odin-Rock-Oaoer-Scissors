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

function createDiv(){
    const body = document.querySelector('body');
    score = document.createElement('div');
    score.setAttribute('id', 'score');
    const scoreDiv = document.createElement ('div');

    const h11 = document.createElement ('h1');
    h11.textContent = "Player Score";
    scoreDiv.appendChild(h11);
    const h12 = document.createElement ('h1');
    h12.textContent = "CPU Score";
    scoreDiv.appendChild(h12);

    const pointDiv = document.createElement('div');    
    h13 = document.createElement ('h1');
    pointDiv.appendChild(h13);
    h14 = document.createElement ('h1');
    pointDiv.appendChild(h14);

    score.appendChild(scoreDiv);    
    score.appendChild(pointDiv);
    body.appendChild(score);
}

function updateDiv(playerScore, cpuScore){
    h13.textContent = playerScore;
    h14.textContent = cpuScore;
}

function finishGame(){
    const body = document.querySelector('body');
    const resultText = document.createElement('h2');
    resultText.setAttribute('style', 'text-align: center')
    if (player == 5){
        resultText.textContent = "Congratulations! You Won!"
    }
    else{
        resultText.textContent = "死ね！ 雑魚！"
    }
    body.insertBefore(resultText, score);
}

function updateScore(){
    if (score == undefined){
        createDiv();
        updateDiv(player, cpu);
    }
    else {
        updateDiv(player, cpu);
    }
    if (player == 5 || cpu == 5){
        finishGame();
    }
}

function rpsOnClickRound(playerSelection){
    if (player < 5 && cpu < 5){
        const computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);
        console.log(result);  
        updateScore();     
    }
}

/*const playerSelection = "Rock";
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);*/
var player = 0;
var cpu = 0;
var score, h13, h14;
let result;

const rock = document.querySelector('#rock');
rock.onclick = () => rpsOnClickRound("rock");

const paper = document.querySelector('#paper');
paper.onclick = () => rpsOnClickRound("paper");

const scissors = document.querySelector('#scissors');
scissors.onclick = () => rpsOnClickRound("scissors");