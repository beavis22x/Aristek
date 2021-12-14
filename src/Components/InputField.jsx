import React, {useState} from 'react';

const InputField = ({addTask}) => {

    const [userInput, SetUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        SetUserInput('');
    }

    const handleChange = (e) => {
        SetUserInput(e.currentTarget.value)
    }

    const keyHandle = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    }

    return (
        <form onSubmit={handleSubmit} className='add__item'>
            <input type='text'
                   className='add__task'
                   placeholder='+ Add a task, press Enter to save'
                   onChange={handleChange}
                   onKeyDown={keyHandle}
                   value={userInput}/>
            <button className='submit__btn'>Add</button>
        </form>

    );
}

export default InputField;