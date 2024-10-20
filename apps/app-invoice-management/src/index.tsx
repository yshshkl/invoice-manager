import React from 'react';
import ReactDOM from 'react-dom/client';
import Invoices from './modules/Invoices';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Invoices />
        </React.StrictMode>
    );
}