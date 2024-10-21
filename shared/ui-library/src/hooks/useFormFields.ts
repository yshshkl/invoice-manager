import { useState } from 'react';

type FormFields<T> = {
  [key in keyof T]: any;
};

const useFormFields = <T extends object>(initialState: FormFields<T>) => {
  const [fields, setFields] = useState<FormFields<T>>(initialState);

  // Handler to update form fields
  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, id } = event.target;
    console.log('name - ', name)
    console.log('id - ', id)
    setFields(prevFields => ({
      ...prevFields,
      [name || id]: value
    }));
  };

  const setFormsField = (field: FormFields<T>) => {
    setFields((prevState) => ({ ...prevState, ...field }))
  }

  // Reset the form fields to the initial state
  const resetFormFields = () => {
    setFields(initialState);
  };

  return {
    fields,
    setFormsField,
    handleFieldChange,
    resetFormFields,
  };
};

export default useFormFields