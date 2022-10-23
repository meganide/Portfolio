import { showSidebar } from './hamburgerMenu.js';
import { typeAnimation } from './typeAnimation.js';
import {intersectionObserver} from "./intersectionObserver.js"
import {parallax} from "./parallax.js"

function main() {
  showSidebar();
  typeAnimation();
  intersectionObserver()
  parallax();
}

main();
