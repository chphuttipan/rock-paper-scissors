console.log("Hello, World!")

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getHumanChoice(rpsSelect) {
    let answer = rpsSelect; // Let user types the choice.
    let user = null;
    
    if (answer.toLowerCase() === "rock") {
        user = 0;
    }
    else if (answer.toLowerCase() === "paper") {
        user = 1;
    }
    else if (answer.toLowerCase() === "scissors") {
        user = 2;
    }
    
    return user;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, compChoice) {
    const matchResult = document.createElement("div");
    
    if (humanScore < 5 && computerScore < 5) {
        const matchScore = document.createElement("div");
        // Condition 1
        if (humanChoice - compChoice === 1) {
            if (humanChoice === 1) {
                humanScore++;
                matchResult.textContent = "You win! Paper beats Rock.";
                matchScore.textContent = `Human score: ${humanScore} Computer score:  ${computerScore}`;
                matchResult.appendChild(matchScore);

                if (humanScore === 5) {
                    const matchFinal = document.createElement('div');
                    matchFinal.textContent = "Human wins!!, the power belongs to mankind.";
                    matchScore.appendChild(matchFinal);
                }
        
                else if (computerScore === 5) {
                    const matchFinal = document.createElement('div');
                    matchFinal.textContent = "Computer wins!!, the power belongs to machine.";
                    matchScore.appendChild(matchFinal);
                }

            }
            else {
                humanScore++;
                matchResult.textContent = "You win! Scissors beat Paper.";
                matchScore.textContent = `Human score: ${humanScore} Computer score:  ${computerScore}`;
                matchResult.appendChild(matchScore);

                if (humanScore === 5) {
                    const matchFinal = document.createElement('div');
                    matchFinal.textContent = "Human wins!!, the power belongs to mankind.";
                    matchScore.appendChild(matchFinal);
                }
        
                else if (computerScore === 5) {
                    const matchFinal = document.createElement('div');
                    matchFinal.textContent = "Computer wins!!, the power belongs to machine.";
                    matchScore.appendChild(matchFinal);
                }
            }
        }

        // Condition 2
        else if (compChoice - humanChoice === 1) {
            if (compChoice === 1) {
                computerScore++;
                matchResult.textContent = "You lose! Paper beats Rock.";
                matchScore.textContent = `Human score: ${humanScore} Computer score:  ${computerScore}`;
                matchResult.appendChild(matchScore);

                if (humanScore === 5) {
                    const matchFinal = document.createElement('div');
                    matchFinal.textContent = "Human wins!!, the power belongs to mankind.";
                    matchScore.appendChild(matchFinal);
                }
        
                else if (computerScore === 5) {
                    const matchFinal = document.createElement('div');
                    matchFinal.textContent = "Computer wins!!, the power belongs to machine.";
                    matchScore.appendChild(matchFinal);
                }
            }
            else {
                computerScore++;
                matchResult.textContent = "You lose! Scisscors beat Paper.";
                matchScore.textContent = `Human score: ${humanScore} Computer score:  ${computerScore}`;
                matchResult.appendChild(matchScore);

                if (humanScore === 5) {
                    const matchFinal = document.createElement('div');
                    matchFinal.textContent = "Human wins!!, the power belongs to mankind.";
                    matchScore.appendChild(matchFinal);
                }
        
                else if (computerScore === 5) {
                    const matchFinal = document.createElement('div');
                    matchFinal.textContent = "Computer wins!!, the power belongs to machine.";
                    matchScore.appendChild(matchFinal);
                }
            }
        }

        // Condition 3
        else if (humanChoice - compChoice === 2) {
            computerScore++;
            matchResult.textContent = "You lose! Rock beats Scisscors.";
            matchScore.textContent = `Human score: ${humanScore} Computer score:  ${computerScore}`;
            matchResult.appendChild(matchScore);

            if (humanScore === 5) {
                const matchFinal = document.createElement('div');
                matchFinal.textContent = "Human wins!!, the power belongs to mankind.";
                matchScore.appendChild(matchFinal);
            }
    
            else if (computerScore === 5) {
                const matchFinal = document.createElement('div');
                matchFinal.textContent = "Computer wins!!, the power belongs to machine.";
                matchScore.appendChild(matchFinal);
            }
        }

        // Condition 4
        else if (compChoice - humanChoice === 2) {
            humanScore++;
            matchResult.textContent = "You win! Rock beats Scisscors.";
            matchScore.textContent = `Human score: ${humanScore} Computer score:  ${computerScore}`;
            matchResult.appendChild(matchScore);

            if (humanScore === 5) {
                const matchFinal = document.createElement('div');
                matchFinal.textContent = "Human wins!!, the power belongs to mankind.";
                matchScore.appendChild(matchFinal);
            }
    
            else if (computerScore === 5) {
                const matchFinal = document.createElement('div');
                matchFinal.textContent = "Computer wins!!, the power belongs to machine.";
                matchScore.appendChild(matchFinal);
            }
        }   

        // Condition 5
        else if (compChoice === humanChoice) {
            matchResult.textContent = "It's a draw!!";
            matchScore.textContent = `Human score: ${humanScore} Computer score:  ${computerScore}`;
            matchResult.appendChild(matchScore);

            if (humanScore === 5) {
                const matchFinal = document.createElement('div');
                matchFinal.textContent = "Human wins!!, the power belongs to mankind.";
                matchScore.appendChild(matchFinal);
            }
    
            else if (computerScore === 5) {
                const matchFinal = document.createElement('div');
                matchFinal.textContent = "Computer wins!!, the power belongs to machine.";
                matchScore.appendChild(matchFinal);
            }
        }
    }
    // Check the result score
    else {
        if (humanScore === 5) {
            matchResult.textContent = "Human wins!!, the game is over.";
        }
        else {
            matchResult.textContent = "Computer wins!!, the game is over.";
        }
    }

    return matchResult;
}

const choice = document.querySelector(".choice");
const btn1 = document.querySelector("#btn-rock");
const btn2 = document.querySelector("#btn-paper");
const btn3 = document.querySelector("#btn-scissors");
const tourResult = document.createElement("div");

choice.appendChild(tourResult);

btn1.addEventListener('click', () => {
    let playerSelection = getHumanChoice("rock");
    let compSelection = getComputerChoice();
    const matchPlay = playRound(playerSelection, compSelection);
    tourResult.appendChild(matchPlay);
});

btn2.addEventListener('click', () => {
    let playerSelection = getHumanChoice("paper");
    let compSelection = getComputerChoice();
    const matchPlay = playRound(playerSelection, compSelection);
    tourResult.appendChild(matchPlay);
});

btn3.addEventListener('click', () => {
    let playerSelection = getHumanChoice("scissors");
    let compSelection = getComputerChoice();
    const matchPlay = playRound(playerSelection, compSelection);
    tourResult.appendChild(matchPlay);
});
