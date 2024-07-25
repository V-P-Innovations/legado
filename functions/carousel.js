document.addEventListener('DOMContentLoaded', function() {
    var autoPlayToggle = document.getElementById('autoPlayToggle');
    var carouselElement = document.getElementById('carouselExample');
    var carousel = new bootstrap.Carousel(carouselElement, {
        interval: false // Desativar autoplay inicialmente
    });

    autoPlayToggle.addEventListener('change', function() {
        if (this.checked) {
            carousel.interval = 2000; // Define o intervalo de tempo
            carousel.cycle();
        } else {
            carousel.pause();
        }
    });

    $('#carouselExample').on('slide.bs.carousel', function (e) {
        var currentSlide = $(e.relatedTarget);
        var video = currentSlide.find('video').get(0);

        if (video) {
            video.play();
        } else {
            var videos = $(this).find('video');
            videos.each(function() {
                this.pause();
            });
        }
    });
});