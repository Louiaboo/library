const modal = document.querySelector(".modal");
const newEntry = document.querySelector(".new");
const close = document.querySelector(".close");
const form = document.querySelector(".form");
const container = document.querySelector(".container");
const submit = document.querySelector("#submit");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const wordcount = document.querySelector("#wordcount");
const readStatus = document.querySelector(".toggle");
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
  let newBook = new Book(
    title.textContent,
    author.textContent,
    wordcount.textContent,
    readStatus.checked,
  );
  addBookToLibrary(newBook);
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

for (let i = 0; i < myLibrary.length; i++) {
  let temp;
  temp = container.appendChild("div");
  temp.classList.add("card");
  for (let j = 0; j < 4; j++) {
    let temp2;
    switch (j) {
      case 0:
        temp2.innerHTML = myLibrary[i].title;
        break;
      case 1:
        temp2.innerHTML = myLibrary[i].author;
        break;
      case 2:
        temp2.innerHTML = myLibrary[i].wordcount;
        break;
      case 3:
        let newSwitch;
        let newToggle;
        let newSlider;
        newSwitch = temp2.appendChild("label");
        newSwitch.classList.add("switch");
        newToggle = temp2.appendChild("input");
        newToggle.setAttribute("type", "checkbox");
        newToggle.classList.add("toggle");
        newSlider = temp2.appendChild("span");
        newSlider.classList.add("slider");
        break;
    }
  }
}

close.addEventListener("click", () => {
  form.reset();
  modal.style.display = "none";
});
