import { showSidebar } from './hamburgerMenu.js';
import { typeAnimation } from './typeAnimation.js';
import {intersectionObserver} from "./intersectionObserver.js"
import {parallax} from "./parallax.js"
import { animateOnScroll } from "./animateOnScroll.js";
import { itemsOnHover } from "./skillIconsOnHover.js";
import { animatePlanetsWhenVisible } from "./animatePlanetsCircle.js";

function main() {
  showSidebar();
  typeAnimation();
  intersectionObserver()
  parallax();
  animateOnScroll()
  itemsOnHover()
  animatePlanetsWhenVisible();
}

main();
