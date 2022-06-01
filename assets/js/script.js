// 'use strict';

// Wait for the DOM to finish loading before running the Gamepad

// document.addEventListener("DOMContentLoaded", function () {
//     let buttons = document.getElementsByTagName("button");

//     let images = document.getElementsByTagName("img");

//     for (let images of images) {
//         images.addEventListener("click", function () {
//             if (this.getAttribute("data-type") === "img") {
//                 alert("You clicked on an Image!");
//                 else
//             }
//         })
//     }
// })



// const cardsArray = [
//     document.getElementsByClassName('game-card')
// ]
// console.log(cardsArray);

const cardsArray = [];

cardsArray.push('assets/images/augustin.jpeg');
cardsArray.push('assets/images/alma.jpeg');
cardsArray.push('assets/images/antonio.jpeg');
cardsArray.push('assets/images/bruno.jpeg');

// console.log(cardsArray);

const randomCards = cardsArray[Math.floor(Math.random() * cardsArray.length)];

console.log(randomCards);


// for (let i = 0; i < cardsArray.length; i++) {
//     console.log(cardsArray);
// }



function runGame() {

}

function score() {

}

function highScore() {

}

function checkMatch() {

}


function correctMatch() {

}

function wrongMatch() {

}