const modal = document.querySelector(".modal");
const newEntry = document.querySelector(".new");

newEntry.addEventListener("click", () => {
  modal.style.display = "block";
});

window.addEventListener("click", () => {
  modal.style.display = "none";
});
