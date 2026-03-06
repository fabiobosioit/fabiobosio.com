const splash = document.getElementById('splash');
const page = document.getElementById('page');

splash.querySelector('img').addEventListener('animationend', () => {
    splash.style.display = 'none';
    page.classList.add('visible');
});
