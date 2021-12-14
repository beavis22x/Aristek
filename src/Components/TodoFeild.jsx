import React from 'react';
import TodoItem from './TodoItem';
import AddField from './AddField';

const TodoField = ({ todos, removeTask, toggleTask, addTask, totalScore, editTask, SetEditMode }) => {

    const taskScore = todos.length

    return (
        <div className='to_do__field'>
            <AddField  addTask={addTask}
                       totalScore={totalScore}
                       // editMode={editMode}
            />
            <div className='to_do_wrapper'>
                <span className='to_do_title'> To do ({taskScore})</span>
                <div className='to_do_list'>
                    {todos.map(todo => {
                        return(
                            <TodoItem  key={todo.id}
                                       todo={todo}
                                       removeTask={removeTask}
                                       toggleTask={toggleTask}
                                       editTask={editTask}
                                       SetEditMode={SetEditMode}
                                       editMode={todo.editMode}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default TodoField;