import React, { useEffect, useState } from 'react'
import { Table, IColumn } from 'shared-ui-library/components';
import { useInvoiceManager, useProductsManager } from "shared-ui-library/hooks";
import { IInvoice, IProduct } from 'shared-ui-library/models';
import AddInvoices from './AddInvoice';

const Invoices: React.FC = () => {
    const [invoices, setInvoices] = useState<IInvoice[]>([])
    const { getInvoices, deleteInvoice } = useInvoiceManager()
    const [openAddInvoice, setOpenAddInvoice] = useState(false)

    const columns: IColumn<IInvoice>[] = [
        { header: 'ID', accessor: 'id' as keyof IInvoice },
        { header: 'Title', accessor: 'title' as keyof IInvoice }
    ];

    useEffect(() => {
        fetchInvoices()
    }, [])

    const onDeleteProduct = async (id: string) => {
        await deleteInvoice(id)
        await fetchInvoices()
    }

    const fetchInvoices = async () => {
        const invoices = await getInvoices()
        setInvoices(() => [...invoices])
    }

    return (
        <>
            <button onClick={() => setOpenAddInvoice(true)}>Add Invoice</button>
            <Table
                columns={columns}
                data={invoices}
                showActions
                onEditClick={() => { }}
                onDeleteClick={onDeleteProduct}
            />
            <AddInvoices visible={openAddInvoice} onClose={() => setOpenAddInvoice(false)} onAddInvoiceComplete={fetchInvoices} />
        </>
    )
}

export default Invoices;
