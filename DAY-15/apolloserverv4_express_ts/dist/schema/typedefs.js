export const typeDefs = `#graphql
type Query{
    products:[Product]
    product(id:ID!):Product
}
   type Mutation{
    
    addNewProduct(newProduct:NewProductInput):Product
    deleteAProduct(id:ID!):String
   }


   input NewProductInput{
     id:ID!
    title:String
    price:Int
    likes:Int
    rating:Int
    imageUrl:String
    videoUrl:String
    description:String
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
