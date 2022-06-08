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

    // unflip any flipped over cards
    for (let card of cards) {
        card.classList.remove('flip');
    };

    // select 'score' class from DOM to store game score
    document.querySelector('.score').textContent = score;

    // function to flip over game cards
    cards.forEach(card => card.addEventListener('click', flipCard));

    /* shuffle cards to randomize game board
     * add timeout to ensure all cards are flipped over before shuffling */
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

// function to decrease score after every incorrect match
function decreaseScore() {
    score--;
    document.querySelector('.score').textContent = score;
};

// function for clicking on cards to flip over
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

/* main game play functionality:
 * function to check if cards match, 
 * do not match, 
 * messages to display - timeout added to displayMessage to ensure it is displayed after two cards have completed flipping over
 * decrease score, and 
 * add highscore */
function checkMatch() {
    // variable to check if cards match - use of character dataset added in index.html
    let correctMatch = card1.dataset.character === card2.dataset.character;

    // if cards do not match:
    // score decreases by 1
    if (score > 0) {
        if (!correctMatch) {
            flipOverCards();
            setTimeout(() => {
                displayMessage('😊 Keep guessing!');
            }, 500)
            decreaseScore();
        }

        // if cards match:
        // cards to remain flipped over
        if (correctMatch) {
            remainFlipped();
            setTimeout(() => {
                displayMessage(`🎉 That's a match!`);
            }, 500)

            // number of matches increases by 1
            // game is finished when all cards are matched and flipped over
            matches++;
            if ((matches * 2 === gameCards.length)) {
                setTimeout(() => {
                    displayMessage('✨ You won the game!');
                }, 500)

                // when game ends, if current score is higher than highscore, current score becomes the highscore
                if (score > highscore) {
                    highscore = score;
                    document.querySelector('.highscore').textContent = highscore;
                }
            };
        };

        // if score decreases to 0, player does not win, and the game is over
        if (score === 0) {
            setTimeout(() => {
                displayMessage('💥 Game Over!');
            }, 500)

            // if game is over, the game starts again after 5000 milliseconds
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

// function for cards to unflip if they do not match
// timeout set for cards to unflip after 3000 milliseconds to allow player to view and memorise the cards' positions
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