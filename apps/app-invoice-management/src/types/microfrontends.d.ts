interface CustomerWizardProps {
  mode?: 'Add' | 'Edit',
  customerData?: ICustomer,
  visible: boolean;
  onClose: () => void;
  onAddCustomerComplete?: () => void;
}

interface ProductWizardProps {
  mode?: 'Add' | 'Edit',
  productData?: IProduct,
  visible: boolean;
  onClose: () => void;
  onAddProductComplete?: () => void;
}

declare module 'customersMf/CustomerWizard' {
  const CustomerWizard: React.ComponentType<CustomerWizardProps>;
  export default CustomerWizard;
}

declare module 'productsMf/ProductWizard' {
  const ProductWizard: React.ComponentType<ProductWizardProps>;
  export default ProductWizard;
}
