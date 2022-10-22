const pages = ['hero', 'skills', 'projects', 'contact'];

function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  let isTopInViewPort = rect.top <= rect.height / 2


  // check if element is completely visible inside the viewport
  return isTopInViewPort;

}

export function underlineLinkIfInViewport(ele) {
  const linkDesktop = document.querySelector('.desktop-' + ele);
  const linkMobile = document.querySelector('.mobile-' + ele);
  const section = document.querySelector('#' + ele);
  if (section) {
    if (isElementInViewport(section)) {
      pages.forEach((page) => {
        const desktopLink = document.querySelector('.desktop-' + page);
        const mobileLink = document.querySelector('.mobile-' + page);
        if (desktopLink) {
          desktopLink.classList.remove('active-link');
        }
        if (mobileLink) {
          mobileLink.classList.remove('active-link');
        }
      });
      linkDesktop.classList.add('active-link');
      linkMobile.classList.add('active-link');
      
    }
  }
}

document.addEventListener('scroll', () => {
  pages.forEach((page) => {
    underlineLinkIfInViewport(page);
  });
});
