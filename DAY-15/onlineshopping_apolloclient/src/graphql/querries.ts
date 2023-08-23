import { gql } from "@apollo/client";

export const GETALLPRODUCTS = gql`
query GetAllProducts {
  products {
    id
    title
    price
    likes
    rating
    imageUrl
    videoUrl
    description
  }
}

`;