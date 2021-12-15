import {useEffect, useState} from 'react';

const useValidation = (value, validations) => { // validations - obj
    const [isEmpty, setEmpty] = useState(true);

    useEffect(() => { // So difficult to scale
        for (const validation in validations) { // In validations can be maxlength etc.
            switch (validation) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
            }
        }
    }, [value])

    return {
        isEmpty
    }
}

const useInput = (initialValue, changeTask, validations, ...args) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);

    const valid = useValidation(value, validations)

    const onSubmit = (e) => {
        e.preventDefault(e);
        changeTask(value, ...args); // in ...args id from chosen todoItem

        setValue('');
        setDirty(false);
    }

    const onChange = (e) => {
        setValue(e.currentTarget.value);
    }

    const onBlur = (e) => {
        setDirty(true);
    }

    const keyHandle = (e) => {
        if (e.key === "Enter") {
            onSubmit(e);
        }
    }

    return {
        onSubmit,
        onChange,
        onBlur,
        keyHandle,
        value,
        isDirty,
        ...valid
    }
}

export default useInput;
