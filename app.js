const playerPoints = document.querySelector("#playerScore");
const computerPoints = document.querySelector("#computerScore");
const roundResults = document.querySelector("#roundResults");
const gameResults = document.querySelector("#gameResults");
const buttons = document.querySelectorAll("button");

let playScore = 0;
let comScore = 0;

function computerPlay() {
    computerPick = Math.floor(Math.random() * 3)
    if (computerPick === 0) {
        return "Rock";
    }
    else if (computerPick === 1) {
        return "Paper";
    }
    else if (computerPick === 2) {
        return "Scissor";
    }
}

function checkGame () {
    if (playScore == 5) {
        gameResults.textContent = "Congratulations! You won!";
        buttons.forEach(button => {
            button.removeEventListener("click", getPlayerChoice);
        });
    }
    else if (comScore == 5) {
        gameResults.textContent = "Oh no! You lost!";
        buttons.forEach(button => {
            button.removeEventListener("click", getPlayerChoice);
        });
    }
}

function playRound(playerSelection, computerSelection, playerScore, computerScore) {
    if (playerSelection === computerSelection) {
        return "It's a tie! Play again.";
    }
    else if ((playerSelection === "Scissor" && computerSelection === "Rock") || 
            (playerSelection === "Paper" && computerSelection === "Scissor") || 
            (playerSelection === "Rock" && computerSelection === "Paper")) {
        computerPoints.textContent = ++comScore;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
    else if ((playerSelection === "Scissor" && computerSelection === "Paper") || 
            (playerSelection === "Paper" && computerSelection === "Rock") || 
            (playerSelection === "Rock" && computerSelection === "Scissor")) {
        playerPoints.textContent = ++playScore;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    }
}

function startGame() {
    buttons.forEach(button => {
        button.addEventListener("click", getPlayerChoice);
    });
}

function getPlayerChoice(e) {
    computerSelection = computerPlay();
    playerSelection = e.target.id;
    result = playRound(playerSelection, computerSelection, playScore, comScore);
    roundResults.textContent = result;
    checkGame();
}

startGame();