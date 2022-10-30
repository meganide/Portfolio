import { showSidebar } from './hamburgerMenu.js';
import { typeAnimation } from './typeAnimation.js';
import {intersectionObserver} from "./intersectionObserver.js"
import {parallaxProjects} from "./parallaxProjects.js"
import { parallaxHero } from "./parallaxHero.js";

function main() {
  showSidebar();
  typeAnimation();
  intersectionObserver()
  parallaxProjects();
  parallaxHero()
}

main();
