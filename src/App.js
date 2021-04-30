import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import ToggleTimer from './components/ToggleTimer/ToggleTimer';
import TodoInput from './components/TodoInput/TodoInput';
import todos from './todos';

function App() {
  
  return (
    <>
      <Header />
      <ToggleTimer />
      <TodoInput />
      <div className='todoContainer'>
        {todos.map((todo) => {
          return (
            <Card 
            key={todo.id}
            taskTitle={todo.taskTitle}
            />
          )
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
