class Card {
  constructor({ id, pairId, img }) {
    this.id = id;
    this.pairId = pairId;
    this.img = img;
    this.flipped = false;
  }

  flipCard() {
    this.flipped = !this.flipped;
  }
}

const CARDS = [];

function getRandomizedCards() {
  if (CARDS.length === 0) return [];
  const arr = [...CARDS];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function addCard(card) {
  if (!card) return;
  CARDS.push(new Card({ ...card }));
}

function flipCard(id) {
  CARDS.filter((card) => card.id === id)[0]?.flipCard();
}

export { flipCard, addCard, getRandomizedCards };
