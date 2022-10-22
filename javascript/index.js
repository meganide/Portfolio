import { showSidebar } from './hamburgerMenu.js';
import { underlineLinkIfInViewport } from "./sectionIsVisible.js";
import { typeAnimation } from './typeAnimation.js';




function main() {
  showSidebar();
  typeAnimation();
  underlineLinkIfInViewport()
}

main();
