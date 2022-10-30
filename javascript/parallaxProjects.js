const laptops = document.querySelectorAll('.projects__laptop-mockup');
const yourProjects = document.querySelectorAll('.phone--your-project');
const engineers = document.querySelector('.phone--engineers');


export function parallaxProjects() {
  window.addEventListener('scroll', () => {
    let offsetY = window.scrollY;
    laptops[0].style.transform = `translateX(calc(120vh - ${offsetY}px))`;
    laptops[1].style.transform = `translateX(calc(-220vh + ${offsetY}px))`;
    engineers.style.transform = `translateX(calc(320vh - ${offsetY}px))`;
    yourProjects[0].style.transform = `translateX(calc(-410vh + ${offsetY}px))`;
    yourProjects[1].style.transform = `translateX(calc(-410vh + ${offsetY}px))`;
    
  });
}
