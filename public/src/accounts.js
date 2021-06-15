function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
}

function getTotalNumberOfBorrows(account, books) {
  ret = 0;
  for(let j = 0; j < books.length; j++) {
    for (let i = 0; i < books[j].borrows.length; i++) {
      if (books[j].borrows[i].id == account.id) {
        ret++;
      }
    }
  }
  return ret;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => book.borrows.some(borrow => borrow.id === account.id && !borrow.returned)).map( book => {
    return {
      id: book.id,
      title: book.title,
      authorId: book.authorId,
      author: authors.filter(author => author.id === book.authorId)[0],
      borrows: book.borrows
    }
  });
}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
