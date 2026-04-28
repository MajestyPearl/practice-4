const btn = document.getElementById("shareBtn");
const menu = document.getElementById("shareMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// закриття при кліку поза меню
document.addEventListener("click", (e) => {
  if (!e.target.closest(".share-wrapper")) {
    menu.classList.remove("show");
  }
});