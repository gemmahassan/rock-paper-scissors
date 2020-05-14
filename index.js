function computerPlay() {
    let num, computerSelection;
    num = Math.floor(Math.random() * 3) + 1;

    switch (num) {
        case 1: 
            computerSelection = 'Rock';
            break;
        case 2:
            computerSelection = 'Scissors';
            break;
        case 3: 
            computerSelection = 'Paper';
            break;
        default: 
            break;
    }

    return computerSelection.toLowerCase();
}

function playRound(playerSelection, computerSelection, p) {
    let playerWins, computerWins, draw;
    
    
    playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
    computerWins = `You lose! ${computerSelection} beats ${playerSelection}`;
    draw = `${computerSelection} vs ${playerSelection}, it's a draw!`;

    
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            p.textContent = playerWins;
            
            return "player";
        } else if (computerSelection === 'paper') {
            p.textContent = computerWins;
            return "computer";
        } else {
            p.textContent = draw;
            return "draw";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            p.textContent = playerWins;
            return "player";
        } else if (computerSelection === 'scissors') {
            p.textContent = computerWins;
            return "computer";
        } else {
            p.textContent = draw;
            return "draw";
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock') {
            p.textContent = playerWins;
            return "player";
        } else if (computerSelection === 'paper') {
            p.textContent = computerWins;
            return "computer";
        } else {
            p.textContent = draw;
            return "draw";
        }
    }   
}

function showResults(totalPlayerWins, totalComputerWins) {

    let scoreContent;

    if (totalPlayerWins > totalComputerWins) {
        scoreContent = "GAME OVER! Congratulations, you have won!";
    } else {
        scoreContent = "GAME OVER! Sorry, you were beaten by the computer";
    }

    return scoreContent;
}

function game() {
    let computerSelection, playerSelection, result;
    let totalPlayerWins = 0;
    let totalComputerWins = 0;
    const buttons = document.querySelectorAll("button");
    const divResults = document.querySelector('#results');

    const currentRound = document.createElement("p");
    const currentScore = document.createElement("p");
    const finalScore = document.createElement("p");

       // playerSelection = getPlayerSelection();
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            computerSelection = computerPlay();
            playerSelection = button.id;
            result = playRound(playerSelection, computerSelection, currentRound);
            switch (result) {
                case "player":
                    totalPlayerWins++;
                    break;
                case "computer":
                    totalComputerWins++;
                    break;
                case "draw":
                    break;
                default: 
                    break;
            }
            divResults.appendChild(currentRound);
            
            
            currentScore.textContent = `Current score: \nPlayer: ${totalPlayerWins} Computer: ${totalComputerWins}`;
           
            divResults.appendChild(currentScore);
        
            if (totalPlayerWins === 5 || totalComputerWins === 5) {
                finalScore.textContent = showResults(totalPlayerWins, totalComputerWins);
                divResults.append(finalScore);
            }
        });      
    });
}

game();
