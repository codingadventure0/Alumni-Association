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
})

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