import React, { useEffect, useState } from 'react'
import { ICustomer } from 'shared-ui-library/models'

function useCustomerManager() {
    const [isProcessing, setIsProcessing] = useState<boolean>(false)

    // On first load, if local storage has customers return that or add random customers in local storage.
    useEffect(() => {
        const storedCustomers: string | null = localStorage.getItem('customers');

        if (storedCustomers && storedCustomers.length > 0) {
            getCustomers()
        } else {
            let customers: ICustomer[] = []

            for (let i = 0; i < 20; i++) {
                customers.push({
                    id: `${i}`,
                    name: `Name-${i}`,
                    email: `abcd@abc.abc${i}`,
                    phone: `99999999`
                })
            }

            saveToLocalStorage(customers)
        }
    }, [])

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
        const updatedCustomers = [...customers, { id: `${customers.length}`, ...customer }]

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