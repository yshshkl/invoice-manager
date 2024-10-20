interface IProductsBill extends IProduct {
    quantity?: number;
    amount?: number;
}
interface IInvoice {
    id?: string;
    customerId?: string;
    title?: string;
    products?: IProductsBill[];
    amount?: number;
}
interface ICustomer {
    id?: string;
    name?: string;
    email?: string;
    phone?: string;
}
interface IProduct {
    id?: string;
    name?: string;
    price?: number;
}
export { ICustomer, IProduct, IInvoice, IProductsBill };
