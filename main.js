let search = document.querySelector('.search-box ')

document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active')
    cart.classList.remove('active')
    user.classList.remove('active')
    navbar.classList.remove('active')
}

let cart = document.querySelector('.cart ')

document.querySelector('#cart-icon').onclick = () =>{
    cart.classList.toggle('active')
    search.classList.remove('active')
    user.classList.remove('active')
    navbar.classList.remove('active')
}

let user = document.querySelector('.user ')

document.querySelector('#user-icon').onclick = () =>{
    user.classList.toggle('active')
    search.classList.remove('active')
    cart.classList.remove('active')
    navbar.classList.remove('active')
}

let navbar = document.querySelector('.navbar ')

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active')
    search.classList.remove('active')
    cart.classList.remove('active')
    user.classList.remove('active')
}




// Function to open the edit profile form
function openForm() {
    document.getElementById("myPopup").style.display = "block";
}

// Function to close the edit profile form
function closeForm() {
    document.getElementById("myPopup").style.display = "none";
}

// Add event listener to the close icon
document.addEventListener('DOMContentLoaded', function() {
    const closeIcon = document.querySelector('.edit-profile .close .bx-window-close');
    if (closeIcon) {
        closeIcon.addEventListener('click', closeForm);
    }
});





window.onscroll = () => {
    search.classList.remove('active')
    cart.classList.remove('active')
    user.classList.remove('active')
    navbar.classList.remove('active')
}

let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
});



// Get the "Create One" button and the registration form
const createAccountButton = document.querySelector('#create-account');
const registerPage = document.querySelector('.register_page');

// Event listener for the "Create One" button
createAccountButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link behavior
    registerPage.classList.toggle('active'); // Toggle the visibility of the registration form
    user.classList.remove('active'); // Hide the login form if it's visible
});

// Close the registration form when clicking outside of it
document.addEventListener('click', (e) => {
    if (!registerPage.contains(e.target) && !createAccountButton.contains(e.target)) {
        registerPage.classList.remove('active');
    }
});






// JavaScript for Login Page

// Get the login form and its elements
const loginForm = document.querySelector('.user');
const emailInput = loginForm.querySelector('input[type="email"]');
const passwordInput = loginForm.querySelector('input[type="password"]');
const loginButton = loginForm.querySelector('.login-btn');

// Sample user data (for demonstration purposes)
const validUsers = [
    { email: "Tonibommisetty@gmail.com", password: "Ammalovesai@143" },
    { email: "Bommisettysainarasimha@gmail.com" ||"bommisettysainarasimha@gmail.com", password: "Ammalovesai" }
];

// Login button click event
loginButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate inputs
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Check if the user exists
    const user = validUsers.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful! Redirecting...");
        // Redirect to the user dashboard page
        window.location.href = "user.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }

    // Clear the form fields
    emailInput.value = "";
    passwordInput.value = "";
});