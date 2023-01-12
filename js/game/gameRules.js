import {
  cardsLength,
  flipCard,
  flippedCount,
  unFlipCard,
} from "../db/cards.js";
import { initGame } from "../init/initGame.js";
import { askPlayerRestart } from "./setGame.js";

const POSSIBLEPAIR = [];
let PLAYS = 0;

function getPlays() {
  return PLAYS;
}

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

function hitAnimation(cards) {
  setTimeout(() => {
    cards.forEach((e) => {
      e.element.classList.add("hit");
    });
  }, 600);
}

function addPair(card) {
  PLAYS++;
  POSSIBLEPAIR.push(card);
  if (POSSIBLEPAIR.length < 2) return;
  if (!POSSIBLEPAIR[0].card.isPairOf(POSSIBLEPAIR[1].card)) {
    unFlipElements([...POSSIBLEPAIR]);
  } else {
    hitAnimation([...POSSIBLEPAIR]);
  }
  POSSIBLEPAIR.length = 0;

  if (isWinner()) {
    setTimeout(() => {
      alert(`Você ganhou em ${PLAYS} jogadas!`);
      if (askPlayerRestart()) {
        initGame("Com quantas cartas quer jogar agora?");
      }
    }, 1200);
  }
}

function isWinner() {
  return cardsLength() === flippedCount();
}

function resetGameRules() {
  PLAYS = 0;
  POSSIBLEPAIR.length = 0;
}

export { addPair, getPlays, flipElement, resetGameRules };
