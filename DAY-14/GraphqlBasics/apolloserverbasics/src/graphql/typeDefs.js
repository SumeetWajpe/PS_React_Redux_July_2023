export const typeDefs = `#graphql
type Query{
    books:[Book] #List of book type
    book(id:ID!):Book
    authors:[Author]
    author(id:ID!):Author
}

type Mutation{
    # addNewBook(id:ID!,title:String,price:Int,authorId:Int):Book
    addNewBook(newBook:NewBook):Book
}

input NewBook{
    id:ID!
    title:String
    price:Int
    authorId:Int
}

type Book{
    id:ID!
    title:String
    price:Int
    authorDetails:Author
}

type Author{
    id:ID!
    name:String
    age:Int
    noofBooksWritten:Int
}


`;
