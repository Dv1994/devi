document.addEventListener("click", function (event) {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (dropdownToggle.contains(event.target)) {
    dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
  } else {
    dropdownMenu.style.display = "none";
  }
});
window.addEventListener('DOMContentLoaded', () => {
  const productsList = document.querySelector('.products-list');
  const productItems = productsList.querySelectorAll('.product-item');

  function handleResponsiveLayout() {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 600;

    // Show only the first product item, hide the rest
    productItems.forEach((item, index) => {
      if (index === 0 || !isMobile) {
        item.classList.remove('hide-on-mobile');
      } else {
        item.classList.add('hide-on-mobile');
      }
    });
  }

  // Initial setup
  handleResponsiveLayout();

  // Update layout on window resize
  window.addEventListener('resize', handleResponsiveLayout);
});
