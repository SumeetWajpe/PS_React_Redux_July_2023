export const typeDefs = `#graphql
type Query{
    products(limit:Int!,offset:Int!):[Product]
    product(id:ID!):Product
    # product(id:ID!):ProductResult
}
   type Mutation{
    
    addNewProduct(newProduct:NewProductInput):Product
    deleteAProduct(id:ID!):String
   }

   type Error {
        msg:String
   }

# union ProductResult = Product | Error


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
