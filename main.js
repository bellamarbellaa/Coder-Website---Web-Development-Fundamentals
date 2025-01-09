// 1. Change header background on scroll
window.addEventListener("scroll", function() {
    let header = this.document.getElementById("header");
    if (window.scrollY > 100) {
        header.style.backgroundColor = "#979797"; // Dark background when scrolled down
    } else {
        header.style.backgroundColor = "transparent"; // Transparent when at the top
    }
    });

// 2. Only open the navigation menu when the button is clickedW
let navToggleButton = document.createElement("button"); // Create a button
let nav = document.querySelector("nav");
navToggleButton.innerText = "☰"; // Set the button text to '☰' (hamburger menu)
nav.prepend(navToggleButton); // Add the button at the start of the nav

navToggleButton.addEventListener("click", function() {
    nav.classList.add("open"); 
});

// 3. Handle form submission using DOM addEventListener
document.querySelector(".contact-details-form").addEventListener("submit", function (event) {
    //Prevent form submission for demonstration
    event.preventDefault();

    //Get form input values
    let name = document.getElementById("input-name").value;
    let service = document.getElementById("input-service").value;
    let email = document.getElementById("input-email").value;
    let message = document.getElementById("input-message").value;

    // Check if all fields are filled out or are there are empty fields
    if (name || service || email || message === "") {
        alert("Please fill out all the fields!");
    } else {
        alert("Thank you, " + name + ". We will get back to you soon" );
    }
});

//     // Check if all fields are filled out
//     if (name && service && email && message) {
//         alert('Thank you, ' + name + '! We will get back to you soon.');
//     } else {
//         alert('Please fill out all fields!');
//     }

