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