type FormFields<T> = {
    [key in keyof T]: string;
};
declare const useFormFields: <T extends object>(initialState: FormFields<T>) => {
    fields: FormFields<T>;
    handleFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    resetFormFields: () => void;
};
export default useFormFields;
