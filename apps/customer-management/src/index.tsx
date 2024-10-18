import React from 'react';
import ReactDOM from 'react-dom/client';
import CustomerList from './modules/CustomerList/CustomerList';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <CustomerList />
        </React.StrictMode>
    );
}