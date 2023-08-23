export const typeDefs = `#graphql
type Query{
    products:[Product]
}
   

type Product{
    id:ID!
    title:String
    price:Int
}
`;
