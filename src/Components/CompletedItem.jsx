import React from 'react';
import DeleteBtn from './SVG/DeleteBtn';

const CompletedItem = () => {
    return (
        <div className='completed__field_item'>
            <div className='completed__item_task'>
                <input type='checkbox' className='completed_item_checkbox'/>
                <span className='completed_item_text'>Add Icon to Dashboard</span>
            </div>
            <div className='completed__item_btn'>
                <div><DeleteBtn/></div>
            </div>
        </div>
    );
}

export default CompletedItem;