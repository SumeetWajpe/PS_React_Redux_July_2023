import Product from "../models/products.model.js";
import { ProductModel } from "../types/product.type.js";

export const resolvers = {
  Query: {
    products: async (_, { limit, offset }: { limit: number; offset: number }) =>
      await Product.find({}).sort({ title: 1 }).skip(offset).limit(limit), // will be sorted with title in ascending order
    product: async (_, { id }: { id: number }) => {
      try {
        await Product.findOne({ id });
      } catch (error) {
        return { msg: `Something went wrong  - ${error.message}` };
      }
    },
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
