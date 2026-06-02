alert("Welcome to the Rock, Paper, Scissors game!");

function getHumanChoice() {
    let humanChoice = prompt("What do you choose?");
    
    return humanChoice.toLowerCase();
}

function getComputerChoice() {
    let randomChoice = Math.random();

    if (randomChoice < 0.33){
        return "rock";

    } else if (randomChoice <= 0.66) {
        return "paper";

    } else {
        return "scissors";
    }
}

function playRound() {

    let humanChoice = getHumanChoice(); 
    let computerChoice = getComputerChoice(); 
    alert("Computer chose " + computerChoice);
    announceWinner(humanChoice, computerChoice);
}    

function announceWinner(humanChoice, computerChoice){
    
    let tieResult = "It's a tie!";
    let humanWinner = "You win this round";
    let computerWinner = "Computer wins this round :(";

    if (computerChoice == humanChoice) { 
        alert(tieResult);

    } else if (computerChoice == "rock" && humanChoice == "paper") {
        humanScore++;
        alert(humanWinner);

    } else if (computerChoice ==="rock" && humanChoice == "scissors") {
        computerScore++;
        alert(computerWinner);

    } else if (computerChoice == "paper" && humanChoice == "rock") {
        computerScore++;
        alert(computerWinner);

    } else if (computerChoice == "paper" && humanChoice == "scissors") {
        humanScore++;
        alert(humanWinner);

    } else if (computerChoice == "scissors" && humanChoice == "rock") {
        humanScore++;
        alert(humanWinner);

    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        computerScore++;
        alert(computerWinner);
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        alert("Round No " + (i+1));
        playRound();
    }

    if (computerScore > humanScore) {
        alert("Computer wins with a score of " + computerScore + "-" + humanScore)
    
    } else if (computerScore < humanScore) {
        alert("Human wins with a score of " + humanScore + "-" + computerScore)

    } else {
        alert("The games end in a tie!")
    }

}

playGame();
