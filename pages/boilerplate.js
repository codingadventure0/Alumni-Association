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
    const navUl = document.querySelector('nav ul');

    // Log the elements to see if they are being selected correctly
    console.log(menuToggle, navUl);

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
