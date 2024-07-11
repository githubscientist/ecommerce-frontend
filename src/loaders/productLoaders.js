import productServices from "../services/productServices";

const productLoaders = {
    viewProducts: async () => {
        try {
            return await productServices.viewProducts();
        } catch (error) {
            return [];
        }
    }
}

export default productLoaders;