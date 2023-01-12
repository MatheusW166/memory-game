import { buildCards } from "../content/buildMainContent.js";
import { cleanCards } from "../db/cards.js";
import { resetAvailableImages } from "../db/images.js";
import { defineCardClickEvent } from "../events/onCardClick.js";

function initGame() {
  resetAvailableImages();
  cleanCards();
  buildCards();
  defineCardClickEvent();
}

export { initGame };
