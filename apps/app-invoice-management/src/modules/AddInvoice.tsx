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
    } = useFormFields<IInvoice>({
        customerId: '',
        title: '',
        amount: '',
        products: []
    })

    const { fields: productFields, handleFieldChange: handleProductsFieldChange, setFormsField: setProductFormsField, resetFormFields: resetProductFormFields } = useFormFields<IProductsBill>({
        productId: '',
        description: '',
        quantity: null,
        price: null,
        totalAmount: null,
        name: ''
    })

    const handleCustomerChange = (value: string) => {
        const newFields: IInvoice = { ...fields, customerId: value }
        setFormsField(newFields)
    }

    const handleProductIdChange = (value: string) => {
        const newFields: IProductsBill = { ...productFields, productId: value }
        setProductFormsField(newFields)
    }

    const onAddProduct = async () => {
        const { productId, description, quantity, price, totalAmount } = productFields
        const product = { productId, description, quantity, price, totalAmount }

        const newFields: IInvoice = { ...fields }
        newFields.products?.push(product)

        setFormsField(newFields)
        resetProductFormFields()
    }

    const onAddInvoice = () => {
        addInvoice(fields)
        resetFormFields()
    }

    return <Drawer visible={visible} title="Add Invoice" onClose={onClose} showLoading={isProcessing}>
        <Flex vertical gap={20}>
            <Flex vertical><label>Customer</label><Select onChange={handleCustomerChange} id="customerId" options={customers.map((customer) => ({ label: customer.name, value: customer.id }))} /></Flex>
            <Flex vertical gap={20} style={{ marginTop: '25px' }}>
                <Flex vertical><label>Title</label><Input onInput={handleFieldChange} name="title" value={fields.title} /></Flex>
                <h3>Products</h3>
                <Flex vertical gap={20}>
                    <Flex gap={10} onInput={handleProductsFieldChange}>
                        <div><Select onChange={handleProductIdChange} placeholder='Select Product' value={productFields.productId} options={products.map((product) => ({ label: product.name, value: product.id }))} /></div>
                        <div><Input name="description" placeholder='Description' value={productFields.description} /></div>
                        <div><Input name="quantity" placeholder='Quantity' value={productFields.quantity} /></div>
                        <div><Input name="price" placeholder='Rate' value={productFields.price} /></div>
                        <div><Input name="totalAmount" placeholder='Total' value={productFields.totalAmount} /></div>
                        <Button type='primary' onClick={onAddProduct}>+</Button>
                    </Flex>
                    {fields.products && <Table columns={[{ header: 'Product Id', accessor: 'productId' }, { header: 'Description', accessor: 'description' }, { header: 'Quantity', accessor: 'quantity' }, { header: 'Rate', accessor: 'price' }, { header: 'Total', accessor: 'totalAmount' }]} data={fields.products} />}
                </Flex>
            </Flex>
            <Flex justify='flex-end'><Button type='primary' onClick={onAddInvoice}>Add Invoice</Button></Flex>
        </Flex>
    </Drawer>
}

export default AddInvoices