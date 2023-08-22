import { booksData } from "../model/book.model.js";
export const resolvers = {
  Query: {
    books: () => booksData,
    book: (_, args) => booksData.find(book => book.id == args.id),
  },
};
