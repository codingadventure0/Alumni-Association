function loadBoilerplate() {
    fetch('boilerplate.html')
        .then(response => response.text())
        .then(html => {
            // Insert the HTML at the beginning of the body without overwriting existing content
            document.body.insertAdjacentHTML('afterbegin', html);

            // Initialize the event listeners after the HTML has been inserted
            initializeNavbar();
        })
        .catch(error => console.error('Error loading boilerplate:', error));
}

// This function initializes the navbar events again
function initializeNavbar() {
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

    // Mark current page as active
    const currentPage = window.location.pathname.split("/").pop();
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', loadBoilerplate);
