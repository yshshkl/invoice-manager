import React, { useContext, useEffect } from 'react'
import { Flex, Input } from 'antd'
import { Button, Drawer } from "shared-ui-library/components";
import { useFormFields, useProductsManager } from "shared-ui-library/hooks";
import { IProduct } from 'shared-ui-library/models';

export interface AddProductsProps {
    mode?: 'Add' | 'Edit',
    productData?: IProduct,
    visible: boolean;
    onClose: () => void;
    onAddProductComplete?: () => void;
}

const ProductWizard: React.FC<AddProductsProps> = ({ visible, onClose, onAddProductComplete, mode, productData }) => {
    const initialState: IProduct = {
        id: '',
        name: '',
        price: 0
    }

    const {
        fields,
        handleFieldChange,
        resetFormFields,
        setFormsField
    } = useFormFields<IProduct>(initialState)

    const { isProcessing, addProduct, editProduct } = useProductsManager()

    useEffect(() => {
        if (mode === 'Edit') {
            setFormsField(productData || initialState)
        }
    }, [])

    const onAddProduct = async () => {
        await addProduct(fields)
        resetFormFields()
        onAddProductComplete && await onAddProductComplete()
    }

    const onEditCustomer = async () => {
        await editProduct(fields)
        resetFormFields()
        onAddProductComplete && await onAddProductComplete()
    }

    return <Drawer visible={visible} title={mode === 'Edit' ? "Update Product" : "Add New Product"} onClose={onClose} showLoading={isProcessing}>
        <Flex vertical gap={20} onInput={handleFieldChange}>
            {mode === 'Edit' && <Flex vertical><label>Id</label><Input disabled name="id" value={fields.id} /></Flex>}
            <Flex vertical><label>Name</label><Input name="name" value={fields.name} /></Flex>
            <Flex vertical><label>Price</label><Input name="price" value={fields.price} /></Flex>
            <Flex justify='flex-end'>
                <Button type='primary' onClick={mode === 'Edit' ? onEditCustomer : onAddProduct}>{mode === 'Edit' ? 'Update' : 'Add'}</Button>
            </Flex>
        </Flex>
    </Drawer>
}

export default ProductWizard