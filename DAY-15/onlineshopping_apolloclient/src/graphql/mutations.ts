import { gql } from "@apollo/client";

export const DELETE_A_PRODUCT = gql`
  mutation DeleteProductMutation($id: ID!) {
    deleteAProduct(id: $id)
  }
`;
export const ADD_NEW_PRODUCT = gql`
  mutation AddNewProductMutation($inputdata: NewProductInput) {
    addNewProduct(newProduct: $inputdata) {
      id
      title
    }
  }
`;
