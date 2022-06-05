// Wait for the DOM to finish loading before running the game

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

//     let images = document.getElementsByTagName("img");

// const gameCards = document.querySelectorAll('.game-card');

// console.log(gameCards);


// Selecting elements
const cards = document.querySelectorAll('.card');

const gameCards = document.querySelectorAll('.game-card');

// Clicking cards to flip over
[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});

(function shuffle() {
    gameCards.forEach(card => {
        let randomCards = Math.floor(Math.random() * 24);
        card.style.order = randomCards;
    });
})();

let firstCard;
let secondCard;

function runGame() {
    if (firstCard.dataset.character === secondCard.dataset.character) {
        firstCard.removeEventListener('click', 'flipcard');
        secondCard.removeEventListener('click', 'flipcard');
    } else {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    };
    return runGame;
}



// let cardIsFlipped = false;
// let firstCard;
// let secondCard;

// function flipCard() {
//     cards.classList.add('flip');

//     if (!cardIsFlipped) {
//         cardIsFlipped = true;
//         firstCard = cards;
//     } else {
//         cardIsFlipped = false;
//         secondCard = cards;
//     }
// };

// function cardsMatch() {
//     // check if cards match
//     if (firstCard.dataset.character ===
//         secondCard.dataset.character) {
//         // if the cards match
//         firstCard.removeEventListenter('click', flipCard);
//         secondCard.removeEventListenter('click', flipCard);
//         // if the cards do not match
//     } else {
//         setTimeout(() => {
//             firstCard.classList.remove('flip');
//             secondCard.classList.remove('flip');
//         }, 5000);
//     }
//     return cardsMatch;
// }