document.getElementById('layout').innerHTML = `
    <header>
        <img src="assets/images/logo.png" alt="Fabio Bosio Logo" class="logo">
        <h1>Hi, I'm Fabio Bosio</h1>
        <p>Developer Consultant | Creating Scalable, Innovative, and Robust Solutions</p>
    </header>
    <nav>
        <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
`;

// Highlight the active nav link
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
