import { IProduct } from '../models';
declare function useProductsManager(): {
    getProducts: () => Promise<IProduct[]>;
    isProcessing: boolean;
    addProduct: (product: IProduct) => Promise<void>;
    deleteProduct: (id: string) => Promise<void>;
    editProduct: (updatedProduct: IProduct) => Promise<void>;
};
export default useProductsManager;
