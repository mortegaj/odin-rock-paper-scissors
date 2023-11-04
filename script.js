function getComputerChoice () {
    let randomNumber = Math.random()*100;
    let computerChoice;

    if (randomNumber < 33) computerChoice = "rock";
    else if (randomNumber < 66) computerChoice = "paper";
    else computerChoice = "scissors";
    return computerChoice
}

function playRound (computerSelection,playerSelection) {
    let winner;
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();

    switch (computerSelection) {
        case "rock":
            switch (playerSelection) {
                case "rock": winner = "Tie! Both players chose ROCK"; break;
                case "paper": winner = "You Win! PAPER beats ROCK"; break;
                case "scissors": winner = "You Lose! ROCK beats SCISSORS"; break;
                default: winner = "Your choise is wrong";
            }
            break;
        case "paper":
            switch (playerSelection) {
                case "paper": winner = "Tie! Both players chose PAPER"; break;
                case "scissors": winner = "You Win! SCISSORS beats PAPER"; break;
                case "rock": winner = "You Lose! PAPER beats ROCK"; break;
                default: winner = "Your choise is wrong";
            }
            break;
        case "scissors":
            switch (playerSelection) {
                case "scissors": winner = "Tie! Both players chose SCISSORS"; break;
                case "rock": winner = "You Win! ROCK beats SCISSORS"; break;
                case "paper": winner = "You Lose! SCISSORS beats PAPER"; break;
                default: winner = "Your choise is wrong";
            }
            break;
        default: 
            winner = "Computer's choise is wrong";
    }

    return winner;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log (`Computer:${computerSelection} VS Player:${playerSelection}`);
console.log(playRound(computerSelection,playerSelection));