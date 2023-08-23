import Product from "../models/products.model.js";
export const resolvers = {
    Query: {
        products: async () => await Product.find({}),
        product: async (_, { id }) => await Product.findOne({ id }),
    },
};
