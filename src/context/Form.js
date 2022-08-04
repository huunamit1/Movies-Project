import { createContext, useContext } from 'react';

const FormContext = createContext();

export function FormProvider(props) {
    return <FormContext.Provider {...props} />;
}

function useForm() {
    return useContext(FormContext);
}

export default useForm;
