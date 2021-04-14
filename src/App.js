import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Toggle from './components/ToggleComponents/ToggleComponents';

function App() {

  const todos = [{
    taskTitle: 'Walk Nala',
    id: 1
  }, 
  {
    taskTitle: 'Study React Context',
    id: 2
  }, 
  { 
    taskTitle: 'Buy Groceries',
    id:3 
  }];
  
  return (
    <>
      <Header />
      <Toggle />
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
