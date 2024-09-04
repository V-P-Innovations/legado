document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var homeSection = document.getElementById('home');
    var homeSectionHeight = homeSection.offsetHeight;

    function handleScroll() {
        if (window.scrollY > homeSectionHeight) {
            navbar.classList.add('fixed-top');
            homeSection.classList.add('home-fixed');
            homeSection.classList.remove('home-no-fixed');
        } else {
            navbar.classList.remove('fixed-top');
            homeSection.classList.remove('home-fixed');
            homeSection.classList.add('home-no-fixed');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Inicializa o estado correto da navbar e da seção no carregamento da página
});