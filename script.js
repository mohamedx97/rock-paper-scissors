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

function getHumanChoice(){
    userChoice = prompt("your turn!, write:Rock, Paper or Scissors");
    if (userChoice != null){
        userChoice = userChoice.toLowerCase();
    }
    switch (userChoice){
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
        case null:
            alert("you have skiped the game");
            return "skipped!"
        default:
            return "Error!";
    }
}

function playRound(humanChoice,computerChoice){
    
    if (humanChoice === computerChoice){
        console.log("tie!")
    }

    else if (humanChoice === "Error!"){
        computerScore ++;
        console.log("you have entred a wrong value so pc wins!");
    }

    else if (humanChoice === "Rock" && computerChoice === "Paper"){
        computerScore ++;
        console.log("pc wins Paper beats Rock");
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissors"){
        computerScore ++;
        console.log("pc wins Paper beats Scissors");
    }
    else if (humanChoice === "scissors" && computerChoice === "Rock"){
        computerScore ++;
        console.log("pc wins scissors beats Rock");
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors"){
        humanScore ++;
        console.log("you wins Rock beats Scissors");
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore ++;
        console.log("you wins Paper beats Rock");
    }
    else if (humanChoice === "scissors" && computerChoice === "Paper"){
        humanScore ++;
        console.log("you wins scissors beats Paper");
    }
}

function playGame(rounds){
    for (rounds; rounds > 0; rounds --){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        if (humanSelection === "skipped!"){
            console.log("game over!");
            break;
        }
    }

    if (humanScore > computerScore && humanSelection != "skipped!"){
        console.log("you win the game have fun!");
    }
    else if (computerScore > humanScore && humanSelection != "skipped!"){
        console.log("pc win the game good luck!");
    }
    else if (computerScore == humanScore && humanSelection != "skipped!"){
        console.log("tie no heros here!");
    }
}

alert("welcome to rock paper scissors please open the console to view the results while playing you will play 5 rounds, GoodLuck!")
let humanScore = 0;
let computerScore = 0;
playGame(5);


