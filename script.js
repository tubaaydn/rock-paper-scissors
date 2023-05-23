const choice = ["rock", "paper", "scissors"];
let player = 0;
let computer = 0;



function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];

}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computer++
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            player++
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === "rock") {
            return "It's a draw";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            player++
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "paper") {
            return "It's a draw";
        } else if (computerSelection === "scissors") {
            computer++
            return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computer++
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            player++
            return "You Win! Scissors beats Paper";
        } else if (computerSelection === "scissors") {
            return "It's a draw";
        }
    }
}

   
    const photos = document.querySelectorAll('.photos');
    photos.forEach((photo) => {
        photo.addEventListener('click', playRound) 
   
    });