const laptops = document.querySelectorAll('.projects__laptop-mockup');


export function parallax() {
  window.addEventListener('scroll', () => {
    let offsetY = window.scrollY;
    laptops[0].style.transform = `translateX(calc(120vh - ${offsetY}px))`;
    laptops[1].style.transform = `translateX(calc(-200vh + ${offsetY}px))`;
    // laptops[2].style.transform = `translateX(calc(290vh - ${offsetY}px))`;
  });
}
