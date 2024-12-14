const choiceList = ['Rock' , 'Paper', 'Scissors']

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choiceList[randomNumber];
}

function getHumanChoice() {
    let humanChoice = prompt('Your choice: (r)ock, (p)aper, (s)cissors or (q)uit')
    if (humanChoice.toLowerCase() == 'r') return choiceList[0];
    if (humanChoice.toLowerCase() == 'p') return choiceList[1];
    if (humanChoice.toLowerCase() == 's') return choiceList[2];
    if (humanChoice.toLowerCase() == 'q') return 'Quit';
    return 'Error'
}

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log('Computer Choice: ' + computerChoice + ' | Human Choice: ' + humanChoice);
