const modal = document.querySelector(".modal");
const newEntry = document.querySelector(".new");
const body = document.querySelector("body");

newEntry.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Not working idk why
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
