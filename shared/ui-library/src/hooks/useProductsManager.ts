import React, { useEffect, useState } from 'react'
import { IProduct } from '../models'

function useProductsManager() {
    const [isProcessing, setIsProcessing] = useState<boolean>(false)

    const getProducts = async (): Promise<IProduct[]> => {
        const storedProducts: string | null = localStorage.getItem('products');

        if (storedProducts && storedProducts.length > 0) {
            return JSON.parse(storedProducts) as IProduct[];
        } else {
            return []
        }
    }

    const addProduct = async (product: IProduct) => {
        const products: IProduct[] = await getProducts()
        const updatedProducts: IProduct[] = [...products, { productId: `${products.length}`, ...product }]

        saveToLocalStorage(updatedProducts)
    }

    const deleteProduct = async (productId: string) => {
        const products = await getProducts()
        const updatedProducts = products.filter((product) => product.productId !== productId)

        saveToLocalStorage(updatedProducts)
    }

    const editProduct = async (updatedProduct: IProduct) => {
        const products = await getProducts()
        const updatedProducts = products.map((product) => product.productId === updatedProduct.productId ? updatedProduct : product)

        saveToLocalStorage(updatedProducts)
    }

    const saveToLocalStorage = (customers: IProduct[]) => {
        localStorage.setItem('products', JSON.stringify(customers))
    }

    return {
        getProducts,
        isProcessing,
        addProduct,
        deleteProduct,
        editProduct
    }
}

export default useProductsManager