import { buildCards } from "../content/buildMainContent.js";
import { defineCardClickEvent } from "../events/onCardClick.js";
import { resetAll } from "./resetAll.js";

function initGame(message) {
  resetAll();
  buildCards(message);
  defineCardClickEvent();
}

export { initGame };
