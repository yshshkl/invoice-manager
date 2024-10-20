import React, { useContext } from 'react'
import { Flex, Input } from 'antd'
import { Button, Drawer } from "shared-ui-library/components";
import { useFormFields, useCustomerManager } from "shared-ui-library/hooks";
import { ICustomer } from 'shared-ui-library/models';

interface AddCustomerProps {
    visible: boolean;
    onClose: () => void;
    onAddCustomerComplete?: () => void;
}

const AddCustomer: React.FC<AddCustomerProps> = ({ visible, onClose, onAddCustomerComplete }) => {
    const {
        fields,
        handleFieldChange,
        resetFormFields
    } = useFormFields<ICustomer>({
        name: '',
        email: '',
        phone: ''
    })

    const { isProcessing, addCustomer } = useCustomerManager()

    const onAddCustomer = async () => {
        await addCustomer(fields)
        resetFormFields()
        onAddCustomerComplete && await onAddCustomerComplete()
    }

    return <Drawer visible={visible} title="Add Customer" onClose={onClose} showLoading={isProcessing}>
        <Flex vertical gap={20} onInput={handleFieldChange}>
            <Flex vertical><label>Name</label><Input name="name" value={fields.name} /></Flex>
            <Flex vertical><label>Email</label><Input name="email" value={fields.email} /></Flex>
            <Flex vertical><label>Phone</label><Input name="phone" value={fields.phone} /></Flex>
            <Flex justify='flex-end'><Button type='primary' onClick={onAddCustomer}>Add</Button></Flex>
        </Flex>
    </Drawer>
}

export default AddCustomer