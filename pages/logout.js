document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'logout') {
        event.preventDefault();
        localStorage.removeItem('loggedInUser');
        window.location.href = '/index.html';
    }
});
