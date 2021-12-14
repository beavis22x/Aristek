import React from 'react';
import './App.css';
import MenuItems from './Components/SVG/MenuItems.js';
import Header from './Components/Header';
import TodoField from './Components/TodoFeild';
import CompletedField from './Components/CompletedField';

function App() {
    return (
        <div className="App">
                <Header />
            <main className='main'>
                <aside className='aside'>
                    <div className='side__panel'>
                        <MenuItems />
                    </div>
                </aside>
                <section className='content'>
                    <div className='content__wrapper'>
                        <TodoField />
                        <CompletedField />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;
