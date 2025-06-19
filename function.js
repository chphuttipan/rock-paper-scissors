console.log("Hello, World!")

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice() {
    let answer = prompt("Rock, Paper, or Scisscors?", ""); // Let user types the choice.
    let user = null;
    
    if (answer.toLowerCase() === "rock") {
        user = 0;
    }
    else if (answer.toLowerCase() === "paper") {
        user = 1;
    }
    else if (answer.toLowerCase() === "scisscors") {
        user = 2;
    }
    
    return user;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, compChoice) {
    if (humanChoice - compChoice === 1) {
        if (humanChoice === 1) {
            humanScore++;
            console.log("You win! Paper beats Rock.");
            console.log("Human score: ", humanScore, ", Computer score: ", computerScore);
        }
        else {
            humanScore++;
            console.log("You win! Scisscors beat Paper.");
            console.log("Human score: ", humanScore, ", Computer score: ", computerScore);
        }
        
    }
    else if (compChoice - humanChoice === 1) {
        if (compChoice === 1) {
            computerScore++;
            console.log("You lose! Paper beats Rock.");
            console.log("Human score: ", humanScore, ", Computer score: ", computerScore);
        }
        else {
            computerScore++;
            console.log("You lose! Scisscors beat Paper.");
            console.log("Human score: ", humanScore, ", Computer score: ", computerScore);
        }
    }
    else if (humanChoice - compChoice === 2) {
        computerScore++;
        console.log("You lose! Rock beats Scisscors.");
        console.log("Human score: ", humanScore, ", Computer score: ", computerScore);
    }
    else if (compChoice - humanChoice === 2) {
        humanScore++;
        console.log("You win! Rock beats Scisscors.");
        console.log("Human score: ", humanScore, ", Computer score: ", computerScore);
    }
    else if (compChoice === humanChoice) {
        console.log("It's a draw!!");
        console.log("Human score: ", humanScore, ", Computer score: ", computerScore);
    }
}

let numRound = parseInt(prompt("How many round you want to play: "));
for (let i = 0; i < numRound; i++) {
    let humanSelection = getHumanChoice();
    let compSelection = getComputerChoice();
    playRound(humanSelection, compSelection);
}
