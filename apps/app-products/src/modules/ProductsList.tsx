import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ICustomer, IProduct } from 'shared-ui-library/models'
import { IColumn, Table, Drawer, Button } from 'shared-ui-library/components'
import AddProduct from './AddProduct';
import { useProductsManager } from "shared-ui-library/hooks";
import { Flex } from 'antd';

function ProductsList() {
    const [prodcuts, setProducts] = useState<IProduct[]>([])
    const { getProducts, deleteProduct } = useProductsManager()
    const [openAddCustomer, setOpenAddCustomer] = useState(false)

    const columns: IColumn<IProduct>[] = [
        { header: 'ID', accessor: 'id' as keyof IProduct },
        { header: 'Name', accessor: 'name' as keyof IProduct },
        { header: 'Price', accessor: 'price' as keyof IProduct },
    ];

    useEffect(() => {
        fetchProducts()
    }, [])

    const onDeleteProduct = async (id: string) => {
        await deleteProduct(id)
        await fetchProducts()
    }

    const fetchProducts = async () => {
        const prodcuts = await getProducts()
        setProducts(() => [...prodcuts])
    }

    return (
        <Flex vertical gap={20}>
            <h2>Products</h2>
            <Flex justify='flex-end'><Button type='primary' onClick={() => setOpenAddCustomer(true)}>Add Product</Button></Flex>
            <Table
                columns={columns}
                data={prodcuts}
                showActions
                onEditClick={() => { }}
                onDeleteClick={onDeleteProduct}
            />
            <AddProduct visible={openAddCustomer} onClose={() => setOpenAddCustomer(false)} onAddProductComplete={fetchProducts} />
        </Flex>
    )
}

export default ProductsList