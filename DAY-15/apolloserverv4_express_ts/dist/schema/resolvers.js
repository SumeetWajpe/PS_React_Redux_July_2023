import Product from "../models/products.model.js";
export const resolvers = {
    Query: {
        products: async (_, { limit, offset }) => await Product.find({}).sort({ title: 1 }).skip(offset).limit(limit),
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
