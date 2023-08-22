import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

let booksData = [
  { id: 1, title: "Wings Of Fire", price: 350 },
  { id: 2, title: "Ikigai", price: 550 },
  { id: 3, title: "Kaizen", price: 450 },
];

const typeDefs = `#graphql
type Query{
    books:[Book] #List of book type
    book(id:ID!):Book
}

type Book{
    id:ID!
    title:String
    price:Int
}

`;

const resolvers = {
  Query: {
    books: () => booksData,
    book: (_, args) => booksData.find(book => book.id == args.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server);

console.log(`🚀 Server ready at ${url}`);
