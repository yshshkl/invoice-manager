interface IProductsBill extends IProduct {
    description?: string;
    quantity?: number;
    totalAmount?: number;
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
    productId?: string;
    name?: string;
    price?: number;
}
export { ICustomer, IProduct, IInvoice, IProductsBill };
