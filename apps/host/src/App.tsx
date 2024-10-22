
import React, { Suspense, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import classNames from './App.css'
import { useLocation } from 'react-router-dom';

interface AddCustomerProps {
    visible: boolean;
    onClose: () => void;
    onAddCustomerComplete?: () => void;
}

const RemoteCustomerList = React.lazy(() =>
    import('customersMf/CustomerList').catch((err) => {
        console.error('Failed to load the remote module:', err);
        return { default: () => <div>Error loading component</div> };
    })
);

const RemoteProductsList = React.lazy(() =>
    import('productsMf/ProductsList').catch((err) => {
        console.error('Failed to load the remote module:', err);
        return { default: () => <div>Error loading component</div> };
    })
);

const RemoteInvoices = React.lazy(() =>
    import('invoicesMf/Invoices').catch((err) => {
        console.error('Failed to load the remote module:', err);
        return { default: () => <div>Error loading component</div> };
    })
);

const RemoteAddNewCustomer: React.LazyExoticComponent<React.ComponentType<AddCustomerProps>> = React.lazy(() =>
    import('customersMf/AddNewCustomer')
        .then((module) => {
            console.log('module - ', module)
            return { default: module.default as React.ComponentType<AddCustomerProps> }
        })
        .catch((err) => {
            console.error('Failed to load the remote module:', err);
            return { default: () => <div>Error loading component</div> };
        })
)

function App() {
    const location = useLocation();

    const getSelectedNavClassName = (path: string) => {
        return location.pathname.includes(path) ? classNames.selected : ''
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <header>
                <h1>Shop Management</h1>
            </header>
            <nav className={classNames.navigation}>
                <Link className={getSelectedNavClassName('customers')} to="/customers">Customers</Link>
                <Link className={getSelectedNavClassName('products')} to="/products">Products</Link>
                <Link className={getSelectedNavClassName('invoices')} to="/invoices">Invoices</Link>
            </nav>
            <section className={classNames.mainBody}>
                <Routes>
                    <Route path='/customers' element={<RemoteCustomerList />} />
                    <Route path='/products' element={<RemoteProductsList />} />
                    <Route path='/invoices' element={<RemoteInvoices />} />
                    <Route path='/addCustomer' element={<RemoteAddNewCustomer visible={true} onClose={() => { }} />} />
                </Routes>
            </section>
        </Suspense>
    );
}

export default App