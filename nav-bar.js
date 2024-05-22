const menuItems = document.querySelectorAll("#menu li");

menuItems.forEach((item, index) => {
  item.addEventListener("mouseover", () => {
    item.style.fontSize = "20px";
    if (index > 0) {
      menuItems[index - 1].style.fontSize = "18px";
    }
    if (index < menuItems.length - 1) {
      menuItems[index + 1].style.fontSize = "18px";
    }
  });

  item.addEventListener("mouseout", () => {
    item.style.fontSize = "16px";
    if (index > 0) {
      menuItems[index - 1].style.fontSize = "16px";
    }
    if (index < menuItems.length - 1) {
      menuItems[index + 1].style.fontSize = "16px";
    }
  });
});
