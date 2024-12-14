function getComputerChoice() {
    const choiceList = ['Rock' , 'Paper', 'Scissors']
    let randomNumber = Math.floor(Math.random() * 3);
    return choiceList[randomNumber];
}

const computerChoice = getComputerChoice();
console.log(computerChoice);
