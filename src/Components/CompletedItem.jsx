import React from 'react';
import DeleteBtn from './SVG/DeleteBtn';

const CompletedItem = ({removeTask, toggleTask, task}) => {



    return (
        <div key={task.id} className='completed__field_item'>
            <div className='completed__item_task'>
                <input type='checkbox'
                       className='completed_item_checkbox'
                       checked={task.complete}
                       onChange={() => toggleTask(task.id)}/>
                <span className='completed_item_text'>{task.task}</span>
            </div>
            <div className='completed__item_btn'>
                <div className='delete__btn' onClick={() => removeTask(task.id)}><DeleteBtn/></div>
            </div>
        </div>
    );
}

export default CompletedItem;