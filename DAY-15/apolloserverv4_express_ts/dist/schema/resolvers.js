import Product from "../models/products.model.js";
export const resolvers = {
    Query: {
        products: async () => await Product.find({}),
        product: async (_, { id }) => await Product.findOne({ id }),
    },
    Mutation: {
        addNewProduct: async (_, { newProduct }) => {
            let newProductToBeAdded = new Product({ ...newProduct });
            await newProductToBeAdded.save();
            return newProductToBeAdded;
        },
        deleteAProduct: async (_, { id }) => {
            let result = await Product.deleteOne({ id });
            console.log(result);
            if (result.deletedCount) {
                return `Product with id ${id} deleted successfully !`;
            }
        },
    },
};
