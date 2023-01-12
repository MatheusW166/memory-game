import { getCardById } from "../db/cards.js";
import { addPair, flipElement } from "../game/gameRules.js";

function onClickCard(e) {
  const target = e.currentTarget.children[0];
  if (!target) return;

  const id = Number(target.id);
  const card = getCardById(id);

  if (card.flipped) return;
  flipElement(target, id, true);

  addPair({ card: card, element: target });
}

function defineCardClickEvent() {
  const cardContainerElements = document.querySelectorAll(".card-container");
  cardContainerElements.forEach((e) => (e.onclick = onClickCard));
}

export { defineCardClickEvent };
