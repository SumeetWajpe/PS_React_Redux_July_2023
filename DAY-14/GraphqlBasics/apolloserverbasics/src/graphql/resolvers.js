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
    author: parent => {
      return authorsData.find(author=>author.id == parent.authorId)
    },
  },
};
