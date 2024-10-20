import { useState } from 'react';

type FormFields<T> = {
  [key in keyof T]: string;
};

const useFormFields = <T extends object>(initialState: FormFields<T>) => {
  const [fields, setFields] = useState<FormFields<T>>(initialState);

  // Handler to update form fields
  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFields(prevFields => ({
      ...prevFields,
      [name]: value,
    }));
  };

  // Reset the form fields to the initial state
  const resetFormFields = () => {
    setFields(initialState);
  };

  return {
    fields,
    handleFieldChange,
    resetFormFields,
  };
};

export default useFormFields