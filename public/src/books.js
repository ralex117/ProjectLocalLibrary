function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  let notReturned = books.filter((book) => book.borrows[0].returned === false);
  console.log(returnedBooks)
  return [notReturned, returnedBooks]
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    return { ...borrow, ...account}
  }).slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
