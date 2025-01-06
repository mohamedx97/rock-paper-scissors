function getComputerChoice(){
    // this function will return Rock, Paper or Scissors as pc choice
    let randomNumber = Math.ceil(Math.random() * 3);
    switch (randomNumber){
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors"
            break;
    }
}
