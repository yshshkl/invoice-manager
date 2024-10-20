import React, { useContext } from 'react'
import { Flex, Input } from 'antd'
import { Button, Drawer } from "shared-ui-library/components";
import { useFormFields, useProductsManager } from "shared-ui-library/hooks";
import { IProduct } from 'shared-ui-library/models';

interface AddProductsProps {
    visible: boolean;
    onClose: () => void;
    onAddProductComplete?: () => void;
}

const AddProducts: React.FC<AddProductsProps> = ({ visible, onClose, onAddProductComplete }) => {
    const {
        fields,
        handleFieldChange,
        resetFormFields
    } = useFormFields<IProduct>({
        name: '',
        price: 0
    })

    const { isProcessing, addProduct } = useProductsManager()

    const onAddProduct = async () => {
        await addProduct(fields)
        resetFormFields()
        onAddProductComplete && await onAddProductComplete()
    }

    return <Drawer visible={visible} title="Add Customer" onClose={onClose} showLoading={isProcessing}>
        <Flex vertical gap={20} onInput={handleFieldChange}>
            <Flex vertical><label>Name</label><Input name="name" value={fields.name} /></Flex>
            <Flex vertical><label>Price</label><Input name="price" value={fields.price} /></Flex>
            <Flex justify='flex-end'><Button type='primary' onClick={onAddProduct}>Add</Button></Flex>
        </Flex>
    </Drawer>
}

export default AddProducts