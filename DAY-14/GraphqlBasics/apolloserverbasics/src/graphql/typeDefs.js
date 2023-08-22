export const typeDefs = `#graphql
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
