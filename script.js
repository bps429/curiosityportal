// Array com frases aleatórias do universo Rick and Morty
const quotes = [
    "Wubba Lubba Dub-Dub!",
    "Existence is pain!",
    "I'm Mr. Meeseeks, look at me!",
    "Pickle Rick!",
    "Nobody exists on purpose, nobody belongs anywhere, everybody's gonna die. Come watch TV."
];

// Função para gerar uma frase aleatória
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('randomQuote').textContent = randomQuote;
}



// Adiciona evento ao botão
document.getElementById('randomQuoteButton').addEventListener('click', generateRandomQuote);
