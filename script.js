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