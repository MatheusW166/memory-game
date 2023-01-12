import {
  cardsLength,
  flipCard,
  flippedCount,
  unFlipCard,
} from "../db/cards.js";
import { initGame } from "../init/initGame.js";

const POSSIBLEPAIR = [];

function flipElement(target, id, flip = true) {
  if (!target || id === undefined) return;
  if (!flip) {
    target.classList.remove("flipped");
    unFlipCard(id);
    return;
  }
  target.classList.add("flipped");
  flipCard(id);
}

function unFlipElements(cards) {
  setTimeout(() => {
    cards.forEach((e) => flipElement(e.element, e.card.id, false));
  }, 1000);
}

function addPair(card) {
  POSSIBLEPAIR.push(card);
  if (POSSIBLEPAIR.length < 2) return;
  if (!POSSIBLEPAIR[0].card.isPairOf(POSSIBLEPAIR[1].card)) {
    unFlipElements([...POSSIBLEPAIR]);
  }
  POSSIBLEPAIR.length = 0;

  if (isWinner()) {
    setTimeout(() => {
      alert("Parabéns, você venceu!");
      initGame(); // Restart game
    }, 1000);
  }
}

function isWinner() {
  return cardsLength() === flippedCount();
}

export { addPair, flipElement };
