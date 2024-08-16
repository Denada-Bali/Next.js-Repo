document.addEventListener("DOMContentLoaded", function() {
    fetch('/include/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });

    fetch('/include/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});


function changeTheme() {
    const body = document.querySelector('body');
    const button = document.querySelector('button');

    if (body.classList.contains('dark')) {
        button.innerText = '🌙';
        body.classList.remove('dark')
    } else {
        button.innerText = '☀️';
        body.classList.add('dark')
    }
}