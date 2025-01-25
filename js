function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

