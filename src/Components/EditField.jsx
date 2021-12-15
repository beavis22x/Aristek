import React from 'react';
import useInput from './ValidationHook';

const EditField = ({task, id, editTask}) => {

    const input = useInput(task, editTask, {isEmpty: true}, id) // editTask take input value and id

    return (
        <div className='edit_item_wrapper'>
            <form onSubmit={e => input.onSubmit(e)} className='add__item'>
                <input type='text'
                       className={`add__task ${(input.isEmpty && input.isDirty) ? 'invalid' : ''}`}
                       onChange={e => input.onChange(e)}
                       onKeyDown={e => input.keyHandle(e)}
                       value={input.value}
                       onBlur={e => input.onBlur(e)}
                       placeholder={(input.isEmpty && input.isDirty) ? 'The field should not be empty ' : ''}
                />
                <button className={`submit__btn ${(input.isEmpty && input.isDirty) ? 'invalid' : ''}`}
                        disabled={input.isEmpty}>
                    Save
                </button>
            </form>
        </div>
    );
}

export default EditField;