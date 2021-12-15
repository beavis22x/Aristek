import React from 'react';
import useInput from './ValidationHook';


const InputField = ({addTask}) => {

    const input = useInput('', addTask, {isEmpty: true}) // addTask takes an inputValue

    return (
        <form onSubmit={e => input.onSubmit(e)} className='add__item'>
            <input type='text'
                   className={`add__task ${(input.isEmpty && input.isDirty) ? 'invalid' : ''}`}
                   placeholder={(input.isEmpty && input.isDirty) ? 'The field should not be empty ' : '+ Add a task, press Enter to save'}
                   onChange={e => input.onChange(e)}
                   onKeyDown={e => input.keyHandle(e)}
                   value={input.value}
                   onBlur={e => input.onBlur(e)}
            />
            <button className={`submit__btn ${(input.isEmpty && input.isDirty) ? 'invalid' : ''}`}
                    disabled={input.isEmpty}>
                Add
            </button>
        </form>
    );
}

export default InputField;