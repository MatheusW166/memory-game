import {
  flipCard,
  unFlipCard,
  getCardById,
  flippedCount,
} from "../db/cards.js";

function flip(target, id, flip = true) {
  if (!flip) {
    target?.classList.remove("flipped");
    unFlipCard(id);
    return;
  }
  target.classList.add("flipped");
  flipCard(id);
}

const possiblePair = [];

function onClickCard(e) {
  const target = e.currentTarget.querySelector(".card");
  if (!target) return;
  const id = Number(target.id);
  const card = getCardById(id);
  if (card.flipped) return;

  flip(target, id, true);
  possiblePair.push(card);

  if (possiblePair.length < 2) return;

  if (possiblePair[0].pairId !== possiblePair[1].id) {
    const cp = [...possiblePair];
    console.log(cp);
    setTimeout(() => {
      cp.forEach((e) => flip(document.getElementById(e.id), e.id, false));
    }, 1000);
  }
  possiblePair.length = 0;
}

function defineCardClickEvent() {
  const cardContainerElements = document.querySelectorAll(".card-container");
  cardContainerElements.forEach((e) => (e.onclick = onClickCard));
}

export { defineCardClickEvent };
