// create variables
const cards = document.querySelectorAll('.card');
const gameCards = document.querySelectorAll('.game-card');
let card1;
let card2;
let cardIsFlipped;
let disableFlipping;
let matches;

// scores variables
let score = 10;
let highscore = 0;

// display message variable
let displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", startGame);

/* Set/reset all game parameters to their initial state. */
function startGame() {
    // initial variable values
    score = 10;
    highscore;
    cardIsFlipped = false;
    disableFlipping = false;
    displayMessage('🤩 Start playing!');
    matches = 0;

    for (let card of cards) {
        card.classList.remove('flip');
    };

    document.querySelector('.score').textContent = score;

    cards.forEach(card => card.addEventListener('click', flipCard));

    setTimeout(() => {
        shuffle();
    }, 500);
};

// play button (resets the game)
document.querySelector('.play').addEventListener('click', startGame);

// shuffle cards on game board
function shuffle() {
    gameCards.forEach(card => {
        let randomCards = Math.trunc(Math.random() * gameCards.length);
        card.style.order = randomCards;
    });
};

// function to decrease score after every incorrect macth
function decreaseScore() {
    score--;
    document.querySelector('.score').textContent = score;
};

// function for clicking cards to flip over
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

// function to check if cards match
function checkMatch() {
    let correctMatch = card1.dataset.character === card2.dataset.character;
    if (score > 0) {
        if (!correctMatch) {
            flipOverCards();
            setTimeout(() => {
                displayMessage('😊 Keep guessing!');
            }, 500)
            decreaseScore();
        }
        if (correctMatch) {
            remainFlipped();
            setTimeout(() => {
                displayMessage(`🎉 That's a match!`);
            }, 500)
            matches++;
            if ((matches * 2 === gameCards.length)) {
                setTimeout(() => {
                    displayMessage('✨ You won the game!');
                }, 500)

                if (score > highscore) {
                    highscore = score;
                    document.querySelector('.highscore').textContent = highscore;
                }
            };
        };
        if (score === 0) {
            setTimeout(() => {
                displayMessage('💥 Game Over!');
            }, 500)

            setTimeout(() => {
                startGame();
            }, 5000)
        }
    };
};

// function for cards to remain flipped if they match
function remainFlipped() {
    card1.removeEventListener('click', flipCard);
    card2.removeEventListener('click', flipCard);
    nextTurn();
};

// function for cards to flip over if they do not match
function flipOverCards() {
    disableFlipping = true;
    setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
        nextTurn();
    }, 3000);
};

// function to reset card values for next turn
function nextTurn() {
    cardIsFlipped = false;
    disableFlipping = false;
    card1 = null;
    card2 = null;
};