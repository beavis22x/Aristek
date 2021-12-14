import React, {useState} from 'react';

const EditField = ({ task, id, editTask }) => {

    const [editInput, SetEditInput] = useState(task)

    const handleSubmit = (e) => {
        e.preventDefault();
        editTask(editInput, id);
        SetEditInput('');
    }

    const handleChange = (e) => {
        SetEditInput(e.currentTarget.value)
    }

    const keyHandle = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    }

    return (
        <div className='edit_item_wrapper'>
            <form onSubmit={handleSubmit} className='add__item'>
                <input type='text'
                       className='add__task'
                       onChange={handleChange}
                       onKeyDown={keyHandle}
                       value={editInput}
                />
                <button className='submit__btn'>Save</button>
            </form>
        </div>
    );
}

export default EditField;