export const typeDefs = `#graphql
type Query{
    books:[Book] #List of book type
    book(id:ID!):Book
    authors:[Author]
    author(id:ID!):Author
}

type Book{
    id:ID!
    title:String
    price:Int
    author:Author
}

type Author{
    id:ID!
    name:String
    age:Int
    noofBooksWritten:Int
}

`;
