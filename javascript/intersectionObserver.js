const pages = ['hero', 'skills', 'projects', 'contact'];

export function intersectionObserver() {
  var observer = new IntersectionObserver(
    function (entries) {
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap
      // Remove all active links
      if (entries[0].isIntersecting === true) {
        const activeLinkId = entries[0].target.id;
        document.querySelectorAll('.active-link').forEach((active) => {
          'active: ', active.classList.remove('active-link');
        });
        // Add new active links
        if (activeLinkId === 'contact') {
          document
            .querySelector('.mobile-' + activeLinkId)
            .classList.add('active-link');
        } else {
          document
            .querySelector('.desktop-' + activeLinkId)
            .classList.add('active-link');
          document
            .querySelector('.mobile-' + activeLinkId)
            .classList.add('active-link');
        }
      }
    },
    { threshold: [0.2] }
  );

  pages.forEach((page) => {
    const pageSection = document.querySelector('#' + page);
    if (pageSection) {
      observer.observe(pageSection);
    }
  });
}
