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

interface IProductsBill extends IProduct {
    description?: string;
    quantity?: number;
    totalAmount?: number;
}

export { ICustomer, IProduct, IInvoice, IProductsBill }

/*
{
    id: 01,
    products: [{ id: 0, quantity: 2, amount: 10}],
    amount: 10
}
*/