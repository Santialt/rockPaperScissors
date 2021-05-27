function computerPlay(){
    let computerChoice = ['rock', 'paper', 'scissors']
    return (computerChoice[Math.floor(Math.random() *computerChoice.length)])
}

let playerScore = 0, computerScore = 0;

function playRound(){
    let computerSelection = computerPlay()
    
    if (playerSelection === 'rock' && computerSelection === 'rock'){
       alert('player selection: ' + playerSelection);
       alert('computer selection: ' + computerSelection);
        alert('draw');
        alert('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        alert('player selection: ' + playerSelection);
        alert('computer selection: ' + computerSelection);
        alert('computer win');
        computerScore++;
        alert('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
       alert('player selection: ' + playerSelection);
       alert('computer selection: ' + computerSelection);
        alert('player win');
        playerScore++;
        alert('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'paper' && computerSelection === 'paper'){
       alert('player selection: ' + playerSelection);
       alert('computer selection: ' + computerSelection);
        alert('draw');
        alert('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        alert('player selection: ' + playerSelection);
        alert('computer selection: ' + computerSelection);
        alert('computer win');
        computerScore++;
        alert('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
       alert('player selection: ' + playerSelection);
       alert('computer selection: ' + computerSelection);
        alert('draw');
        alert('player score: ' + playerScore + ' computer score: ' + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        alert('player selection: ' + playerSelection);
        alert('computer selection: ' + computerSelection);
         alert('player win');
         playerScore++;
         alert('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        alert('player selection: ' + playerSelection);
        alert('computer selection: ' + computerSelection);
         alert('computer win');
         computerScore++;
         alert('player score: ' + playerScore + ' computer score: ' + computerScore);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        alert('player selection: ' + playerSelection);
        alert('computer selection: ' + computerSelection);
         alert('player win');
         playerScore++;
         alert('player score: ' + playerScore + ' computer score: ' + computerScore);
    }
}


let playerSelection = prompt('rock, paper or scissors?', '')

function game(){
    playerSelection;
    computerPlay();
    console.log(playRound());
    playerSelection = prompt('rock, paper or scissors?', '')    
    playerSelection;
    computerPlay();
    console.log(playRound());
    playerSelection = prompt('rock, paper or scissors?', '')        
    playerSelection;
    computerPlay();
    console.log(playRound());
    playerSelection = prompt('rock, paper or scissors?', '')
    playerSelection;
    computerPlay();
    console.log(playRound());
    playerSelection = prompt('rock, paper or scissors?', '')
    playerSelection;
    computerPlay();
    console.log(playRound());
}



console.log(game());
if (playerScore < computerScore){
    console.log('you lose');
} else if (playerScore > computerScore){
    console.log('you win');
}





