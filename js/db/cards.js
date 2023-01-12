class Card {
  constructor({ id, pairId, img }) {
    this.id = id;
    this.pairId = pairId;
    this.img = img;
    this.flipped = false;
  }

  flipCard = () => (this.flipped = true);

  unFlipCard = () => (this.flipped = false);

  isPairOf = (card) => this.pairId === card.id;
}

const CARDS = [];

function cardsLength() {
  return CARDS.length;
}

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

function getCardById(id) {
  return { ...CARDS.filter((card) => card.id === Number(id))[0] };
}

function flipCard(id) {
  CARDS.filter((card) => card.id === Number(id))[0]?.flipCard();
}

function unFlipCard(id) {
  CARDS.filter((card) => card.id === Number(id))[0]?.unFlipCard();
}

function flippedCount() {
  return CARDS.reduce((prev, curr) => (curr.flipped ? prev + 1 : prev), 0);
}

export {
  flipCard,
  unFlipCard,
  flippedCount,
  addCard,
  getCardById,
  getRandomizedCards,
  cardsLength,
};
