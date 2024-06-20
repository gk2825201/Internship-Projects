// let navbar = document.querySelector('.navbar');

// document.querySelector('#menu-btn').onclick = () =>{
//     navbar.classList.toggle('active');

// }

// let searchForm= document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = () =>{
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// window.onscroll = () =>{
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
// } 

let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let cartItem = document.querySelector('.cart-items-container');

// Function to handle menu button click
document.querySelector('#menu-btn').addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Function to handle search button click
document.querySelector('#search-btn').addEventListener('click', () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
});

// Function to handle cart button click
document.querySelector('#cart-btn').addEventListener('click', () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
});

// Function to handle window resizing
window.addEventListener('resize', () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
});

// Function to handle touch events
window.addEventListener('touchstart', () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
});
