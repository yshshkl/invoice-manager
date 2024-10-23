import React, { useContext, useEffect, useState } from 'react'
import { Flex, Select } from 'antd'
import { Button, Drawer, Table, Input } from "shared-ui-library/components";
import { useFormFields, useProductsManager, useCustomerManager, useInvoiceManager } from "shared-ui-library/hooks";
import { ICustomer, IInvoice, IProduct, IProductsBill } from 'shared-ui-library/models';

const RemoteAddNewCustomer = React.lazy(() =>
    import('customersMf/CustomerWizard').catch((err) => {
        console.error('Failed to load the remote module:', err);
        return { default: () => <div>Error loading component</div> };
    })
);

const RemoteAddNewProduct = React.lazy(() =>
    import('productsMf/ProductWizard').catch((err) => {
        console.error('Failed to load the remote module:', err);
        return { default: () => <div>Error loading component</div> };
    })
);

interface AddInvoiceProps {
    visible: boolean;
    onClose: () => void;
    onAddInvoiceComplete?: () => void;
}

const AddInvoices: React.FC<AddInvoiceProps> = ({ visible, onClose, onAddInvoiceComplete }) => {
    const [customers, setCustomers] = useState<ICustomer[]>([])
    const [products, setProducts] = useState<IProduct[]>([])
    const [openAddCustomer, setOpenAddCustomer] = useState<boolean>(false)
    const [openAddProduct, setOpenAddProduct] = useState<boolean>(false)

    const { getProducts } = useProductsManager()
    const { getCustomers } = useCustomerManager()
    const { isProcessing, addInvoice } = useInvoiceManager()

    const {
        fields,
        handleFieldChange,
        resetFormFields,
        setFormsField
    } = useFormFields<IInvoice>({
        customerId: '',
        title: '',
        amount: 0,
        products: []
    })

    const { fields: productFields, handleFieldChange: handleProductsFieldChange, setFormsField: setProductFormsField, resetFormFields: resetProductFormFields } = useFormFields<IProductsBill>({
        id: '',
        description: '',
        quantity: null,
        price: null,
        totalAmount: null,
        name: ''
    })

    useEffect(() => {
        (async () => {
            await fetchCustomers();
        })();

        (async () => {
            await fetchProducts();
        })();
    }, [])

    useEffect(() => {
        const totalProductAmount = productFields.price * productFields.quantity;
        const newProductsField: IProductsBill = { ...productFields, totalAmount: totalProductAmount }
        setProductFormsField(newProductsField)
    }, [productFields.price, productFields.quantity])

    const fetchCustomers = async () => {
        const customers = await getCustomers()
        setCustomers(() => customers)
    }

    const fetchProducts = async () => {
        const products = await getProducts()
        setProducts(() => products)
    }

    const handleCustomerChange = (value: string) => {
        const newFields: IInvoice = { ...fields, customerId: value }
        setFormsField(newFields)
    }

    const handleProductIdChange = (value: string) => {
        console.log(value)
        const selectedProduct: IProduct | undefined = products.find((product) => product.id === value)
        const newFields: IProductsBill = { ...productFields, id: value, price: selectedProduct?.price }
        setProductFormsField(newFields)
    }

    const onAddProduct = async () => {
        const { id, description, quantity, price, totalAmount } = productFields
        const product = { id, description, quantity, price, totalAmount }

        const newFields: IInvoice = { ...fields }

        newFields.products?.push(product)
        newFields.amount = newFields.products?.reduce((totalAmount, product) => {
            return totalAmount + (product?.totalAmount || 0);
        }, 0)

        setFormsField(newFields)
        resetProductFormFields()
    }

    const onAddInvoice = () => {
        addInvoice(fields)
        resetFormFields()
    }

    return <>
        <Flex vertical gap={20}>
            <Flex align='flex-end' gap={10}>
                <Flex vertical>
                    <label>Select Customer</label>
                    <Select style={{ minWidth: '200px' }} onChange={handleCustomerChange} value={fields.customerId} options={customers.map((customer) => ({ label: customer.name, value: customer.id }))} />
                </Flex>
                <Button type='primary' onClick={() => setOpenAddCustomer(true)}>Add New Customer</Button>
            </Flex>
            <Flex vertical gap={20}>
                <Flex vertical><label>Invoice Title</label><Input onInput={handleFieldChange} name="title" value={fields.title} /></Flex>
                <Flex vertical gap={20}>
                    <Flex vertical gap={10} onInput={handleProductsFieldChange}>
                        <Flex align='flex-end' gap={10}>
                            <Flex vertical>
                                <label>Select Product</label>
                                <Select style={{ minWidth: '400px' }} onChange={handleProductIdChange} value={productFields.id} placeholder='Select Product' defaultValue={productFields.id} options={products.map((product: IProduct) => ({ label: product.name, value: product.id }))} />
                            </Flex>
                            <Button type='primary' onClick={() => setOpenAddProduct(true)}>Add New Product</Button>
                        </Flex>
                        <Flex gap={10}>
                            <div><Input style={{ minWidth: '400px' }} name="description" placeholder='Description' value={productFields.description} /></div>
                            <div><Input name="quantity" placeholder='Quantity' value={productFields.quantity} /></div>
                            <div><Input name="price" disabled placeholder='Rate' value={productFields.price} /></div>
                            <div><Input name="totalAmount" disabled placeholder='Total' value={productFields.totalAmount} /></div>
                            <Button type='primary' onClick={onAddProduct}>+</Button>
                        </Flex>
                    </Flex>
                    {fields.products && <Table columns={[{ header: 'Product Id', accessor: 'id' }, { header: 'Description', accessor: 'description' }, { header: 'Quantity', accessor: 'quantity' }, { header: 'Rate', accessor: 'price' }, { header: 'Total', accessor: 'totalAmount' }]} data={fields.products} />}
                </Flex>
            </Flex>
            <Flex justify='flex-end' gap={10} align='center'>
                <span><strong>Total -</strong> {fields.amount}</span>
                <Button type='primary' onClick={onAddInvoice}>Add Invoice</Button>
            </Flex>
        </Flex>
        {openAddCustomer && <RemoteAddNewCustomer visible onClose={() => setOpenAddCustomer(false)} onAddCustomerComplete={fetchCustomers} mode='Add' />}
        {openAddProduct && <RemoteAddNewProduct visible onClose={() => setOpenAddProduct(false)} onAddProductComplete={fetchProducts} mode='Add' />}
    </>
}

export default AddInvoices