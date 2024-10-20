
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

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
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/customers' element={<RemoteCustomerList />} />
                <Route path='/products' element={<RemoteProductsList />} />
                <Route path='/invoices' element={<RemoteInvoices />} />
                <Route path='/addCustomer' element={<RemoteAddNewCustomer visible={true} onClose={() => { }} />} />
            </Routes>
        </Suspense>
    );
}

export default App