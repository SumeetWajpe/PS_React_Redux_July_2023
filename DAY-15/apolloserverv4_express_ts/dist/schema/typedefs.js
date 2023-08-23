export const typeDefs = `#graphql
type Query{
    products:[Product]
    product(id:ID!):Product
}
   

type Product{
    id:ID!
    title:String
    price:Int
    likes:Int
    rating:Int
    imageUrl:String
    videoUrl:String
    description:String
}
`;
