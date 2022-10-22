const pages = ['hero', 'skills', 'projects', 'contact'];
let currentlyActiveLink = 'hero';

function isElementInViewport(element) {
  let rect = element.getBoundingClientRect();
  let isTopInViewPort = rect.top <= rect.height / 2;
  // check if element is completely visible inside the viewport
  return isTopInViewPort;
}

export function underlineLinkIfInViewport(ele) {
  const activeLinkDesktop = document.querySelector('.desktop-' + ele);
  const activeLinkMobile = document.querySelector('.mobile-' + ele);
  const section = document.querySelector('#' + ele);
  if (section && isElementInViewport(section) && ele !== currentlyActiveLink) {
    // Remove previous active link underline
    document
      .querySelector('.desktop-' + currentlyActiveLink)
      .classList.remove('active-link');
    document
      .querySelector('.mobile-' + currentlyActiveLink)
      .classList.remove('active-link');
    // Add new active link underline
    activeLinkDesktop.classList.add('active-link');
    activeLinkMobile.classList.add('active-link');
    // Update state
    currentlyActiveLink = ele;
  }
}

document.addEventListener('scroll', () => {
  pages.forEach((page) => {
    underlineLinkIfInViewport(page);
  });
});
