import React from 'react';
import EditBtn from './SVG/EditBtn';
import CopyBtn from './SVG/CopyBtn';
import DeleteBtn from './SVG/DeleteBtn';

const TodoItem = () => {
    return (
        <div className='to_do_item'>
            <div className='to_do_task'>
                <input type='checkbox' className='to_do_item_checkbox'/>
                <span className='to_do_item_text'>Add Icon to Dashboard</span>
            </div>
            <div className='to_do_buttons'>
                <div><EditBtn /></div>
                <div><CopyBtn /></div>
                <div><DeleteBtn /></div>
            </div>
        </div>
    );
}

export default TodoItem;