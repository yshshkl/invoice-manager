import React, { useEffect, useState } from 'react'
import { Table, IColumn, Button } from 'shared-ui-library/components';
import { useInvoiceManager, useProductsManager } from "shared-ui-library/hooks";
import { IInvoice, IProduct } from 'shared-ui-library/models';
import AddInvoices from './AddInvoice';
import { Flex } from 'antd';

const Invoices: React.FC = () => {
    const [invoices, setInvoices] = useState<IInvoice[]>([])
    const { getInvoices, deleteInvoice } = useInvoiceManager()
    const [openAddInvoice, setOpenAddInvoice] = useState(false)

    const columns: IColumn<IInvoice>[] = [
        { header: 'Id', accessor: 'id' as keyof IInvoice },
        { header: 'Customer', accessor: 'customerId' as keyof IInvoice },
        { header: 'Title', accessor: 'title' as keyof IInvoice },
        { header: 'Amount', accessor: 'amount' as keyof IInvoice }];


    useEffect(() => {
        fetchInvoices()
    }, [])

    const onDeleteProduct = async (id: string) => {
        await deleteInvoice(id)
        await fetchInvoices()
    }

    const fetchInvoices = async () => {
        const invoices = await getInvoices()
        console.log('invoices - ', invoices)
        setInvoices(() => [...invoices])
    }

    return (
        <Flex vertical gap={20}>
            <h2>Invoices</h2>
            <Flex justify='flex-end'><Button type='primary' onClick={() => setOpenAddInvoice(true)}>Add Invoice</Button></Flex>
            <Table
                columns={columns}
                data={invoices}
                showActions
                onEditClick={() => { }}
                onDeleteClick={onDeleteProduct}
            />
            <AddInvoices visible={openAddInvoice} onClose={() => setOpenAddInvoice(false)} onAddInvoiceComplete={fetchInvoices} />
        </Flex>
    )
}

export default Invoices;
