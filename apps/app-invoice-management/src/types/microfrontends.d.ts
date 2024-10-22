interface AddCustomerProps {
  visible: boolean;
  onClose: () => void;
  onAddCustomerComplete?: () => void;
}

interface AddProductsProps {
  visible: boolean;
  onClose: () => void;
  onAddProductComplete?: () => void;
}

declare module 'customersMf/AddNewCustomer' {
  const AddNewCustomer: React.ComponentType<AddCustomerProps>;
  export default AddNewCustomer;
}

declare module 'productsMf/AddNewProduct' {
  const AddNewProduct: React.ComponentType<AddProductsProps>;
  export default ProductsList;
}
