// boilerplate.js
function loadBoilerplate() {
    fetch('boilerplate.html')
        .then(response => response.text())
        .then(html => {
            document.body.innerHTML = html + document.body.innerHTML;

            // Manually re-initialize the event listeners after inserting HTML
            initializeNavbar();
        });
}

// This function initializes the navbar events again
function initializeNavbar() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li a');

    // Hamburger menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Link activation for clicked link
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mark current page as active
    const currentPage = window.location.pathname.split("/").pop();
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}
