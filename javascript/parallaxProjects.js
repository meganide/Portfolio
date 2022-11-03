const laptops = document.querySelectorAll('.projects__laptop-mockup');



export function parallaxProjects() {
  window.addEventListener('scroll', () => {
    let offsetY = window.scrollY;
    laptops[0].style.transform = `translateX(calc(120vh - ${offsetY}px))`;
    laptops[1].style.transform = `translateX(calc(-220vh + ${offsetY}px))`;
    laptops[2].style.transform = `translateX(calc(+310vh - ${offsetY}px))`;
    laptops[3].style.transform = `translateX(calc(-410vh + ${offsetY}px))`;    
  });
}
