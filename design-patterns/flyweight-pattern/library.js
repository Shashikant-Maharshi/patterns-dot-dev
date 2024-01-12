import { Book } from "./book.js";

export const isbnNumbers = new Set();
export const bookList = [];

export const addBook = (title, author, isbn, availibility, sales) => {
  const book = {
    ...createBook(title, author, isbn),
    sales,
    availibility,
    isbn
  };

  bookList.push(book);

  return book;
};

const createBook = (title, author, isbn) => {
  let book = isbnNumbers.has(isbn);

  if (!book) {
    book = new Book(title, author, isbn);
    isbnNumbers.add(isbn);
  }

  return book;
};