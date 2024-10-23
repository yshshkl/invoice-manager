import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ICustomer } from 'shared-ui-library/models'
import { IColumn, Table, Drawer, Button } from 'shared-ui-library/components'
import { useCustomerManager } from "shared-ui-library/hooks";
import CustomerWizard from './CustomerWizard';
import { Flex } from 'antd';

interface ICustomerWizard {
    isOpen: boolean;
    mode?: 'Edit' | 'Add';
    data?: ICustomer;
}

const columns: IColumn<ICustomer>[] = [
    { header: 'ID', accessor: 'id' as keyof ICustomer },
    { header: 'Name', accessor: 'name' as keyof ICustomer },
    { header: 'Email', accessor: 'email' as keyof ICustomer },
    { header: 'Phone', accessor: 'phone' as keyof ICustomer },
];

function CustomerList() {
    const [customers, setCustomers] = useState<ICustomer[]>([])
    const [customerWizard, setCustomerWizard] = useState<ICustomerWizard>({ isOpen: false })
    const { getCustomers, deleteCustomer } = useCustomerManager()

    useEffect(() => {
        (async () => {
            await fetchCustomers()
        })()

    }, [])

    const fetchCustomers = async () => {
        try {
            const customers = await getCustomers()
            setCustomers(() => [...customers])
            manageCustomerWizard({ isOpen: false })
        } catch (error) {
            console.error("Error fetching customers:", error);
        }
    }

    const onEditClick = (id: string) => {
        const customer: ICustomer | undefined = customers.find((customer) => customer.id === id)

        if (!customer) {
            return;
        }

        manageCustomerWizard({ isOpen: true, mode: 'Edit', data: customer })
    }

    const onDeleteClick = async (id: string) => {
        await deleteCustomer(id)
        await fetchCustomers()
    }

    const manageCustomerWizard = (data: ICustomerWizard) => {
        setCustomerWizard((prev: ICustomerWizard) => ({ ...prev, ...data }))
    }

    return (
        <Flex vertical gap={20}>
            <h2>Customers</h2>
            <Flex justify='flex-end'><Button type='primary' onClick={() => manageCustomerWizard({ isOpen: true, mode: 'Add', data: undefined })}>Add Customer</Button></Flex>
            <Table
                columns={columns}
                data={customers}
                showActions
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
            />
            {customerWizard.isOpen && <CustomerWizard visible onClose={() => manageCustomerWizard({ isOpen: false })} onAddCustomerComplete={fetchCustomers} mode={customerWizard.mode} customerData={customerWizard.data} />}
        </Flex>
    )
}

export default CustomerList