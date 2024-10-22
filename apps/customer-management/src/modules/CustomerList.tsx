import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ICustomer } from 'shared-ui-library/models'
import { IColumn, Table, Drawer, Button } from 'shared-ui-library/components'
import { useCustomerManager } from "shared-ui-library/hooks";
import AddCustomer from './AddCustomer';
import { Flex } from 'antd';

interface ICustomerWizard {
    isOpen: boolean;
    mode?: 'Edit' | 'Add';
    data?: ICustomer;
}

function CustomerList() {
    const [customers, setCustomers] = useState<ICustomer[]>([])
    const { getCustomers, deleteCustomer, addCustomer, editCustomer } = useCustomerManager()
    const [openAddCustomer, setOpenAddCustomer] = useState<ICustomerWizard>({ isOpen: false })

    const columns: IColumn<ICustomer>[] = [
        { header: 'ID', accessor: 'id' as keyof ICustomer },
        { header: 'Name', accessor: 'name' as keyof ICustomer },
        { header: 'Email', accessor: 'email' as keyof ICustomer },
        { header: 'Phone', accessor: 'phone' as keyof ICustomer },
    ];

    useEffect(() => {
        fetchCustomers()
    }, [])

    const fetchCustomers = async () => {
        const customers = await getCustomers()
        setCustomers(() => [...customers])
        manageCustomerWizard({ isOpen: false })
    }



    const onEditClick = (id: string) => {
        const customer: ICustomer | undefined = customers.find((customer) => customer.id === id)

        manageCustomerWizard({ isOpen: true, mode: 'Edit', data: customer })
    }

    const onDeleteClick = async (id: string) => {
        await deleteCustomer(id)
        await fetchCustomers()
    }

    const manageCustomerWizard = (data: ICustomerWizard) => {
        setOpenAddCustomer((prev: ICustomerWizard) => ({ ...prev, ...data }))
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
            {openAddCustomer.isOpen && <AddCustomer visible onClose={() => manageCustomerWizard({ isOpen: false })} onAddCustomerComplete={fetchCustomers} mode={openAddCustomer.mode} customerData={openAddCustomer.data} />}
        </Flex>
    )
}

export default CustomerList