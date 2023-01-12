import { resetCards } from "../db/cards.js";
import { resetImages } from "../db/images.js";
import { resetGameRules } from "../game/gameRules.js";
import { resetTimer } from "../game/timer.js";

// Reset all global variables
function resetAll() {
  resetGameRules();
  resetImages();
  resetCards();
  resetTimer();
}

export { resetAll };
