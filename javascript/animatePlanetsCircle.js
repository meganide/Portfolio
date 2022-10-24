const sections = ['planets-circle-wrap'];

export function animatePlanetsWhenVisible() {
  var observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        const activeLinkId = entries[0].target.id;

        if (activeLinkId === 'planets-circle-wrap') {
          const planetCirclewrap = document.querySelector('#' + activeLinkId);
          planetCirclewrap.classList.add(
            'animate__animated',
            'animate__zoomIn',
            'animate__delay-1s'
          );
          planetCirclewrap.style.visibility = 'visible';
        }
      }
    },
    { threshold: [0.15] }
  );
  sections.forEach((section) => {
    const sectionToAnimate = document.querySelector('#' + section);
    observer.observe(sectionToAnimate);
  });
}
