import React, { ReactNode, useEffect, useState } from 'react';
import { ICustomer } from '../../models/customer'
import { Button } from 'shared-ui-library'

interface Column<T> {
    header: string; // Display header for the column
    accessor: keyof T; // The key of the data to display in this column
}

interface TableProps<T> {
    columns: Column<T>[]; // Array of column definitions
    data: T[]; // Array of data (rows)
}

const Table = <T,>({ columns, data }: TableProps<T>) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th key={column.header}>{column.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((column) => (
                            <td key={column.accessor as string}>{row[column.accessor] as ReactNode}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

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