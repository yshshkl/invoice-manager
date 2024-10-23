import React, { useContext, useEffect } from 'react'
import { Flex, Input } from 'antd'
import { Button, Drawer } from "shared-ui-library/components";
import { useFormFields, useCustomerManager } from "shared-ui-library/hooks";
import { ICustomer } from 'shared-ui-library/models';

export interface AddCustomerProps {
    mode?: 'Add' | 'Edit',
    customerData?: ICustomer,
    visible: boolean;
    onClose: () => void;
    onAddCustomerComplete?: () => void;
}

const CustomerWizard: React.FC<AddCustomerProps> = ({ visible, onClose, onAddCustomerComplete, customerData, mode }) => {
    const initialState = {
        id: '',
        name: '',
        email: '',
        phone: ''
    }

    const {
        fields,
        handleFieldChange,
        setFormsField,
        resetFormFields,
    } = useFormFields<ICustomer>(initialState)

    useEffect(() => {
        if (mode === 'Edit') {
            setFormsField(customerData || initialState)
        }
    }, [])

    const { isProcessing, addCustomer, editCustomer } = useCustomerManager()

    const onAddCustomer = async () => {
        await addCustomer(fields)
        resetFormFields()
        onAddCustomerComplete && await onAddCustomerComplete()
    }

    const onEditCustomer = async () => {
        await editCustomer(fields)
        resetFormFields()
        onAddCustomerComplete && await onAddCustomerComplete()
    }

    return <Drawer visible={visible} title={mode === 'Edit' ? "Update Customer" : "Add New Customer"} onClose={onClose} showLoading={isProcessing}>
        <Flex vertical gap={20} onInput={handleFieldChange}>
            {mode === 'Edit' && <Flex vertical><label>Id</label><Input disabled name="id" value={fields.id} /></Flex>}
            <Flex vertical><label>Name</label><Input name="name" value={fields.name} /></Flex>
            <Flex vertical><label>Email</label><Input name="email" value={fields.email} /></Flex>
            <Flex vertical><label>Phone</label><Input name="phone" value={fields.phone} /></Flex>
            <Flex justify='flex-end'>
                <Button type='primary' onClick={mode === 'Edit' ? onEditCustomer : onAddCustomer}>{mode === 'Edit' ? 'Update' : 'Add'}</Button>
            </Flex>
        </Flex>
    </Drawer>
}

export default CustomerWizard