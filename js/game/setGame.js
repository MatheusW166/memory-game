import { addCard, getRandomizedCards } from "../db/cards.js";
import { getRandomImg } from "../db/images.js";

const CARDSLIMIT = 14;

function isNumberOfCardsValid(number, limit = CARDSLIMIT) {
  const n = Number(number);
  return !isNaN(n) && n >= 4 && n % 2 === 0 && n <= limit;
}

function askPlayerCards(message = "Com quantas cartas quer jogar?") {
  let numberOfCards;
  let count = 0;
  while (!isNumberOfCardsValid(numberOfCards)) {
    if (count > 0) message = `Escolha de 4 à ${CARDSLIMIT} cartas.`;
    numberOfCards = prompt(message);
    count++;
  }
  return Number(numberOfCards);
}

function isAnswerValid(answer) {
  return answer === "sim" || answer === "não";
}

function askPlayerRestart(
  message = 'Deseja reiniciar o jogo? (escreva "sim" ou "não")'
) {
  let answer;
  while (!isAnswerValid(answer)) {
    answer = prompt(message)?.trim();
  }
  return answer === "sim";
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

export { defineCards, askPlayerCards, askPlayerRestart };
