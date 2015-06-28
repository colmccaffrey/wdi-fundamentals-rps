////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';


function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
     return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {
 
    var winner;
    if (playerMove === computerMove) {
       winner = 'Draw!'; 
   } else  if (playerMove == 'rock' && computerMove == 'scissors' || playerMove == 'paper' && computerMove == 'rock' || playerMove == 'scissors' && computerMove == 'paper') {
       winner = 'player';
    } else {
        winner = 'computer';
   }
   return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        if (winner === 'player') {
            playerWins += 1;
        } 
       else if (winner === 'computer') {
            computerWins += 1;
        } else {
            console.log('It is a draw!');
        }
    
        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently: PLAYER ' + playerWins + ' to COMPUTER ' + computerWins);
    }
    
    return [playerWins, computerWins];
}

playToFive();
