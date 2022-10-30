export function parallaxHero() {
  const background = document.querySelector('.background')
  const foreground = document.querySelector('.foreground');

  window.addEventListener('scroll', () => {
    let value = window.scrollY;
    background.style.top = value * 0.75 + 'px';
    foreground.style.top = value * 0  + 'px';
  })
}