// For Navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Check if registration redirected with triggerLogin=true
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('triggerLogin') === 'true') {
        loginPopup.style.display = 'block';
    }
});

// For Login Popup Modal
const loginPopup = document.getElementById('login-popup');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', function() {
    loginPopup.style.display = 'block';
});

function closePopup() {
    loginPopup.style.display = 'none';
}

window.addEventListener('click', function(event) {
    if (event.target === loginPopup) {
        loginPopup.style.display = 'none';
    }
});

// Handle Login Submission
const loginForm = document.querySelector('#login-popup form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered credentials match any stored user
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Store the logged-in user in localStorage for session management
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // Redirect to the profile page
        window.location.href = 'pages/profile.html';
    } else {
        alert('Invalid email or password!');
    }
});
