// Wait for the DOM to finish loading before running the game

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

//     let images = document.getElementsByTagName("img");

// const gameCards = document.querySelectorAll('.game-card');

// console.log(gameCards);


const cards = document.querySelectorAll('.card');

[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});

function shuffleCards() {
    for (let i = 0; i < cards.length; i++) {
        const randomCards = Math.floor(Math.random() * cards.length);
        return randomCards;
    }
}