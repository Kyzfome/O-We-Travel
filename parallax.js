const firstMain = document.querySelector(".first-main");

function moveElement() {
  const scrollValue = window.scrollY;
  firstMain.style.transform = `translateY(${scrollValue * -0.5}px)`;
}

window.addEventListener("scroll", moveElement);
