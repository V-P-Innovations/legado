// JavaScript para Paginação
const cardContainer = document.getElementById('card-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const cardsPerPage = 6; // Número de cards por página
let currentPage = 1;

function displayCards(cards) {
    const start = (currentPage - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const paginatedCards = cards.slice(start, end);

    cardContainer.innerHTML = paginatedCards.map(card => `
        <div class="card">
            <img src="${card.img}" class="card-img-top" alt="${card.title}">
            <div class="card-body">
                <h3>${card.title}</h3>
                <p>${card.description}</p>
                <a href="${card.link}">Saiba Mais</a>
            </div>
        </div>
    `).join('');

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = end >= cards.length;
}

// Exemplo de dados dos cards
const cards = [
    // Adicione aqui os objetos dos seus cards
    { img: 'path/to/img1.jpg', title: 'Card 1', description: 'Descrição do Card 1', link: '#' },
    { img: 'path/to/img2.jpg', title: 'Card 2', description: 'Descrição do Card 2', link: '#' },
    // Adicione mais cards conforme necessário
];

displayCards(cards);

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayCards(cards);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage * cardsPerPage < cards.length) {
        currentPage++;
        displayCards(cards);
    }
});
