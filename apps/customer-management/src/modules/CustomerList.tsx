import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { ICustomer } from 'shared-ui-library/models'
import { IColumn, Table, Drawer } from 'shared-ui-library/components'
import { useCustomerManager } from "shared-ui-library/hooks";
import AddCustomer from './AddCustomer';

function CustomerList() {
    const [customers, setCustomers] = useState<ICustomer[]>([])
    const { getCustomers, deleteCustomer } = useCustomerManager()
    const [openAddCustomer, setOpenAddCustomer] = useState(false)

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
    }

    const onEditClick = (id: string) => {

    }

    const onDeleteClick = async (id: string) => {
        await deleteCustomer(id)
        await fetchCustomers()
    }

    return (
        <>
            <button onClick={() => setOpenAddCustomer(true)}>Add Customer</button>
            <Table
                columns={columns}
                data={customers}
                showActions
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
            />
            <AddCustomer visible={openAddCustomer} onClose={() => setOpenAddCustomer(false)} onAddCustomerComplete={fetchCustomers} />
        </>
    )
}

export default CustomerList