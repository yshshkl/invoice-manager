import React, { useContext, useEffect, useState } from 'react'
import { Flex, Input, Select } from 'antd'
import { Button, Drawer } from "shared-ui-library/components";
import { useFormFields, useProductsManager, useCustomerManager, useInvoiceManager } from "shared-ui-library/hooks";
import { ICustomer, IInvoice, IProduct } from 'shared-ui-library/models';

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
        products: [],
    })

    const handleCustomerChange = (value: string) => {
        const newFields: IInvoice = { ...fields, customerId: value }
        setFormsField(newFields)
    }

    const onAddProduct = async () => {
        await addInvoice(fields)
        resetFormFields()
        onAddInvoiceComplete && await onAddInvoiceComplete()
    }

    console.log(fields)

    return <Drawer visible={visible} title="Add Customer" onClose={onClose} showLoading={isProcessing}>
        <Flex vertical gap={20} onInput={handleFieldChange}>
            <Flex vertical><label>Customer</label><Select onChange={handleCustomerChange} id="customerId" options={customers.map((customer) => ({ label: customer.name, value: customer.id }))} /></Flex>
            <Flex vertical style={{ marginTop: '25px' }}>
                <Flex vertical><label>Title</label><Input name="title" value={fields.title} /></Flex>
                <h3>Products</h3>
                <Flex>
                    <Flex gap={10}>
                        <div><Select placeholder='Select Product' options={products.map((product) => ({ label: product.name, value: product.id }))} /></div>
                        <div><Input placeholder='Description' /></div>
                        <div><Input placeholder='Quantity' /></div>
                        <div><Input placeholder='Rate' /></div>
                        <div><Input placeholder='Total' /></div>
                    </Flex>
                    <Flex>
                        <Button type='primary'>Add</Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex justify='flex-end'><Button type='primary' onClick={onAddProduct}>Add</Button></Flex>
        </Flex>
    </Drawer>
}

export default AddInvoices