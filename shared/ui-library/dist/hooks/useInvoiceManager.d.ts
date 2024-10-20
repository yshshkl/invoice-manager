import { IInvoice } from '../models';
declare function useInvoiceManager(): {
    getInvoices: () => Promise<IInvoice[]>;
    isProcessing: boolean;
    addInvoice: (invoice: IInvoice) => Promise<void>;
    deleteInvoice: (invoiceId: string) => Promise<void>;
    editInvoice: (updatedInvoice: IInvoice) => Promise<void>;
};
export default useInvoiceManager;
