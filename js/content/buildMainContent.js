import { defineCards, askPlayerCards } from "../game/setGame.js";

function buildCardElement(card) {
  return `
  <div class="card-container">
    <div id=${card.id} class="card">
      <img src="img/back.png" alt="back-parrot" class="front">
      <img src="${card.img}" alt="${card.img.split("/").at(-1)}" class="back">
    </div>
  </div>
  `;
}

function buildCards() {
  const randomizedCards = defineCards(askPlayerCards());
  const container = document.querySelector(".cards");
  const content = randomizedCards.reduce(
    (prev, card) => prev + buildCardElement(card),
    ""
  );
  container.innerHTML = content;
}

export { buildCards };
