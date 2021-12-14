import React, {useState} from 'react';
import EditBtn from './SVG/EditBtn';
import CopyBtn from './SVG/CopyBtn';
import DeleteBtn from './SVG/DeleteBtn';
import EditField from './EditField';

const TodoItem = ({todo, removeTask, toggleTask, SetEditMode, editTask}) => {

    // const[userInput, SetUseInput] = useState('');
    // const [editMode, SetEditMode] = useState(false)

    const editModeHandler = (id) => {
        SetEditMode(id)
        // editTask(id);
    }

    return (
        <div key={todo.id} className='to_do_item__wrapper'>
            {todo.editMode ? <EditField id={todo.id}
                                        editMode={todo.editMode}
                                        task={todo.task}
                                        editTask={editTask}
                />
                :
                <div className='to_do_item'>
                    <div className='to_do_task'>
                        <input type='checkbox'
                               className='to_do_item_checkbox'
                               onChange={() => toggleTask(todo.id)}
                        />
                        <span className='to_do_item_text'>{todo.task}</span>
                    </div>
                    <div className='to_do_buttons'>
                        <div className='edit__btn' onClick={() => editModeHandler(todo.id)}><EditBtn/></div>
                        <div className='copy__btn'><CopyBtn/></div>
                        <div className='delete__btn' onClick={() => removeTask(todo.id)}><DeleteBtn/></div>
                    </div>
                </div>
            }
        </div>
    );
}

export default TodoItem;