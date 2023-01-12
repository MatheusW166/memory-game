import { buildCards } from "../content/buildMainContent.js";
import { defineCardClickEvent } from "../events/onCardClick.js";
import { resetAll } from "./resetAll.js";
import { startTimer } from "../game/timer.js";

function initGame(message) {
  resetAll();
  buildCards(message);
  defineCardClickEvent();
  startTimer();
}

export { initGame };
