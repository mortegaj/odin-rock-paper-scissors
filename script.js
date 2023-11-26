function getComputerChoice () {
    let randomNumber = Math.random()*100;
    let computerChoice;

    if (randomNumber < 33) computerChoice = "rock";
    else if (randomNumber < 66) computerChoice = "paper";
    else computerChoice = "scissors";
    return computerChoice
}

function playRound (e) {
    let winner;
    const computerSelection = getComputerChoice().toLowerCase();
    const playerSelection = e.target.textContent.toLowerCase();

    switch (computerSelection) {
        case "rock":
            switch (playerSelection) {
                case "rock": winner = "tie"; break;
                case "paper": winner = "player"; break;
                case "scissors": winner = "computer"; break;
                default: winner = "error-player";
            }
            break;
        case "paper":
            switch (playerSelection) {
                case "paper": winner = "tie"; break;
                case "scissors": winner = "player"; break;
                case "rock": winner = "computer"; break;
                default: winner = "error-player";
            }
            break;
        case "scissors":
            switch (playerSelection) {
                case "scissors": winner = "tie"; break;
                case "rock": winner = "player"; break;
                case "paper": winner = "computer"; break;
                default: winner = "error-player";
            }
            break;
        default: 
            winner = "error-computer";
    }

    if (winner === "player") {
        playerScore ++;
        divRoundResult.textContent = `YOU win! player: ${playerSelection} - computer: ${computerSelection}`;
    } else if (winner === "computer") {
        computerScore ++;
        divRoundResult.textContent = `COMPUTER win! player: ${playerSelection} - computer: ${computerSelection}`;
    } else {
        divRoundResult.textContent = `TIE! player: ${playerSelection} - computer: ${computerSelection}`;
    }
    
    divScore.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const divRoundResult = document.querySelector("#round-result");
const divScore = document.querySelector("#score");

btnRock.addEventListener("click",playRound);
btnPaper.addEventListener("click",playRound);
btnScissors.addEventListener("click",playRound);

let computerScore = 0;
let playerScore = 0;
