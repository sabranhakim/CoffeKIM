// toggle class active

const navbar = document.querySelector('.navbar-nav');

//ketika hamburger menu diklik 
document.querySelector('#hamburger-menu').
onclick = () => {
    navbar.classList.toggle('active');
};

// klik di luar sidebar untuk keluar dari navbar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});

