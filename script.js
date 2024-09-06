/**** My library array ****/

const myLibrary = [];


/**** Body styles ****/

const body = document.body;
body.style.backgroundColor = "darkturquoise";

/**** "ADD NEW BOOK" button ****/

addNewBookButton = document.querySelector('#addNewBookButton');
addNewBookButton.addEventListener('click', () => {
  createForm();
});

/**** Book constructor function ****/

function Book(title, releaseDate, author, pages, status) {
  this.title = title;
  this.releaseDate = releaseDate;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

/**** isBookRead method that changes the read/unread status ****/

Book.prototype.isBookRead = function(checkbox) {
  if (checkbox.checked) {
 checkbox.value = "read";
} else {
checkbox.value = "not read";
}
};

/**** Wrapper div for displaying book cards ****/

const wrapper = document.querySelector('.wrapper');
   wrapper.style.display = "grid";
   wrapper.style.gridTemplateColumns = "repeat(auto-fit, 220px)";
   wrapper.style.gridTemplateRows = "repeat(auto, min-content)";
   wrapper.style.alignItems = "start";
   wrapper.style.gap = "10px";

   /**** Functions for creating various elements ****/

function createCard() {
  const card = document.createElement('div');
  card.style.marginBottom = "10px";
  card.style.padding = "10px";
  card.style.backgroundColor = "deepskyblue";
  card.style.border = "8px solid whitesmoke";
  card.style.borderRadius = "20px";
  return card;
}

function createKeyValuePairParagraph(keyValuePair) {
  const p = document.createElement('p');
  p.innerText = keyValuePair;
  p.style.fontWeight = "bold";
  p.style.textDecoration = "underline red 3px";
  p.style.textUnderlineOffset = "5px";
  return p;
}

function createButton(buttonText) {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.classList.add('deleteButton');
  button.innerText = buttonText;
  return button;
}

 function createCheckbox() {
   const checkboxDivWrapper = document.createElement('div');
  const bookReadCheckLabel = document.createElement('label');
  bookReadCheckLabel.innerText = "READ";
  const bookReadCheck = document.createElement('input');
  bookReadCheck.setAttribute("type", "checkbox");
  bookReadCheck.setAttribute("name", "is-book-read");
  bookReadCheck.setAttribute("value", "not read");
  bookReadCheck.style.accentColor = "red";
  checkboxDivWrapper.append(bookReadCheckLabel, bookReadCheck);
  return checkboxDivWrapper;
  }

// Functions for removing elements

function removeCard(index, array, element) {
 array.splice(index, 1);
 element.remove();
}

function removeChildren(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }
}