export function itemsOnHover() {
  document.querySelectorAll('.skills__icon').forEach((skill) => {
    skill.addEventListener('mouseover', () => {
      skill.classList.add('animate__animated', 'animate__bounce');
      skill.addEventListener('animationend', () => {
        skill.classList.remove('animate__animated', 'animate__bounce');
      });
    });
  });
}
