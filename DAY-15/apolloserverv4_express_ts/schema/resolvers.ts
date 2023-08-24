import Product from "../models/products.model.js";
import { ProductModel } from "../types/product.type.js";

export const resolvers = {
  Query: {
    products: async (_, { limit, offset }: { limit: number; offset: number }) =>
      await Product.find({}).sort({ title: 1 }).skip(offset).limit(limit),
    product: async (_, { id }: { id: number }) => await Product.findOne({ id }),
  },
  Mutation: {
    addNewProduct: async (_, { newProduct }: { newProduct: ProductModel }) => {
      let newProductToBeAdded = new Product({ ...newProduct });
      await newProductToBeAdded.save();
      return newProductToBeAdded;
    },
    deleteAProduct: async (_, { id }: { id: number }) => {
      let result = await Product.deleteOne({ id });
      console.log(result);
      if (result.deletedCount) {
        return `Product with id ${id} deleted successfully !`;
      }
    },
  },
};
