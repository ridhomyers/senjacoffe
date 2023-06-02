const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchBTN = document.querySelector("#search-btn");
const shoppingCartBTN = document.querySelector("#shopping-cart");
const shoppingCart = document.querySelector(".shopping-cart");
const itemModal = document.querySelector("#detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

hamburgerMenu.onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchForm.contains(e.target) && !searchBTN.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shoppingCart.contains(e.target) && !shoppingCartBTN.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

searchBTN.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

shoppingCartBTN.onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

document.querySelector(".close-icon").onclick = (e) => {
  itemModal.style.display = "none";
  e.preventDefault();
};

window.onclick = (e) => {
  if (e.target === itemModal) {
    itemModal.style.display = "none";
    e.preventDefault();
  }
};

itemDetailButton.forEach((btn) => {
  btn.onclick = (e) => {
    itemModal.style.display = "flex";
    e.preventDefault();
  };
});
