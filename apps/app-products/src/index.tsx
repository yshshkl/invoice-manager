import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductsList from './modules/ProductsList';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <ProductsList />
        </React.StrictMode>
    );
}