import { gql } from "@apollo/client";

export const DELETE_A_PRODUCT = gql`
  mutation Mutation($id: ID!) {
    deleteAProduct(id: $id)
  }
`;
