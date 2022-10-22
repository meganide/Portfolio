import { showSidebar } from './hamburgerMenu.js';
import { typeAnimation } from './typeAnimation.js';
import {intersectionObserver} from "./intersectionObserver.js"


function main() {
  showSidebar();
  typeAnimation();
  intersectionObserver()
}

main();
