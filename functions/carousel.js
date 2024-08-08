$(document).ready(function() {
    var $carousel = $('#carouselExampleIndicators');
    var autoplay = true;

    // Inicializa o carrossel com autoplay
    $carousel.carousel({
        interval: 7000 // Tempo de intervalo do autoplay em milissegundos
    });

    $('#autoplaySlider').on('input', function() {
        autoplay = $(this).is(':checked');
        if (autoplay) {
            $carousel.carousel({
                interval: 7000
            });
            $('#sliderLabel').text('Play');
        } else {
            $carousel.carousel('pause');
            $('#sliderLabel').text('Pause');
        }
    });

    $carousel.on('slide.bs.carousel', function (event) {
        // Pause all videos in the carousel
        $(this).find('video').each(function () {
            this.pause();
            this.currentTime = 0; // Opcional: resetar o vídeo para o início
        });
    });

    $carousel.on('slid.bs.carousel', function (event) {
        var activeIndex = $(event.relatedTarget).index();
        var $videoSlide = $(this).find('.carousel-item').eq(activeIndex).find('video');

        if ($videoSlide.length > 0) {
            $videoSlide.get(0).play();
        }
    });
});
