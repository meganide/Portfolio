import { showSidebar } from './hamburgerMenu.js';
import { typeAnimation } from './typeAnimation.js';
import { intersectionObserver } from './intersectionObserver.js';
import { parallaxProjects } from './parallaxProjects.js';
import { parallaxHero } from './parallaxHero.js';
import { cursor } from './cursor.js';
import './sendEmail.js';

function main() {
  cursor();
  showSidebar();
  typeAnimation();
  intersectionObserver();
  // parallaxProjects();
  parallaxHero();
  emailjs.init('o0DRfkiQeGWH3r1F5');
}

main();
