import { showSidebar } from './hamburgerMenu.js';
import { typeAnimation } from './typeAnimation.js';
import { intersectionObserver } from './intersectionObserver.js';
import { parallaxHero } from './parallaxHero.js';
import { cursor } from './cursor.js';
import './sendEmail.js';
import './animations.js';

function main() {
  cursor();
  showSidebar();
  typeAnimation();
  intersectionObserver();
  parallaxHero();
  emailjs.init('o0DRfkiQeGWH3r1F5');
}

main();
