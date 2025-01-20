// A randomizer decides the computer's move.
function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let n = Math.floor(Math.random() * 3);
    return choices[n];
}

// This function decides the function of each round using IF statements
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

// Deprecieated function to play the game from the console using prompts
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

// Update the Round
function updateRound(){
    roundCount++;
    round.textContent = roundCount;
}

// Create the div that displays the  Scores of the player and CPU
function createDiv(){
    const body = document.querySelector('body');
    score = document.createElement('div');
    score.setAttribute('id', 'score');

    const scoreDiv = document.createElement ('div');

    const h11 = document.createElement ('h1');
    h11.setAttribute('style', 'text-align: center');
    h11.textContent = "Player Score";
    scoreDiv.appendChild(h11);
    const h12 = document.createElement ('h1');
    h12.setAttribute('style', 'text-align: center');
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

// Update the scores of the players each time it is called
function updateDiv(playerScore, cpuScore){
    h13.textContent = playerScore;
    h14.textContent = cpuScore;
    // increment the round count
    updateRound();
}

// Finish the game and disable point increment
function finishGame(){
    const body = document.querySelector('body');
    const finalResult = document.createElement('h2');
    finalResult.setAttribute('style', 'text-align: center')
    if (player == 5){
        finalResult.textContent = "Congratulations! You Won!"
    }
    else{
        finalResult.textContent = "死ね！ 雑魚！"
    }
    body.insertBefore(finalResult, score);
}

// The the board. Print the begining instructions
function setGame(){
    const body = document.querySelector('body');

    // Create Field to display current round
    const roundText = document.createElement('h1');
    roundText.setAttribute('style', 'text-align:center')
    roundText.textContent = 'Round: ';
    round = document.createElement('span');
    round.textContent = roundCount;
    roundText.appendChild(round);
    body.insertBefore(roundText, score);

    // Text that appears when the CPU makes a selection
    cpuText = document.createElement('h2');
    cpuText.setAttribute('style', 'text-align: center; text-wrap: pretty');
    body.insertBefore(cpuText, score);

    // text for begining the round and displaying result for ech round
    resultText = document.createElement('h2');
    resultText.setAttribute('style', 'text-align: center; text-wrap: pretty')
    resultText.textContent = "Begin the Game by Clicking on any of the Buttons. The computer is ready whenever you are! First to reach 5 points wins!"
    body.insertBefore(resultText, score);    
}

// Function to initiate a round when a button is clicked. Finish the game when one party wins.
function rpsOnClickRound(playerSelection){
    if (player < 5 && cpu < 5){
        // get computer choice
        const computerSelection = getComputerChoice();
        cpuChoice = computerSelection;
        cpuText.textContent = ('The opponent chose ' + cpuChoice);
        // get result of the match
        result = playRound(playerSelection, computerSelection);
        // display result of match
        resultText.textContent = result;
        console.log(result);  
        // update scores in the DOM
        updateDiv(player, cpu);
        // If either player reaches target scores, finish the game
        if (player == 5 || cpu == 5){
            finishGame();
        }     
    }
}

/*const playerSelection = "Rock";
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);*/
let player = 0;
let cpu = 0;
let roundCount = 0;
let score, h13, h14, resultText, round, cpuText, cpuChoice;
let result;

const rock = document.querySelector('#rock');
rock.onclick = () => rpsOnClickRound("rock");

const paper = document.querySelector('#paper');
paper.onclick = () => rpsOnClickRound("paper");

const scissors = document.querySelector('#scissors');
scissors.onclick = () => rpsOnClickRound("scissors");

// Create Div to display text

createDiv();

setGame();