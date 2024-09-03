//Created fadeIn function to fade in: The food truck icon, Dev Dish's quarterly menu, Developer's Favorites section and images, and Location and Hours section.
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

 // Applied fadeIn function to the elements. Elements to fade in with their respective increments/delays.
fadeIn(document.querySelector('#home'), 0.005, 10);
fadeIn(document.querySelector('#menu'), 0.005, 10);
fadeIn(document.querySelector('#favorites'), 0.005, 10);
fadeIn(document.querySelector('#location'), 0.005, 10);
fadeIn(document.querySelector('#hours'), 0.005, 10);