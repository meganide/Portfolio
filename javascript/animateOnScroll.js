const animateTags = [
  'projects__heading',
  'skills__heading',
  'contact__heading',
];

export function animateOnScroll() {
  var observer = new IntersectionObserver(
    function (entries) {
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap
      // Remove all active links
      // console.log(entries);
      if (entries[0].isIntersecting === true) {
        const visibleTarget = entries[0].target;
        console.log(visibleTarget)
        if(visibleTarget.className.includes('skills__heading')) {
          visibleTarget.classList.add('animate__animated', 'animate__hinge')
          document.querySelector('.skills__heading2').classList.add('animate__animated', 'animate__rollIn', 'animate__delay-2s')
          document.querySelector('.skills__heading2').style.visibility = 'visible'
        } else if (visibleTarget.className.includes('contact__heading')) {
          visibleTarget.classList.add('animate__animated', 'animate__jackInTheBox')
        } else if (visibleTarget.className.includes('projects__heading')) {
          visibleTarget.classList.add('animate__animated', 'animate__zoomInDown')
        }
      }
    },
    { threshold: [0.1] }
  );

  animateTags.forEach((tag) => {
    observer.observe(document.querySelector('.' + tag));
  });
}
