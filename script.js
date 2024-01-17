'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const guess = Number(document.querySelector('.guess').value)
let score = 20;
let highScore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)

    if(guess <= 20 && guess >= 0){

    if(!guess) {
        displayMessage('No number was inputed!')

    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = 'You guessed right'
        displayMessage('You guessed right')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore;
        }

    } else if (guess !== secretNumber) {
        if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too high' : 'Too low')
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game'
            document.querySelector('.score').textContent = 0
            document.querySelector('body').style.backgroundColor = 'red';
        }
    // } else if (guess < secretNumber) {
    //     if(score > 1) {
    //     document.querySelector('.message').textContent = 'Too low'
    //     score--;
    //     document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game'
    //         document.querySelector('.score').textContent = 0
    //         document.querySelector('body').style.backgroundColor = 'red';
    //     }
    // }
} else {
    document.querySelector('.message').textContent = 'Please select a Number from 1-20'
}
}
})

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15rem';

})