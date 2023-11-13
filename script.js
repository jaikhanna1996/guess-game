'use strict';

// const msg = document.querySelector('.message');   // querySelector() -  one of the methods available on the DOM.
// let msgTxt = document.querySelector('.message').textContent;

// console.log(msg);
// console.log(msgTxt);

// document.querySelector('.message').textContent = "KHANNA"; // setting testContent

// document.querySelector('.secretNumber').textContent = 13;
// document.querySelector('.score').textContent = 22;

// document.querySelector('.guess').value = 23

////////////////////////////////////////
// EVENTS

// document.querySelector('.check').addEventListener('click', function(){   // second argument expects an event handler function
//     // console.log(document.querySelector('.guess').value);
//     const guess = document.querySelector('.guess').value;
    
//     if(!guess) {
//         document.querySelector('.message').textContent = 'no secretNumber!';
//     }
// }) 

///////////////////////////////
// Implementing game logic

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){   // second argument expects an event handler function
    // console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess) {
        displayMessage('no number!');
    } else if (guess == secretNumber) { // when player wins
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(score >= highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ?  'Too High!' : 'Too Low!')
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You Lost the game!')
            document.querySelector('.score').textContent = 0;
        }
    }
}) 

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value= '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})