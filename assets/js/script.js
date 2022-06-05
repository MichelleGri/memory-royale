// Wait for the DOM to finish loading before running the game


document.addEventListener("DOMContentLoaded", function () {

// display game board
    const gameCards = document.querySelectorAll('.game-card');

// shuffle cards on game board
    (function shuffle() {
        gameCards.forEach(card => {
            let randomCards = Math.floor(Math.random() * gameCards.length);
            card.style.order = randomCards;
        });
    })();


})

//     let images = document.getElementsByTagName("img");




// Selecting elements

const cards = document.querySelectorAll('.card');

let firstCard;
let secondCard;
let cardIsFlipped = false;

// Clicking cards to flip over
[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});



function flipCard() {
    cards.classList.add('is-flipped');

    if (!cardIsFlipped) {
        cardIsFlipped = true;
        firstCard = cards;
    } else {
        cardIsFlipped = false;
        secondCard = cards;
    }
    return flipCard;
};

function checkMatch() {
    if (firstCard.dataset.character === secondCard.dataset.character) {
        firstCard.removeEventListener('click', 'is-flipped');
        secondCard.removeEventListener('click', 'is-flipped');
    } else {
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');
    };
    return checkMatch;
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