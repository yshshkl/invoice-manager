type FormFields<T> = {
    [key in keyof T]: any;
};
declare const useFormFields: <T extends object>(initialState: FormFields<T>) => {
    fields: FormFields<T>;
    setFormsField: (field: FormFields<T>) => void;
    handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    resetFormFields: () => void;
};
export default useFormFields;
