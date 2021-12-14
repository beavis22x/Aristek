import React from 'react';

const AddField = () => {
    return (
            <div className='add__field_wrapper'>
                <div className='add__item'>
                    <input type='text' className='add__task' placeholder='+ Add a task, press Enter to save'/>
                    <button className='submit__btn'>Add</button>
                </div>
                <div className='score__field_wrapper'>
                    <span className='score__field'>
                        Total:7
                    </span>
                </div>
            </div>
    );
}

export default AddField;