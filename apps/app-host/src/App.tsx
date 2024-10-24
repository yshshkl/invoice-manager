
import React, { Suspense, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import classNames from './App.css'
import { useLocation } from 'react-router-dom';

interface CustomerWizardProps {
    visible: boolean;
    onClose: () => void;
    onAddCustomerComplete?: () => void;
}

const RemoteCustomerList = React.lazy(() =>
    import('customersMf/CustomerList')
        .then((module) => {
            console.log('Successfully loaded the remote module:', module);
            return module;
        })
        .catch((err) => {
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

function App() {
    const location = useLocation();

    const getSelectedNavClassName = (path: string) => {
        return location.pathname.includes(path) ? classNames.selected : ''
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <header>
                <h1>Store Management</h1>
            </header>
            <nav className={classNames.navigation}>
                <Link className={getSelectedNavClassName('customers')} to="/customers">Customers</Link>
                <Link className={getSelectedNavClassName('products')} to="/products">Products</Link>
                <Link className={getSelectedNavClassName('invoices')} to="/invoices">Invoices</Link>
            </nav>
            <section className={classNames.mainBody}>
                <Routes>
                    <Route path='/customers' element={<Suspense fallback={<div>Loading...</div>}><RemoteCustomerList /></Suspense>} />
                    <Route path='/products' element={<Suspense fallback={<div>Loading...</div>}><RemoteProductsList /></Suspense>} />
                    <Route path='/invoices' element={<Suspense fallback={<div>Loading...</div>}><RemoteInvoices /></Suspense>} />
                </Routes>
            </section>
        </Suspense>
    );
}

export default App