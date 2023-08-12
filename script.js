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

// function that gets players choice 

//function that plays the game 

//function that plays multiple rounds of the game 

//Calling the function 
console.log(getComputersChoice());