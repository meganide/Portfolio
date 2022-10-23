const pages = ['hero', 'skills', 'projects', 'contact'];

export function intersectionObserver() {
  var observer = new IntersectionObserver(
    function (entries) {
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap
      // Remove all active links
      console.log(entries)
      if (entries[0].isIntersecting === true) {
        const activeLinkId = entries[0].target.id;
        document.querySelectorAll('.active-link').forEach((active) => {
          'active: ', active.classList.remove('active-link');
        });
        // Add new active links
        console.log(activeLinkId)
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
    { threshold: [0.3] }
  );

  pages.forEach((page) => {
    const pageSection = document.querySelector('#' + page);
    if (pageSection) {
      observer.observe(pageSection);
    }
  });
}
