import { gql } from "@apollo/client";

export const GETALLPRODUCTS = gql`
  query GetAllProducts($limit: Int!, $offset: Int!) {
    products(limit: $limit, offset: $offset) {
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

export const GET_PRODUCT_BY_ID = gql`
  query GetProductById($productId: ID!) {
    product(id: $productId) {
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
