import React from 'react';
import InputField from './InputField';

const AddField = ({totalScore, addTask}) => {
    return (
        <div className='add__field_wrapper'>
            <InputField addTask={addTask}/>
            <div className='score__field_wrapper'>
                <span className='score__field'>
                    Total: {totalScore}
                </span>
            </div>
        </div>
    );
}

export default AddField;