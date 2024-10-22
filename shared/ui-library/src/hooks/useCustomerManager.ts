import React, { useEffect, useState } from 'react'
import { ICustomer } from '../models'

function useCustomerManager() {
    const [isProcessing, setIsProcessing] = useState<boolean>(false)

    const getCustomers = async (): Promise<ICustomer[]> => {
        const storedCustomers: string | null = localStorage.getItem('customers');

        if (storedCustomers && storedCustomers.length > 0) {
            return JSON.parse(storedCustomers) as ICustomer[];
        } else {
            return []
        }
    }

    const addCustomer = async (customer: ICustomer) => {
        const customers = await getCustomers()
        const updatedCustomers = [...customers, { ...customer, id: `${customers.length}` }]

        saveToLocalStorage(updatedCustomers)
    }

    const deleteCustomer = async (customerId: string) => {
        const customers = await getCustomers()
        const updatedCustomers = customers.filter((customer) => customer.id !== customerId)

        saveToLocalStorage(updatedCustomers)
    }

    const editCustomer = async (updatedCustomer: ICustomer) => {
        const customers = await getCustomers()
        const updatedCustomers = customers.map((customer) => customer.id === updatedCustomer.id ? updatedCustomer : customer)

        saveToLocalStorage(updatedCustomers)
    }

    const saveToLocalStorage = (customers: ICustomer[]) => {
        localStorage.setItem('customers', JSON.stringify(customers))
    }

    return {
        getCustomers,
        isProcessing,
        addCustomer,
        deleteCustomer,
        editCustomer
    }
}

export default useCustomerManager