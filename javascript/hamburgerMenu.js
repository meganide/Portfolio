export function showSidebar() {
  const sidebar = document.querySelector('.sidebar-mobile');
  const sidebarItems = document.querySelectorAll('.sidebar-mobile__item');
  const hamburger = document.querySelector('.nav__hamburger');
  const hamburgerIcon = document.querySelector('.nav__hamburger-icon');
  const closeIcon = document.querySelector('.nav__hamburger-close');
  const navbarMobile = document.querySelector('.nav__mobile');

  // Open & close sidebar on hamburger icon click
  function toggleMenu() {
    if (sidebar.classList.contains('show-sidebar')) {
      navbarMobile.style.background = "transparent"
      sidebar.classList.remove('show-sidebar');
      closeIcon.style.display = 'none';
      hamburgerIcon.style.display = 'block';
    } else {
      navbarMobile.style.background = "#0D0514"
      sidebar.classList.add('show-sidebar');
      closeIcon.style.display = 'block';
      hamburgerIcon.style.display = 'none';
    }
  }

  // Close sidebar on clicks outside of sidebar
  function closeSideBarOnClickOutside(e) {
    if (
      !e.target.classList.contains('sidebar-mobile') &&
      sidebar.classList.contains('show-sidebar') &&
      !e.target.classList.contains('nav__hamburger-icon')
    ) {
      toggleMenu();
    }
  }

  hamburger.addEventListener('click', toggleMenu);

  // Close sidebar when user clicks on link in sidebar
  sidebarItems.forEach((item) => {
    item.addEventListener('click', toggleMenu);
  });

  document.addEventListener('click', (event) =>
    closeSideBarOnClickOutside(event)
  );
}
