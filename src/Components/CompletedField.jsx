import React from 'react';
import CompletedItem from './CompletedItem';
import TodoItem from './TodoItem';

const CompletedField = ({completeTasks, removeTask, toggleTask, isCompleted}) => {

    const completedScore = completeTasks.length

    const completedTasksList = completeTasks.map(task => {
        return (
            <CompletedItem key={task.id}
                           task={task}
                           removeTask={removeTask}
                           toggleTask={toggleTask}
            />
        )
    })

    return (
        <div className='completed__field'>
            <div className='completed__field_title'>Completed ({completedScore})</div>
            <div className='completed__field_list'>
                {completedTasksList}
            </div>
        </div>
    );
}

export default CompletedField;