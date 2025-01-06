function getComputerChoice(){
    // this function will return Rock, Paper or Scissors as pc choice
    let randomNumber = Math.ceil(Math.random() * 3);
    switch (randomNumber){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors"
    }
}

function getHumanChoice(userChoice){
    userChoice = prompt("your turn!, write:Rock, Paper or Scissors").toLowerCase();
    switch (userChoice){
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        default:
            return "Error!";
    }
}
