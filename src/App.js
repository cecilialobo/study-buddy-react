import React from 'react';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import Card from './components/Card';
import Footer from './components/Footer';

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
      <Timer />
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
