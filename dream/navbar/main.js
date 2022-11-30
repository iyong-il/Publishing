const toggleButton = document.querySelector(".navbar__toggleButton");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

// menu, icons의 active toggle() 메서드
toggleButton.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});
