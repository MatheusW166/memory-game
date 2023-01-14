import { cardsLength, flipCard, unFlipCard } from "../db/cards.js";
import { initGame } from "../init/initGame.js";
import { askPlayerRestart } from "./setGame.js";
import { getTime, stopTimer } from "./timer.js";

const FORMEDPAIRS = [];
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
  if (POSSIBLEPAIR[0].card.isPairOf(POSSIBLEPAIR[1].card)) {
    hitAnimation([...POSSIBLEPAIR]);
    FORMEDPAIRS.push([...POSSIBLEPAIR]);
  } else {
    unFlipElements([...POSSIBLEPAIR]);
  }
  POSSIBLEPAIR.length = 0;

  if (isWinner()) {
    stopTimer();
    setTimeout(() => {
      alert(
        `Você ganhou em ${PLAYS} jogadas! A duração do jogo foi de ${getTime()} segundos!`
      );
      if (askPlayerRestart()) {
        initGame("Com quantas cartas quer jogar agora?");
      }
    }, 1200);
  }
}

function isWinner() {
  return cardsLength() / 2 === FORMEDPAIRS.length;
}

function resetGameRules() {
  PLAYS = 0;
  POSSIBLEPAIR.length = 0;
  FORMEDPAIRS.length = 0;
}

export { addPair, getPlays, flipElement, resetGameRules };
