
const ROCK = "PEDRA";
const PAPER = "PAPER";
const SCISSORS = "TISORES";
const QUIT = "SORTIR"
const ERROR = "error"

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) return ROCK;
    if (randomNumber == 1) return PAPER;
    if (randomNumber == 2) return SCISSORS;
    return ERROR;
}

function getHumanChoice(humanChoice) {
    if (humanChoice == "rock") return ROCK;
    if (humanChoice == "paper") return PAPER;
    if (humanChoice == "scissors") return SCISSORS;
}

function playRound(e) {
    
    let winner = null;

    let humanChoice = getHumanChoice (e.target.id);
    let computerChoice = getComputerChoice();
    
    if (humanChoice == ROCK) {
        if (computerChoice == ROCK) {
            winner = "TIE";
        } else if (computerChoice == PAPER) {
            winner = "COMPUTER";
        } else if (computerChoice == SCISSORS) {
            winner = "HUMAN";
        } else {
            winner == "ERROR";
        }
    } else if (humanChoice == PAPER) {
        if (computerChoice == ROCK) {
            winner = "HUMAN";
        } else if (computerChoice == PAPER) {
            winner = "TIE";
        } else if (computerChoice == SCISSORS) {
            winner = "COMPUTER";
        } else {
            winner == "ERROR";
        }
    } else if (humanChoice == SCISSORS) {
        if (computerChoice == ROCK) {
            winner = "COMPUTER";
        } else if (computerChoice == PAPER) {
            winner = "HUMAN";
        } else if (computerChoice == SCISSORS) {
            winner = "TIE";
        } else {
            winner == "ERROR";
        }
    } else {
        winner = "ERROR"
    }

   winner;
   printResult(humanChoice,computerChoice,winner);

}

function printResult (humanChoice,computerChoice,winner) {

    /** 
     * <div id="human-choice">TU: </div>
     * <div id="computer-choice">ORDINADOR: </div>
     * <div id="result"></div>
     * <div id="score">TU: 0 / ORDINADOR: 0</div>
     */

    humanChoiceDiv.textContent = "TU: " + humanChoice;
    computerChoiceDiv.textContent = "ORDINADOR: " + computerChoice;
    resultDiv.textContent = "GUANYADOR: ";
    
    if (winner == "HUMAN") {
        humanScore += 1;
        resultDiv.textContent += "TU";
    } else if (winner  == "COMPUTER") {
        computerScore += 1;
        resultDiv.textContent += "ORDINADOR";
    } else if (winner == "TIE") {
        resultDiv.textContent += "EMPAT";
    } else {
        resultDiv.textContent += "ERROR";
    }

    scoreDiv.textContent = `TU: ${humanScore} / ORDINADOR: ${computerScore}`;
    
    if (humanScore == 5) {
        winnerDiv.textContent = "HAS GUANYAT LA PARTIDA"
        userSelector.removeEventListener("click", playRound);
    }

    if (computerScore == 5) {
        winnerDiv.textContent = "HAS PERDUT LA PARTIDA"
        userSelector.removeEventListener("click", playRound);
    }



}

const userSelector = document.querySelector("#user-selector");
const humanChoiceDiv = document.querySelector("#human-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");
const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");

userSelector.addEventListener("click", playRound);



