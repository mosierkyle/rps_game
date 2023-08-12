// function that will randomly return rock paper or scissors
    
function getComputersChoice() {
    let ran = Math.floor((Math.random() * (3)) + 1);
    switch(ran) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break; 
    }
}

//function that plays the game 
function rps(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beat Paper"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beat Paper"
    }
}

//function that plays multiple rounds of the game 

//Calling the function 
console.log(getComputersChoice());
