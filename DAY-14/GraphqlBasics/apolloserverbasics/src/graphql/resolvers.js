import { authorsData } from "../model/author.model.js";
import { booksData } from "../model/book.model.js";
export const resolvers = {
  Query: {
    books: () => booksData,
    book: (_, args) => booksData.find(book => book.id == args.id),
    authors: () => authorsData,
    author: (_, { id }) => authorsData.find(author => author.id == id),
  },
  Book: {
    authorDetails: parent => {
      return authorsData.find(author => author.id == parent.authorId);
    },
  },
  Mutation: {
    addNewBook: (_, { newBook }) => {
      let newBookToBeAdded = newBook;
      booksData.push(newBookToBeAdded);
      return newBookToBeAdded;
    },
    deleteABook: (_, { id }) => {
      let index = booksData.findIndex(b => b.id == id);
      let item = booksData.splice(index, 1);
      return item[0];
    },
  },
};
