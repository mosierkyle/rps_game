// function that will randomly return rock paper or scissors
let maxScore;
let winner;
let pWins = 0;
let cWins = 0;
let round = 1;

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

function getRounds(){
    return Number(document.querySelector('#round-input').value);
  };


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

function viewStart() {
    document.getElementById("rounds-div").style.display= "none";
    document.getElementById("buttons-div").style.display= "flex";
    document.getElementById("score-div").style.display= "flex"; 
};

//function that plays the game 
function rps(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.querySelector('#round-result-p').textContent = "It's a tie!"
        return "no one"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        document.querySelector('#round-result-p').textContent = "You Lose! Paper beats Rock"
        return "computer"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        document.querySelector('#round-result-p').textContent = "You Win! Scissors beat Paper"
        return "player"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        document.querySelector('#round-result-p').textContent = "You Lose! Rock beats Scissors"
        return "computer"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        document.querySelector('#round-result-p').textContent = "You Win! Paper beats Rock"
        return "player"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        document.querySelector('#round-result-p').textContent = "You Win! Rock beats Scissors"
        return "player"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        document.querySelector('#round-result-p').textContent = "You Lose! Scissors beat Paper"
        return "computer"
    }
}

function whoWins() {
    if (pWins >= maxScore) {
        document.querySelector('#result').textContent = `YOU WIN!`;
        document.getElementById("buttons-div").style.display= "none";
    } else if (maxScore <= cWins) {
        document.querySelector('#result').textContent = `YOU LOSE!`;
        document.getElementById("buttons-div").style.display= "none";
    } else {
        return;
    }
}

function updatePage(winner){
    if(winner == "player") {
        pWins += 1;
        document.querySelector('#player-score').textContent = `Player: ${pWins}`;
        round +=1
    } else if(winner == "computer") {
        cWins += 1;
        document.querySelector('#computer-score').textContent = `Computer: ${cWins}`;
        round += 1
    } else {
        round +=1
    }
}

function startGame() {
    viewStart()
    maxScore = getRounds();
}

function gameRock() {
    let winner = rps('rock',getComputersChoice())
    updatePage(winner)
    document.querySelector('#what-round').textContent = `ROUND ${round}`;
    whoWins()
}

function gamePaper() {
    let winner = rps('paper',getComputersChoice())
    updatePage(winner)
    document.querySelector('#what-round').textContent = `ROUND ${round}`;
    whoWins()
}

function gameScissors() {
    let winner = rps('scissors',getComputersChoice())
    updatePage(winner)
    document.querySelector('#what-round').textContent = `ROUND ${round}`;
    whoWins()
}
