const modal = document.querySelector(".modal");
const newEntry = document.querySelector(".new");
const body = document.querySelector("body");
const close = document.querySelector(".close");
const input = document.querySelector("input");
const myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

newEntry.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Not working idk why
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

close.addEventListener("click", () => {
  modal.style.display = "none";
});
