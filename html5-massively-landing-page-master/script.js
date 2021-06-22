
// Selecting the html elemnts

const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.span');
const nav = document.querySelector('.nav');

// Applying javascript function


menu.addEventListener('click', function(){
    nav.style.display = "block";
});

close.addEventListener('click', function() {
    nav.style.display = "none";
})