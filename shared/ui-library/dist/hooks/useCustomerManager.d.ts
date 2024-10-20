import { ICustomer } from '../models';
declare function useCustomerManager(): {
    getCustomers: () => Promise<ICustomer[]>;
    isProcessing: boolean;
    addCustomer: (customer: ICustomer) => Promise<void>;
    deleteCustomer: (customerId: string) => Promise<void>;
    editCustomer: (updatedCustomer: ICustomer) => Promise<void>;
};
export default useCustomerManager;
