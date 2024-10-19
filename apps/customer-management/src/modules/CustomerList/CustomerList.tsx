import React, { ReactNode, useEffect, useState } from 'react';
import { ICustomer } from 'shared-ui-library/models'
import { Button, Table } from 'shared-ui-library/components'

function CustomerList() {
    const [customersList, setCustomerList] = useState<ICustomer[]>([])

    const columns = [
        { header: 'ID', accessor: 'id' as keyof ICustomer },
        { header: 'Name', accessor: 'name' as keyof ICustomer },
        { header: 'Email', accessor: 'email' as keyof ICustomer },
        { header: 'Phone', accessor: 'phone' as keyof ICustomer },
    ];

    useEffect(() => {
        const customersList: ICustomer[] =
            [
                { id: 0, email: 'abcd0@asd2.asd', name: 'Yash0', phone: '95828016350' },
                { id: 1, email: 'abcd1@asd.asd', name: 'Yash1', phone: '95828016351' },
                { id: 2, email: 'abcd2@asd.asd', name: 'Yash2', phone: '95828016352' },
                { id: 3, email: 'abcd3@asd.asd', name: 'Yash3', phone: '95828016353' }
            ]
        setCustomerList(() => customersList)
    }, [])

    return <><Button /><Table columns={columns} data={customersList} /></>
}

export default CustomerList