// Wait for the DOM to finish loading before running the game

document.addEventListener("DOMContentLoaded", function () {

    // display game board
    const gameCards = document.querySelectorAll('.game-card');

    // shuffle cards on game board
    function shuffle() {
        gameCards.forEach(card => {
            let randomCards = Math.trunc(Math.random() * gameCards.length);
            card.style.order = randomCards;
        });
    };
    shuffle();
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's selections have been processed
 */

// Creating variables

const cards = document.querySelectorAll('.card');
let card1;
let card2;
let cardIsFlipped = false;
let disableFlipping = false;

// display message variable

let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// scores variables

let score = 30;
let highscore = 0;

// play button (resets the game)

document.querySelector('.play').addEventListener('click', function () {
    score = 30;
    gameCards.forEach(card => {
        let randomCards = Math.trunc(Math.random() * gameCards.length);
        card.style.order = randomCards;
    });

});


// display score

const decreaseScore = function () {
    let incorrectMatch = card1.dataset.character !== card2.dataset.character;
    if (incorrectMatch) {
        score--;
        document.querySelector('.score').textContent = score;
    };
};

// Clicking cards to flip over

function flipCard() {
    if (disableFlipping) return;
    if (this === card1) return;
    this.classList.add('flip');

    if (!cardIsFlipped) {
        cardIsFlipped = true;
        card1 = this;
        return;
    };
    card2 = this;

    checkMatch();
};

cards.forEach(card => card.addEventListener('click', flipCard));

// check if cards match
function checkMatch() {
    let correctMatch = card1.dataset.character === card2.dataset.character;
    if (correctMatch) {
        remainFlipped();
        displayMessage(`🎉 That's a match!`);
    } else {
        flipOverCards();
        displayMessage('😊 Keep guessing!');
    };
};


// cards to remain flipped if they match
function remainFlipped() {
    card1.removeEventListener('click', flipCard);
    card2.removeEventListener('click', flipCard);

    nextTurn();
};

// cards to flip over if they do not match
function flipOverCards() {
    disableFlipping = true;
    setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
        nextTurn();
    }, 3000);
};

// reset card values for next turn
function nextTurn() {
    cardIsFlipped = false;
    disableFlipping = false;
    card1 = null;
    card2 = null;
};