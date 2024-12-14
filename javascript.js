const choiceList = ['PEDRA' , 'PAPER', 'TISORES']
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choiceList[randomNumber];
}

function getHumanChoice() {
    let humanChoice = prompt('Escull una opció: (1)PEDRA, (2)PAPER, (3)TISORES or (0)Sortir')
    if (humanChoice.toLowerCase() == '1') return choiceList[0];
    if (humanChoice.toLowerCase() == '2') return choiceList[1];
    if (humanChoice.toLowerCase() == '3') return choiceList[2];
    if (humanChoice.toLowerCase() == '0') return 'SORTIR';
    return 'Error'
}

function playRound(humanChoice, computerChoice) {
    let humanChoiceUpperCase = humanChoice.toUpperCase();
    let computerChoiceUpperCase = computerChoice.toUpperCase();
    let winner = 'TIE';

    if (humanChoiceUpperCase == "PEDRA") {
        if (computerChoiceUpperCase == "PEDRA") {
            winner = "TIE";
        } else if (computerChoiceUpperCase == "PAPER") {
            winner = 'COMPUTER';
        } else {
            winner = 'HUMAN';
        }
    } else if (humanChoiceUpperCase == "PAPER") {
        if (computerChoiceUpperCase == "PEDRA") {
            winner = "HUMAN";
        } else if (computerChoiceUpperCase == "PAPER") {
            winner = "TIE";
        } else {
            winner = "COMPUTER";
        }
    } else {
        if (computerChoiceUpperCase == "PEDRA") {
            winner = "COMPUTER";
        } else if (computerChoiceUpperCase == "PAPER") {
            winner = "HUMAN";
        } else {
            winner = "TIE";
        }
    }

   if (winner == "HUMAN") {
        console.log("Felicitats, has guanyat");
        humanScore += 1;
   } else if (winner  == "COMPUTER") {
        console.log("Mala sort, has perdut, torna-ho a intentat");
        computerScore += 1;
   } else {
        console.log("Heu empatat!");
   }

}

console.log("--------------------")
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
if (choiceList.includes(humanChoice)) {
    console.log ("Has escollit " + humanChoice + " | l'ordinador ha escollit " + computerChoice);
    playRound(humanChoice,computerChoice);
} else if (humanChoice == "SORTIR") {
    console.log("Has escollit sortir");
} else {
    console.log("L'opció escollida no es correcta")
}
console.log("--------------------")
