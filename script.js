//declare choices
const choices = ["rocks", "paper", "scissors"]
// create getComputerChoice function
function getComputerChoice(choices){
    // return random choice from the choices array.
    return choices[Math.floor(Math.random() * choices.length)];
}

// create getHumanChoice function
function getHumanChoice(human, arr){
    let humanChoice = "";
    if (human.toLowerCase() === "rocks"){
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

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It is a tie!");
        return;
    }
    
    if (humanChoice === "rocks" && computerChoice === "paper"){
        console.log(`You lose! Paper beats Rocks`);
        console.log(`${humanScore} - ${++computerScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "rocks"){
        console.log(`You win! Paper beats Rocks`);
        console.log(`${++humanScore} - ${computerScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log(`You lose! Scissors beats paper`);
        console.log(`${humanScore} - ${++computerScore}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You win! Scissors beats paper`);
        console.log(`${++humanScore} - ${computerScore}`);
    }
    else if (humanChoice === "rocks" && computerChoice === "scissors"){
        console.log(`You win! Rocks beats scissors`);
        console.log(`${++humanScore} - ${computerScore}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "rocks"){
        console.log(`You lose! Rocks beats scissors`);
        console.log(`${humanScore} - ${++computerScore}`);
    }
}

function playGame(){
    let i = 0;
    while (i < 5){
    let humanPrompt = prompt("Choose: Rocks, Paper, Scissors");
    const humanSelection = getHumanChoice(humanPrompt,choices);
    const computerSelection = getComputerChoice(choices);
    console.log(`You choose: ${humanSelection}`);
    console.log(`Computer choose: ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(`-------------------\n`);
    i++;
    }
    if (humanScore > computerScore){
        console.log("YOU WIN 🥇");
    }
    else if (humanScore < computerScore){
        console.log("COMPUTER WIN 🥇");
    }
    else {
        console.log("TIE");
    }
    computerScore = 0;
    humanScore = 0;
}
do {
    playGame();
    const oneMore = prompt("Press 1 to play again and press anything else to quit");
    
    if (oneMore !== "1") {  // Compare as a string
        console.log("Thanks for playing!");
        break; // Exit the loop if user does not enter "1"
    }
} while (true); // Infinite loop, will break based on input

