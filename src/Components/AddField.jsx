import React, {useState} from 'react';
import InputField from './InputField';

const AddField = ({totalScore, addTask}) => {

    // const[userInput, SetUserInput] = useState('')
    //
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     addTask(userInput);
    //     SetUserInput('');
    // }
    //
    // const handleChange = (e) => {
    //     SetUserInput(e.currentTarget.value)
    // }
    //
    // const keyHandle = (e) => {
    //     if(e.key === "Enter") {
    //         handleSubmit(e);
    //     }
    // }

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