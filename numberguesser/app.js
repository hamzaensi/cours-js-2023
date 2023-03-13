/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
      const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload();
  }
});
      
// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  
  // Validate


  // Check if won
  if(guess === winningNum){
    // Game over - won
 

  } else {
    // Wrong number
   
    } else {
      
    }
  }
});

// Game over
function gameOver(won, msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  
  // Change border color
 
  // Set text color
  
  // Set message
  

  // PLay Again?
 
}

// Get Winning Number
function getRandomNum(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
