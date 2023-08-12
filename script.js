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

//function that gets player input and returns it lowercase
function getPlayer(){
    let answer = prompt("Enter Rock, Paper, or Scissors?");
    answer = answer.toLowerCase()
    if (answer == "rock" || answer == "scissors" || answer == "paper")  {
        return answer
    } else getPlayer()
}

//function that plays the game 
function rps(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
        return "no one"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You Lose! Paper beats Rock")
        return "computer"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You Win! Scissors beat Paper")
        return "player"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You Lose! Rock beats Scissors")
        return "computer"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You Win! Paper beats Rock")
        return "player"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You Win! Rock beats Scissors")
        return "player"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose! Scissors beat Paper")
        return "computer"
    }
}

//function that plays multiple rounds of the game 
function game(num) {
    let playerWins = 0;
    let computerWins = 0;
    for(let i = 0; i < num; i++) {
        let winner = rps(getPlayer(),getComputersChoice())
        if(winner == "player") {
            playerWins += 1;
            console.log(`Score: ${playerWins} to ${computerWins}`);
        } else if(winner == "computer") {
            computerWins += 1;
            console.log(`Score: ${playerWins} to ${computerWins}`);
        } else {
            num += 1;
            console.log(`Still ${playerWins} to ${computerWins}`);
        }
    }
    if (playerWins > computerWins) {
        console.log(`YOU WIN! ${playerWins} to ${computerWins}`);
    } else if (playerWins < computerWins) {
        console.log(`YOU LOSE! ${playerWins} to ${computerWins}`);
    } else {
        console.log(`Its a draw! ${playerWins} to ${computerWins}`)
    }
}

//Calling the function 
game(5);