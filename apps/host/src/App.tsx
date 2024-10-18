
import React, { Suspense } from 'react';

const RemoteCustomerList = React.lazy(() =>
    import('customersMf/CustomerList').catch((err) => {
        console.error('Failed to load the remote module:', err);
        return { default: () => <div>Error loading component</div> };
    })
);

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <RemoteCustomerList />
        </Suspense>
    );
}

export default App