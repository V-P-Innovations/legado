 // código para enviar mensagem para o WhatsApp
 document.getElementById("enviar-mensagem").addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    // Mensagem personalizada incluindo nome, telefone e mensagem do usuário
    const mensagemCompleta = `Olá, meu nome é ${nome} e meu telefone é ${telefone}. Gostaria de uma cotação para Valderi Jeri. Minha mensagem é: ${mensagem}`;
    
    // Número de telefone de destino no formato internacional
    const phoneNumber = "+5585987445292"; // Substitua este número pelo número de destino
    
    // Criação da URL do WhatsApp com a mensagem codificada
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(mensagemCompleta)}`;
    
    console.log("URL gerada:", url); // Adicione esta linha para verificar a URL gerada
    
    // Abrir a URL em uma nova aba
    window.open(url, "_blank");
});