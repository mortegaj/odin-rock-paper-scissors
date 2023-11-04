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

    return winner;
}

function game () {
    let computerWins = 0;
    let playerWins = 0;
    let playerSelection;
    let computerSelection;
    let result;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose rock, paper or scissors: ");
        computerSelection = getComputerChoice();
        console.log (`Round ${i+1} - Computer:${computerSelection} VS Player:${playerSelection}`); 
        result = playRound(computerSelection,playerSelection);

        if ((result == "player") || (result == "error-computer")) {
            console.log(`YOU win: ${playerSelection} beats ${computerSelection}`);
            playerWins += 1;
        } else if ((result == "computer") || (result == "error-player")) {
            console.log(`COMPUTER wins: ${computerSelection} beats ${playerSelection}`);
            computerWins += 1;
        } else {
            console.log("TIE!");
        }
        console.log("---");
            
    }

    console.log(`Score - Player: ${playerWins} VS Computer: ${computerWins}`);
}

game ();