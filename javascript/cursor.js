export function cursor() {
  const cursor = document.querySelector('.cursor');
  const cursorInner = document.querySelector('.cursor__inner');
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
      cursorInner.style.display = 'none';
      cursorBorder.style.display = 'none';
      cursor.style.transform = 'scale(2)';
      cursor.style.animationName = 'borderAnim';
      cursor.style.mixBlendMode = 'difference';
    });
    anchor.addEventListener('mouseleave', () => {
      cursorInner.style.display = '';
      cursorBorder.style.display = 'block';
      cursor.style.transform = '';
      cursor.style.animationName = '';
      cursor.style.mixBlendMode = '';
    });
  });
}
