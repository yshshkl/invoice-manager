import React, { useEffect, useState } from 'react'
import { IInvoice } from '../models'

function useInvoiceManager() {
    const [isProcessing, setIsProcessing] = useState<boolean>(false)

    const getInvoices = async (): Promise<IInvoice[]> => {
        const storedInvoices: string | null = localStorage.getItem('invoices');

        if (storedInvoices && storedInvoices.length > 0) {
            return JSON.parse(storedInvoices) as IInvoice[];
        } else {
            return []
        }
    }

    const addInvoice = async (invoice: IInvoice) => {
        const invoices = await getInvoices()
        const updatedInvoices = [...invoices, { ...invoice, id: `${invoices.length + 1}` }]

        saveToLocalStorage(updatedInvoices)
    }

    const deleteInvoice = async (invoiceId: string) => {
        const invoices = await getInvoices()
        const updatedInvoices = invoices.filter((invoice) => invoice.id !== invoiceId)

        saveToLocalStorage(updatedInvoices)
    }

    const editInvoice = async (updatedInvoice: IInvoice) => {
        const invoices = await getInvoices()
        const updatedInvoices = invoices.map((invoice) => invoice.id === updatedInvoice.id ? updatedInvoice : invoice)

        saveToLocalStorage(updatedInvoices)
    }

    const saveToLocalStorage = (invoices: IInvoice[]) => {
        localStorage.setItem('invoices', JSON.stringify(invoices))
    }

    return {
        getInvoices,
        isProcessing,
        addInvoice,
        deleteInvoice,
        editInvoice
    }
}

export default useInvoiceManager