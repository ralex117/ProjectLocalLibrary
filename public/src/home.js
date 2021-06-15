function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => book.borrows[0].returned ? acc : ++acc, 0);
}




function Helper(books) {
  let result = books.sort((countA, countB) => (countA.count < countB.count ? 1: -1)).slice(0, 5);
  return result; 
}

function getMostCommonGenres(books) {
  const commonGenres = [];
  for (let book of books) {
    const genre = commonGenres.find((currentGenre) => currentGenre.name === book.genre);
    if (genre) { genre.count++; 
    } else { commonGenres.push({name: book.genre, count: 1});
    }
  }
  return Helper(commonGenres);
}






function getMostPopularBooks(books) {
  return books.map(book => {
    return {
        name: book.title,
        count: book.borrows.length
    }
  }).sort((bookA, bookB) =>
  bookB.count - 
  bookA.count).splice(0,5);
}

function getMostPopularAuthors(books, authors) {
  let finalArray = [];
  let result = {};
  const authorVars = authors.forEach((author) => {
    const id = author.id;
    const { name: {first, last} } = author;
    const authorName = `${first} ${last}`;
    if (!finalArray.some((authorObj) => authorObj["name"] === authorName)) {
      books.forEach((book) => {
        const borrowed = book.borrows.length
        if (book.authorId === id) {
            if (!finalArray.some((authorObj) => authorObj["name"] === authorName)) {
              result = { name: authorName, count: borrowed};
              finalArray.push(result);
            } 
              else {
                const foundAuthor = finalArray.find((authorObj) => authorObj["name"] === authorName);
                foundAuthor.count += borrowed;
              }
            }
        })
      }
    })
  return finalArray.sort((authorA, authorB) => authorB.count - authorA.count).slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
