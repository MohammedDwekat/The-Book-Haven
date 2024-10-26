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
