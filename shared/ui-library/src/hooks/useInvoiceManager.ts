import React, { useEffect, useState } from 'react'
import { IInvoice } from '../models'

function useInvoiceManager() {
    const [isProcessing, setIsProcessing] = useState<boolean>(false)

    // On first load, if local storage has customers return that or add random customers in local storage.
    useEffect(() => {
        const storedInvoices: string | null = localStorage.getItem('invoices');

        if (storedInvoices && storedInvoices.length > 0) {
            getInvoices()
        } else {
            let invoices: IInvoice[] = []

            for (let i = 0; i < 5; i++) {
                invoices.push({
                    id: `${i}`,
                    title: `Bill to name - ${i}`,
                    products: [{ productId: '1', quantity: 2, totalAmount: 20 }, { productId: '2', quantity: 7, totalAmount: 100 }],
                    amount: 120
                })
            }

            saveToLocalStorage(invoices)
        }
    }, [])

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
        const updatedInvoices = [...invoices, { id: `${invoices.length}`, ...invoice }]

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