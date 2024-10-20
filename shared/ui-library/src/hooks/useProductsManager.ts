import React, { useEffect, useState } from 'react'
import { IProduct } from '../models'

function useProductsManager() {
    const [isProcessing, setIsProcessing] = useState<boolean>(false)

    // On first load, if local storage has customers return that or add random customers in local storage.
    useEffect(() => {
        const storedProducts: string | null = localStorage.getItem('products');

        if (storedProducts && storedProducts.length > 0) {
            getProducts()
        } else {
            let products: IProduct[] = []

            for (let i = 0; i < 20; i++) {
                products.push({
                    id: `${i}`,
                    name: `Name-${i}`,
                    price: (i + 1) * 2
                })
            }

            saveToLocalStorage(products)
        }
    }, [])

    const getProducts = async (): Promise<IProduct[]> => {
        const storedProducts: string | null = localStorage.getItem('products');

        if (storedProducts && storedProducts.length > 0) {
            return JSON.parse(storedProducts) as IProduct[];
        } else {
            return []
        }
    }

    const addProduct = async (product: IProduct) => {
        const products = await getProducts()
        const updatedProducts = [...products, { id: `${products.length}`, ...product }]

        saveToLocalStorage(updatedProducts)
    }

    const deleteProduct = async (productId: string) => {
        const products = await getProducts()
        const updatedProducts = products.filter((product) => product.id !== productId)

        saveToLocalStorage(updatedProducts)
    }

    const editProduct = async (updatedProduct: IProduct) => {
        const products = await getProducts()
        const updatedProducts = products.map((product) => product.id === updatedProduct.id ? updatedProduct : product)

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