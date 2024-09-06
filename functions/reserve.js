const buttons = document.querySelectorAll('.btn-success');

// Adicione o atributo href com o valor do link em cada botão
buttons.forEach(button => {
    button.href = 'https://api.whatsapp.com/send/?phone=5588981692600&text&type=phone_number&app_absent=0';
});