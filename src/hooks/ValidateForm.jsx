import { useCallback, useState } from "react";

export default function useFormValidator(){
    const [isValid, setIsValid] = useState(false);
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const resetForm = useCallback(
        (newIsValid ={}, newValues=false, newErrors={}) => {
            setIsValid(newIsValid);
            setValues(newValues);
            setErrors(newErrors);
        },
        [setIsValid, setValues, setErrors]
    )

    const handleChange = (e) => {
        const input = e.target;
        const{value, name} = input;
        setIsValid(input.closest('form').checkValidity());
        setValues({...values, [name]: value});
        setErrors({...errors, [name]: input.validationMessage});
    }

    return{isValid, values, errors, resetForm, handleChange};

}