// 1. Change header background on scroll
window.onscroll = function() {
    let header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#333';  // Dark background when scrolled down
    } else {
        header.style.backgroundColor = 'transparent';  // Transparent when at the top
    }
};

// 2. Toggle the navigation menu on small screens
let navToggleButton = document.createElement('button'); // Create a button
navToggleButton.innerText = '☰'; // Set the button text to '☰' (hamburger menu)
document.querySelector('nav').prepend(navToggleButton); // Add the button at the start of the nav

// Toggle the nav menu when the button is clicked
navToggleButton.onclick = function() {
    let nav = document.querySelector('nav');
    nav.classList.toggle('open');  // Add or remove 'open' class to show/hide the menu
};

// 3. Handle form submission (just for demonstration)
let form = document.querySelector('.contact-details-form'); // Get the contact form
form.onsubmit = function(event) {
    event.preventDefault();  // Prevent form submission for now

    // Get form input values
    let name = document.getElementById('input-name').value;
    let service = document.getElementById('input-service').value;
    let email = document.getElementById('input-email').value;
    let message = document.getElementById('input-message').value;

    // Check if all fields are filled out
    if (name && service && email && message) {
        alert('Thank you, ' + name + '! We will get back to you soon.');
    } else {
        alert('Please fill out all fields!');
    }
};

