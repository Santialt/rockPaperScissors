function computerPlay(){
    let computerChoice = ['rock', 'paper', 'scissors']
    return (computerChoice[Math.floor(Math.random() *computerChoice.length)])
}

let playerScore = 0, computerScore = 0;

function playRound(){
    let computerSelection = computerPlay()
    
    if (playerSelection === 'rock' && computerSelection === 'rock'){
       console.log('player selection: ' + playerSelection);
       console.log('computer selection: ' + computerSelection);
        console.log('draw');
        console.log('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('player selection: ' + playerSelection);
        console.log('computer selection: ' + computerSelection);
        console.log('computer win');
        computerScore++;
        console.log('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'rock' && computerSelection === 'scissors'){
       console.log('player selection: ' + playerSelection);
       console.log('computer selection: ' + computerSelection);
        console.log('player win');
        playerScore++;
        console.log('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'paper' && computerSelection === 'paper'){
       console.log('player selection: ' + playerSelection);
       console.log('computer selection: ' + computerSelection);
        console.log('draw');
        console.log('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log('player selection: ' + playerSelection);
        console.log('computer selection: ' + computerSelection);
        console.log('computer win');
        computerScore++;
        console.log('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors'){
       console.log('player selection: ' + playerSelection);
       console.log('computer selection: ' + computerSelection);
        console.log('draw');
        console.log('player score: ' + playerScore + ' computer score: ' + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('player selection: ' + playerSelection);
        console.log('computer selection: ' + computerSelection);
         console.log('player win');
         playerScore++;
         console.log('player score: ' + playerScore + ' computer score: ' + computerScore);
    }else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log('player selection: ' + playerSelection);
        console.log('computer selection: ' + computerSelection);
         console.log('computer win');
         computerScore++;
         console.log('player score: ' + playerScore + ' computer score: ' + computerScore);
    }
    else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log('player selection: ' + playerSelection);
        console.log('computer selection: ' + computerSelection);
         console.log('player win');
         playerScore++;
         console.log('player score: ' + playerScore + ' computer score: ' + computerScore);
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





