import React, { useContext, useEffect, useState } from 'react'
import { Flex, Input, Select } from 'antd'
import { Button, Drawer, Table } from "shared-ui-library/components";
import { useFormFields, useProductsManager, useCustomerManager, useInvoiceManager } from "shared-ui-library/hooks";
import { ICustomer, IInvoice, IProduct, IProductsBill } from 'shared-ui-library/models';

interface AddInvoiceProps {
    visible: boolean;
    onClose: () => void;
    onAddInvoiceComplete?: () => void;
}

const AddInvoices: React.FC<AddInvoiceProps> = ({ visible, onClose, onAddInvoiceComplete }) => {
    const [customers, setCustomers] = useState<ICustomer[]>([])
    const [products, setProducts] = useState<ICustomer[]>([])

    const { getProducts } = useProductsManager()
    const { getCustomers } = useCustomerManager()
    const { isProcessing, addInvoice } = useInvoiceManager()

    useEffect(() => {
        (async () => {
            const customers = await getCustomers()
            setCustomers(() => customers)
        })();

        (async () => {
            const products = await getProducts()
            setProducts(() => products)
        })();
    }, [])

    const {
        fields,
        handleFieldChange,
        resetFormFields,
        setFormsField
    } = useFormFields<IInvoice & IProductsBill>({
        customerId: '',
        title: '',
        amount: '',
        products: [],
        productId: '',
        description: '',
        quantity: 0,
        price: 0,
        totalAmount: 0
    })

    const handleCustomerChange = (value: string) => {
        const newFields: IInvoice = { ...fields, customerId: value }
        setFormsField(newFields)
    }

    const onAddProduct = async () => {
        const { productId, description, quantity, price, totalAmount } = fields
        const product = { productId, description, quantity, price, totalAmount }

        const newFields: IInvoice & IProductsBill = { ...fields }
        newFields.products?.push(product)

        setFormsField(newFields)
    }

    console.log(fields)

    return <Drawer visible={visible} title="Add Invoice" onClose={onClose} showLoading={isProcessing}>
        <Flex vertical gap={20} onInput={handleFieldChange}>
            <Flex vertical><label>Customer</label><Select onChange={handleCustomerChange} id="customerId" options={customers.map((customer) => ({ label: customer.name, value: customer.id }))} /></Flex>
            <Flex vertical style={{ marginTop: '25px' }}>
                <Flex vertical><label>Title</label><Input name="title" value={fields.title} /></Flex>
                <h3>Products</h3>
                <Flex vertical>
                    <Flex gap={10}>
                        <div><Select id="productId" placeholder='Select Product' value={fields.productId} options={products.map((product) => ({ label: product.name, value: product.id }))} /></div>
                        <div><Input name="description" placeholder='Description' value={fields.description} /></div>
                        <div><Input name="quantity" placeholder='Quantity' value={fields.quantity} /></div>
                        <div><Input name="price" placeholder='Rate' value={fields.price} /></div>
                        <div><Input name="totalAmount" placeholder='Total' value={fields.totalAmount} /></div>
                        <Button type='primary' onClick={onAddProduct}>+</Button>
                    </Flex>
                    {fields.products && <Table columns={[{ header: 'Product Id', accessor: 'productId' }]} data={fields.products} />}
                </Flex>
            </Flex>
            <Flex justify='flex-end'><Button type='primary' >Add Invoice</Button></Flex>
        </Flex>
    </Drawer>
}

export default AddInvoices