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

    // código para enviar mensagem para o WhatsApp
    document.getElementById("enviar-mensagem").addEventListener("click", () => {
        const nome = document.getElementById("nome").value;
        const telefone = document.getElementById("telefone").value;
        const mensagem = document.getElementById("mensagem").value;

        const mensagemCompleta = `Olá, gostaria de solicitar uma cotação para ${nome} com o telefone ${telefone}. Minha mensagem é: ${mensagem}`;
        const phoneNumber = "+5585987445292"; // alterar para contato do cliente
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(mensagemCompleta)}`;
        window.open(url, "_blank");
    });
});