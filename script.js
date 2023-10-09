const modal = document.querySelector(".modal");
const newEntry = document.querySelector(".new");
const close = document.querySelector(".close");
const input = document.querySelector("input");
const container = document.querySelector(".container");
const myLibrary = [];

function Book(title, author, words, read) {
  this.title = title;
  this.author = author;
  this.words = words;
  this.read = read;
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
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
