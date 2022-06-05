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

// Clicking cards to flip over
// [...cards].forEach((card) => {
//     card.addEventListener('click', function () {
//         card.classList.toggle('flipCard');
//     });
// });

function flipCard() {
    this.classList.toggle('.flipCard');
}

cards.forEach(card => card.addEventListener('click', flipCard));

flipCard();


// flip two cards

let card1;
let card2;
let cardIsFlipped = false;

function flipCard() {
    this.classList.toggle('flip');

    if (!cardIsFlipped) {
        cardIsFlipped = true;
        card1 = this;
        return;
    };

    card2 = this;
    cardIsFlipped = false;

    checkMatch();
};

// check if cards match

function checkMatch() {
    if (card1.dataset.character === card2.dataset.character) {
        card1.removeEventListener('click', 'flipCard');
        card2.removeEventListener('click', 'flipCard');
    } else {
        card1.classList.remove('flipCard');
        card2.classList.remove('flipCard');
    };
    checkMatch();
};