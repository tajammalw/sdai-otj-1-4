// Created fadeIn function to fade in the html elements: 
// The food truck icon, quarterly menu, favorite section, and location and hours sections.

function fadeIn(element, increment, intervalTime) {
    let opacity = 0; // Initial opacity
    let interval = setInterval(function() {
        if (opacity < 1) {
            opacity += increment;
            element.style.opacity = opacity;
        } else {
            clearInterval(interval); // Stop the interval when opacity reaches 1
        }
    }, intervalTime);
 }
 
 // Elements to fade in with their respective increments
 fadeIn(document.querySelector('#home'), 0.007, 30);
 fadeIn(document.querySelector('#menu'), 0.007, 30);
 fadeIn(document.querySelector('#favorites'), 0.007, 30);
 fadeIn(document.querySelector('#location'), 0.007, 30);
 fadeIn(document.querySelector('#hours'), 0.007, 30);