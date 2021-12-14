import React, {useState} from 'react';
import './App.css';
import MenuItems from './Components/SVG/MenuItems.js';
import Header from './Components/Header';
import TodoField from './Components/TodoFeild';
import CompletedField from './Components/CompletedField';

function App() {

    const [todos, SetTodos] = useState([
        {
            id: Math.random().toString(10).substr(2, 5),
            task: 'userInput',
            complete: false,
            editMode: false
        },
        {
            id: Math.random().toString(10).substr(2, 5),
            task: 'userInput',
            complete: false,
            editMode: false
        }
    ]);

    const [completeTasks, SetCompleteTasks] = useState([
        {
            id: Math.random().toString(10).substr(2, 5),
            task: 'userInput',
            complete: true,
            editMode: false
        },
        {
            id: Math.random().toString(10).substr(2, 5),
            task: 'userInput',
            complete: true,
            editMode: false
        }
    ]);

    const addTask = (userInput) => {
        if (userInput) {
            const newItem = {
                id: Math.random().toString(10).substr(2, 5),
                task: userInput,
                complete: false
            }
            SetTodos([...todos, newItem]);
        }
    }

    const editTask = (editInput, id) => {
        SetTodos(todos.map(obj => { // If obj.id == id return copy obj with change properties else
                if (obj.id === id) { // return unchanged obj
                    return {...obj, task: editInput, editMode: false};
                }
                return obj;
            })
        )
    }

    const SetEditMode = (id) => {
        SetTodos(todos.map(obj => { // If obj.id == id return copy obj with change property else
                if (obj.id === id) { // return unchanged obj
                    return {...obj, editMode: true};
                }
                return obj;
            })
        )
    }

    const removeTask = (id) => {
        if (todos.filter(obj => obj.id === id)) {
            SetTodos(todos.filter(obj => obj.id !== id));
        }
        SetCompleteTasks(completeTasks.filter(obj => obj.id !== id))
    }

    const toggleTask = (id) => { // удаляет из списка тодо и добавляет в список комплит таск и наоборот

        const fromTo = (arrayFrom, setFrom, arrayTo, setTo) => { //  function for DRY)
            const toggleTodo = arrayFrom.filter(obj => obj.id === id)// return array with 1 obj
            toggleTodo[0].complete = true;

            setFrom(arrayFrom.filter(obj => obj.id !== id))
            setTo([...arrayTo, ...toggleTodo])
        }


        if (todos.find(obj => obj.id === id)) { // return obj or undefined
            fromTo(todos, SetTodos, completeTasks, SetCompleteTasks)
        } else {
            fromTo(completeTasks, SetCompleteTasks, todos, SetTodos)
        }

    }

    const totalScore = todos.length + completeTasks.length

    return (
        <div className="App">
            <Header/>
            <main className='main'>
                <aside className='aside'>
                    <div className='side__panel'>
                        <MenuItems/>
                    </div>
                </aside>
                <section className='content'>
                    <div className='content__wrapper'>
                        <TodoField todos={todos}
                                   totalScore={totalScore}
                                   removeTask={removeTask}
                                   toggleTask={toggleTask}
                                   addTask={addTask}
                                   SetEditMode={SetEditMode}
                                   editTask={editTask}
                        />
                        <CompletedField completeTasks={completeTasks}
                                        removeTask={removeTask}
                                        toggleTask={toggleTask}
                                        addTask={addTask}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
