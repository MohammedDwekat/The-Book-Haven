let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navmenu");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = function () {
  let scrollButton = document.querySelector(".scroll-to-top");
  if (document.documentElement.scrollTop > 200) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
};

document.querySelectorAll(".status-icon").forEach(function (icon) {
  icon.addEventListener("click", function () {
    const productCard = this.closest(".product-card");
    const isReadable = productCard.getAttribute("data-readable") === "true";
    productCard.setAttribute("data-readable", !isReadable);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(".product-card");

  const showMoreContainer = document.querySelector(".show-more-container");

  if (productCards.length > 6) {
    productCards.forEach((card, index) => {
      if (index >= 6) {
        card.style.display = "none";
      }
    });

    showMoreContainer.style.display = "block";

    document
      .querySelector(".show-more-btn")
      .addEventListener("click", function () {
        productCards.forEach((card, index) => {
          if (index >= 6) {
            card.style.display = "block";
          }
        });

        showMoreContainer.style.display = "none";
      });
  } else {
    showMoreContainer.style.display = "none";
  }
});
