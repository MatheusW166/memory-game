import { defineCards, askPlayerCards } from "../game/setGame.js";

const cardsList = document.querySelector(".cards");

function buildCardElement(card) {
  return `
  <div class="card-container">
    <div class="card">
      <img src="img/back.png" alt="back-parrot" class="front">
      <img src="${card.img}" alt="${card.img.split("/").at(-1)}" class="back">
    </div>
  </div>
  `;
}

function buildCards() {
  const randomizedCards = defineCards(14);
  const content = randomizedCards.reduce(
    (prev, card) => prev + buildCardElement(card),
    ""
  );
  cardsList.innerHTML = content;
}

export { buildCards };
