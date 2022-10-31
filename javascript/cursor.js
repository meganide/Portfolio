export function cursor() {
  const cursor = document.querySelector('.cursor');
  const cursorBorder = document.querySelector('.cursor__border');
  const anchors = document.querySelectorAll('a');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.addEventListener('click', (e) => {
    cursor.classList.add('click');
    setTimeout(() => {
      cursor.classList.remove('click');
    }, 200);
  });

  anchors.forEach((anchor) => {
    anchor.addEventListener('mouseover', () => {
      cursorBorder.style.display = 'none';
      cursor.style.backgroundImage = 'none';
      cursor.style.transform = 'scale(2)';
      cursor.style.animationName = 'borderAnim';
      cursor.style.mixBlendMode = 'difference';
    });
    anchor.addEventListener('mouseleave', () => {
      cursorBorder.style.display = 'block';
      cursor.style.backgroundImage = 'url(../assets/images/cursor.png)';
      cursor.style.transform = '';
      cursor.style.animationName = '';
      cursor.style.mixBlendMode = '';
    });
  });
}
