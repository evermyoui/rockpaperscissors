//add buttons
const paperBtn = document.querySelector(".paper");
const rockBtn = document.querySelector(".rock");
const scissorsBtn = document.querySelector(".scissors");
const playDiv = document.querySelector('.play');
let gameOver = false;

const choices = ["rocks", "paper", "scissors"];

paperBtn.addEventListener('click', ()=>{
    playRound(getHumanChoice("paper",choices), getComputerChoice());
});

rockBtn.addEventListener('click', ()=>{
    playRound(getHumanChoice("rock",choices), getComputerChoice());
});
scissorsBtn.addEventListener('click', ()=>{
    playRound(getHumanChoice("scissors",choices), getComputerChoice());
    
});
// create getComputerChoice function
function getComputerChoice(){
    // return random choice from the choices array.
    return choices[Math.floor(Math.random() * choices.length)];
}

// create getHumanChoice function
function getHumanChoice(human, arr){
    let humanChoice = "";
    if (human.toLowerCase() === "rock"){
        humanChoice = arr[0];
    }
    else if (human.toLowerCase() === "paper"){
        humanChoice = arr[1];
    }
    else if (human.toLowerCase() === "scissors"){
        humanChoice = arr[2];
    }
    else {
        return "Invalid Choice";
    }
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

const resultDiv = document.createElement('div');
const scoreDiv = document.createElement('div');
const winDiv = document.createElement('div');
const playAgainBtn = document.createElement('button');

// Add them to your playDiv once
playDiv.appendChild(resultDiv);
playDiv.appendChild(scoreDiv);
playDiv.appendChild(winDiv);

function playRound(humanChoice, computerChoice){
    if (gameOver){
        return;
    }

    if (humanChoice === computerChoice){
        resultDiv.textContent = "It is a tie! You both chose " + humanChoice;
        return;
    }

    if (humanChoice === "rocks" && computerChoice === "paper"){
        resultDiv.textContent = "You lose! Paper beats Rocks";
        computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rocks"){
        resultDiv.textContent = "You win! Paper beats Rocks";
        humanScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        resultDiv.textContent = "You lose! Scissors beats Paper";
        computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        resultDiv.textContent = "You win! Scissors beats Paper";
        humanScore++;
    }
    else if (humanChoice === "rocks" && computerChoice === "scissors"){
        resultDiv.textContent = "You win! Rocks beats Scissors";
        humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rocks"){
        resultDiv.textContent = "You lose! Rocks beats Scissors";
        computerScore++;
    }

    // Always update the score after each round
    scoreDiv.textContent = `${humanScore} - ${computerScore}`;

    if (humanScore === 5){
        winDiv.textContent = "YOU WIN 🥇";
        playAgainBtn.textContent = "Play Again";
        playAgainBtn.style.backgroundColor = "green";
        playAgainBtn.style.color = "white";
        playDiv.appendChild(playAgainBtn);
        gameOver = true;
    }
    else if (computerScore===5){
        winDiv.textContent = "COMPUTER WIN 🥇";
        playAgainBtn.textContent = "Play Again";
        playAgainBtn.style.backgroundColor = "red";
        playAgainBtn.style.color = "white";
        playDiv.appendChild(playAgainBtn);
        gameOver = true;
    }
    playAgainBtn.addEventListener("click", ()=>{
    humanScore = 0;
    computerScore = 0;
    scoreDiv.textContent = "0 - 0";
    resultDiv.textContent = "";
    winDiv.textContent = "";
    playAgainBtn.remove();
    gameOver = false;
});
}