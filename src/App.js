import React from 'react';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import Card from './components/Card';

function App() {

  return (
    <>
      <Header />
      <Timer />
      <Card 
        taskTitle='Walk Nala'
      />
    </>
  );
}

export default App;
