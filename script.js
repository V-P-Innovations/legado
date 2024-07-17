function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const reserveBtn = document.querySelector('.reserve-btn');
    navLinks.classList.toggle('active');
    reserveBtn.classList.toggle('active');
}
