const modal = document.querySelector(".modal");
const newEntry = document.querySelector(".new");
const close = document.querySelector(".close");
const form = document.querySelector(".form");
const container = document.querySelector(".container");
const submit = document.querySelector("#submit");
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

submit.addEventListener("click", () => {
  form.reset();
});

newEntry.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Not working idk why
window.onclick = function (event) {
  if (event.target == modal) {
    form.reset();
    modal.style.display = "none";
  }
};

for (i = 0; i < myLibrary.length; i++) {
  // container append title
  // container append author
  // container append wordcount
  // container append read
  // add classname to all child elements
  // format and style is similar to the modal design
}

close.addEventListener("click", () => {
  form.reset();
  modal.style.display = "none";
});
