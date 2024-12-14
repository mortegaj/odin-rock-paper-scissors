
const ROCK = "PEDRA";
const PAPER = "PAPER";
const SCISSORS = "TISORES";
const QUIT = "SORTIR"
const ERROR = "error"

let humanScore = 0;
let computerScore = 0;

let computerChoice;
let humanChoice;


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) return ROCK;
    if (randomNumber == 1) return PAPER;
    if (randomNumber == 2) return SCISSORS;
    return ERROR;
}

function getHumanChoice() {
    let humanChoice = prompt('Escull una opció: (1)' + ROCK + ', (2)' + PAPER + ', (3)' + SCISSORS + ' or (0)' + QUIT);
    if (humanChoice == 1) return ROCK;
    if (humanChoice == 2) return PAPER;
    if (humanChoice == 3) return SCISSORS;
    if (humanChoice == 0) return QUIT;
    return ERROR;
}

function playRound(humanChoice, computerChoice) {
    
    let winner = null;

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

   if (winner == "HUMAN") {
        console.log("Felicitats! Has guanyat");
        humanScore += 1;
   } else if (winner  == "COMPUTER") {
        console.log("Mala sort, has perdut! Torna-ho a intentat");
        computerScore += 1;
   } else {
        console.log("Heu empatat!");
   }

}

console.log("--------------------")

computerChoice = getComputerChoice();
humanChoice = getHumanChoice();

if ((humanChoice == ROCK) || (humanChoice == PAPER) || (humanChoice == SCISSORS)) {
    console.log ("Has escollit " + humanChoice + " | l'ordinador ha escollit " + computerChoice);
    playRound(humanChoice,computerChoice);
} else if (humanChoice == QUIT) {
    console.log("Has escollit sortir");
} else {
    console.log("L'opció escollida no es correcta")
}

console.log("--------------------");