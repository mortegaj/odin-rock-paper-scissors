
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
    console.log("human choice: " + humanChoice);
    console.log("computer choice: " + computerChoice);

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
   printWinner(winner);

}

function printWinner (winner) {
    if (winner == "HUMAN") {
        humanScore += 1;
        console.log("Felicitats! Has guanyat.");
   } else if (winner  == "COMPUTER") {
        computerScore += 1;
        console.log("Mala sort, has perdut! Torna-ho a intentat");
   } else if (winner == "TIE") {
        console.log("Heu empatat!");
   } else {
        console.log("Opció escollida incorrecta");
   }
}

const userSelector = document.querySelector("#user-selector");
userSelector.addEventListener("click", playRound);



