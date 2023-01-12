import { addCard, getRandomizedCards } from "../db/cards.js";
import { getRandomImg } from "../db/images.js";

function isNumberOfCardsValid(number, limit = 14) {
  const n = Number(number);
  return n && n > 0 && n % 2 === 0 && n <= limit;
}

function askPlayerCards(message = "Com quantas cartas quer jogar?") {
  let numberOfCards;
  while (!isNumberOfCardsValid(numberOfCards)) {
    numberOfCards = prompt(message);
  }
  return Number(numberOfCards);
}

function defineCards(n) {
  let img;
  for (let i = 0; i < n; i += 2) {
    img = getRandomImg();
    addCard({
      id: i,
      pairId: i + 1,
      img: img,
    });
    addCard({
      id: i + 1,
      pairId: i,
      img: img,
    });
  }
  return getRandomizedCards();
}

export { defineCards, askPlayerCards };
