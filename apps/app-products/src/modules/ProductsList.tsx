import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ICustomer, IProduct } from 'shared-ui-library/models'
import { IColumn, Table, Drawer, Button } from 'shared-ui-library/components'
import AddProduct from './AddProduct';
import { useProductsManager } from "shared-ui-library/hooks";
import { Flex } from 'antd';

interface IProductWizard {
    isOpen: boolean;
    mode?: 'Edit' | 'Add';
    data?: IProduct;
}

function ProductsList() {
    const [prodcuts, setProducts] = useState<IProduct[]>([])
    const { getProducts, deleteProduct } = useProductsManager()
    const [productWizard, setProductWizard] = useState<IProductWizard>({ isOpen: false })

    const columns: IColumn<IProduct>[] = [
        { header: 'ID', accessor: 'id' as keyof IProduct },
        { header: 'Name', accessor: 'name' as keyof IProduct },
        { header: 'Price', accessor: 'price' as keyof IProduct },
    ];

    useEffect(() => {
        fetchProducts()
    }, [])


    const onEditClick = (id: string) => {
        const product: IProduct | undefined = prodcuts.find((prodcut) => prodcut.id === id)
        console.log('product - ', id)
        manageProductWizard({ isOpen: true, mode: 'Edit', data: product })
    }

    const onDeleteProduct = async (id: string) => {
        await deleteProduct(id)
        await fetchProducts()
    }

    const fetchProducts = async () => {
        const prodcuts = await getProducts()
        setProducts(() => [...prodcuts])
    }

    const manageProductWizard = (data: IProductWizard) => {
        setProductWizard((prev: IProductWizard) => ({ ...prev, ...data }))
    }

    return (
        <Flex vertical gap={20}>
            <h2>Products</h2>
            <Flex justify='flex-end'><Button type='primary' onClick={() => manageProductWizard({ isOpen: true, mode: 'Add', data: undefined })}>Add Product</Button></Flex>
            <Table
                columns={columns}
                data={prodcuts}
                showActions
                onEditClick={onEditClick}
                onDeleteClick={onDeleteProduct}
            />
            {productWizard.isOpen && <AddProduct visible onClose={() => manageProductWizard({ isOpen: false })} onAddProductComplete={fetchProducts} mode={productWizard.mode} productData={productWizard.data} />}
        </Flex>
    )
}

export default ProductsList