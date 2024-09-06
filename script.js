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

// Add new book button styles

addNewBookButton.style.width = "200px";
addNewBookButton.style.height = "50px";
addNewBookButton.style.marginBottom = "20px";
addNewBookButton.style.fontWeight = "bold";
addNewBookButton.style.fontSize= "1.1rem";
addNewBookButton.style.backgroundColor = "whitesmoke";
addNewBookButton.style.color = "deepskyblue";
addNewBookButton.style.textShadow = "1px 1px orange"
addNewBookButton.style.border = "2px dashed orange";
addNewBookButton.style.borderRadius = "10px";

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


/*********** FUNCTIONS ************/

function addBookToLibrary() {
  // Clear all books before rendering a new page of books
    removeChildren(wrapper);
  for (const bookObject of myLibrary) {

// Create book card
    const div = createCard();    
// Set data-attribute to array index
  div.setAttribute('data-index', `${myLibrary.indexOf(bookObject)}`);
 // Fill card with object data
  for (let [key, value] of Object.entries(bookObject)) {
 div.append(createKeyValuePairParagraph(`${key}: ${value}`));
  }
  // Data-attribute used in the delButton event listener to identify card for deletion
  const data = div.dataset.index;
  // Construct delete button and append it to the book card   
  const delButton = createButton("delete");
  // Create checkbox
      const checkbox = createCheckbox();
  
 // Grab last paragraph to change the read status in the DOM
    let readStatusParagraph = div.querySelector('div > p:last-child');
  // Check if book status was "read" to match the checkbox state to read status 
    if (readStatusParagraph.innerText.includes("status: read")) {
     checkbox.children[1].checked = true;
     }
    
    // Add event listener to checkbox on book card and call the prototype method
    checkbox.children[1].addEventListener('change', (e) => {
      bookObject.isBookRead(checkbox.children[1]);
      console.log(checkbox.children[1].value);
      readStatusParagraph.innerText = `status: ${checkbox.children[1].value}`;
  });
    
    div.append(checkbox, delButton);

 // Add event listener to delete button to remove the book card
 delButton.addEventListener('click', () => {
  removeCard(data, myLibrary, div);
  addBookToLibrary();
});
  // Append book card to wrapper div
  wrapper.append(div);
 };

}// --> closing brace of addBookToLibrary function


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
  inputTitle.style.marginBottom = "8px";
  
  // Author label and input
  
  const authorLabel = document.createElement("label");
  authorLabel.innerText = "AUTHOR";
  authorLabel.setAttribute("for", "inputAuthor");
  
  const inputAuthor = document.createElement("input");
  inputAuthor.setAttribute("id", "inputAuthor");
  inputAuthor.setAttribute("type", "text");
  inputAuthor.setAttribute("name", "author");
  inputAuthor.setAttribute("placeholder", "Author");
  inputAuthor.style.marginBottom = "8px";
  
  // Pages label and input
  
  const pagesLabel = document.createElement("label");
  pagesLabel.innerText = "PAGES";
  pagesLabel.setAttribute("for", "inputPages");
  
  const inputPages = document.createElement("input");
  inputPages.setAttribute("id", "inputPages");
  inputPages.setAttribute("type", "text");
  inputPages.setAttribute("name", "pages");
  inputPages.setAttribute("placeholder", "Pages");
  inputPages.style.marginBottom = "8px";
  
  // Release date label and input
  
  const releaseDateLabel = document.createElement("label");
  releaseDateLabel.innerText = "RELEASE DATE";
  releaseDateLabel.setAttribute("for", "inputReleaseDate");
  
  const inputReleaseDate = document.createElement("input");
  inputReleaseDate.style.marginBottom = "12px";
  inputReleaseDate.setAttribute("id", "inputReleaseDate");
  inputReleaseDate.setAttribute("type", "text");
  inputReleaseDate.setAttribute("name", "release date");
  inputReleaseDate.setAttribute("placeholder", "Release date");
  inputReleaseDate.style.marginBottom = "8px";

  // Checkbox
  
 const bookCheckbox = createCheckbox();
  
  // Add button 
  
  const addButton = document.createElement('button');
  addButton.setAttribute("type", "button");
  addButton.innerText = "ADD";
  addButton.classList.add('add-button');
  addButton.style.fontWeight = "bold";
  addButton.style.marginBottom = "8px";
  addButton.style.marginTop = "12px";
  addButton.style.color = "ivory";
  addButton.style.backgroundColor = "orange";
  addButton.style.border = "2px solid red";
  addButton.style.borderRadius = "8px";
  
  // Close button
  
  const closeButton = document.createElement('button');
  closeButton.setAttribute("type", "button");
  closeButton.innerText = "CLOSE";
  closeButton.classList.add('close-button');
  closeButton.style.border = "1px solid black";
  closeButton.style.borderRadius = "8px";

  // Append all the elements to construct the form
  
  form.append(titleLabel, inputTitle);
  form.append(authorLabel, inputAuthor);
  form.append(pagesLabel, inputPages);
  form.append(releaseDateLabel, inputReleaseDate);
  form.append(bookCheckbox);
  form.append(addButton, closeButton);
  form.style.display = "flex";
  form.style.flexDirection = "column";
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

  /**** Button "ADD" in dialog box - creates new book object, pushes the object into the myLibrary array,
and calls addBookToLibrary ****/

addButton.addEventListener('click', (event) => {

  const book = new Book(inputTitle.value, inputReleaseDate.value, inputAuthor.value, inputPages.value, bookCheckbox.children[1].value);

  myLibrary.push(book);
  addBookToLibrary();
  dialog.close();
  dialog.remove();
});

// Add event listener to "READ" checkbox in the dialog box

bookCheckbox.children[1].addEventListener('change', (e) => {
  if (bookCheckbox.children[1].checked) {
      bookCheckbox.children[1].value = "read";
 } else {
   bookCheckbox.children[1].value = "not read";
 }
});

} // --> closing brace of createForm function

addBookToLibrary();