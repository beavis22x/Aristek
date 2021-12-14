import React from 'react';
import TodoItem from './TodoItem';
import AddField from './AddField';

const TodoField = () => {
    return (
        <div className='to_do__field'>
            <AddField />
            <div className='to_do_wrapper'>
                <span className='to_do_title'> To do (3)</span>
                <div className='to_do_list'>
                    <TodoItem />
                    <TodoItem />
                    <TodoItem />
                </div>
            </div>
        </div>
    );
}

export default TodoField;