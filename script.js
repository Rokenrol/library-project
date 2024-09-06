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

/**** Create a dialog box and a form with inputs and buttons ****/

function createForm() {
  const dialog = document.createElement("dialog");
  const form = document.createElement("form");
  form.setAttribute("method", "#");
  form.setAttribute("action", "#");
  
  // Title label and input
  
  const titleLabel = document.createElement("label");
  titleLabel.innerText = "TITLE";
  titleLabel.setAttribute("for", "inputTitle");
  
  const inputTitle = document.createElement("input");
  inputTitle.setAttribute("id", "inputTitle");
  inputTitle.setAttribute("type", "text");
  inputTitle.setAttribute("name", "title");
  inputTitle.setAttribute("placeholder", "Title");
  
  // Author label and input
  
  const authorLabel = document.createElement("label");
  authorLabel.innerText = "AUTHOR";
  authorLabel.setAttribute("for", "inputAuthor");
  
  const inputAuthor = document.createElement("input");
  inputAuthor.setAttribute("id", "inputAuthor");
  inputAuthor.setAttribute("type", "text");
  inputAuthor.setAttribute("name", "author");
  inputAuthor.setAttribute("placeholder", "Author");
  
  // Pages label and input
  
  const pagesLabel = document.createElement("label");
  pagesLabel.innerText = "PAGES";
  pagesLabel.setAttribute("for", "inputPages");
  
  const inputPages = document.createElement("input");
  inputPages.setAttribute("id", "inputPages");
  inputPages.setAttribute("type", "text");
  inputPages.setAttribute("name", "pages");
  inputPages.setAttribute("placeholder", "Pages");
  
  // Release date label and input
  
  const releaseDateLabel = document.createElement("label");
  releaseDateLabel.innerText = "RELEASE DATE";
  releaseDateLabel.setAttribute("for", "inputReleaseDate");
  
  const inputReleaseDate = document.createElement("input");
  inputReleaseDate.setAttribute("id", "inputReleaseDate");
  inputReleaseDate.setAttribute("type", "text");
  inputReleaseDate.setAttribute("name", "release date");
  inputReleaseDate.setAttribute("placeholder", "Release date");
  
  // Checkbox
  
 const bookCheckbox = createCheckbox();
  
  // Add button 
  
  const addButton = document.createElement('button');
  addButton.setAttribute("type", "button");
  addButton.innerText = "ADD";
  addButton.classList.add('add-button');
  
  // Close button
  
  const closeButton = document.createElement('button');
  closeButton.setAttribute("type", "button");
  closeButton.innerText = "CLOSE";
  closeButton.classList.add('close-button');

  // Append all the elements to construct the form
  
  form.append(titleLabel, inputTitle);
  form.append(authorLabel, inputAuthor);
  form.append(pagesLabel, inputPages);
  form.append(releaseDateLabel, inputReleaseDate);
  form.append(bookCheckbox);
  form.append(addButton, closeButton);
  dialog.append(form);
  document.body.append(dialog);
  dialog.showModal();
  
  /*** Close modal, reset input fields and remove dialog from the DOM ****/
  // I'm not sure if resetting the input fields is necessary because dialog
  // gets removed entirely with dialog.remove() but I'll leave it there just in case
  
  const inputs = form.querySelectorAll("input");

  closeButton.addEventListener('click', (event) => {
    dialog.close();
    inputs.forEach((input) => input.value = "");
    dialog.remove();
  });