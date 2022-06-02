// Wait for the DOM to finish loading before running the game

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

//     let images = document.getElementsByTagName("img");

// const gameCards = document.querySelectorAll('.game-card');

// console.log(gameCards);

// const flipCard = function () {
//     document.querySelectorAll('.game-card').addEventListener('click')
// }

// function runGame() {
// }

// function score() {
// }

// function highScore() {
// }

// function checkMatch() {
// }

// function correctMatch() {
// }

// function wrongMatch() {
// }

// document.addEventListener('DOMContentLoaded', function () {
//     gameBoard(game - area, gameCards);
//     suffleCards();
//     play.addEventListener('click', replay);
// })

// const gameCards = document.getElementsByClassName('front-card');

// const randomCards = function (gameCards) {

//     for (let i = 0; i < gameCards.length; i++) {

//         gameCards[Math.floor(Math.random() * gameCards.length)];

//     }
// }

const cards = document.querySelectorAll('.card');

[...cards].forEach((card) => {
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });
});