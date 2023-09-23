const modal = document.querySelector(".modal");
const newEntry = document.querySelector(".new");

newEntry.addEventListener("click", () => {
  modal.style.display = "block";
});

// Not working idk why
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
