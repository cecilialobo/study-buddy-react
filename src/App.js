import React from 'react';
import './App.css';
import Header from './components/Header';
import Timer from './components/Timer';
import SmallButton from './components/SmallButton';
import Card from './components/Card';

function App() {

  const startCounter = () => {
    console.log('start');
  }
  const stopCounter = () => {
    console.log('stop');
  }
  const resetCounter = () => {
    console.log('reset');
  }

  return (
    <div className="App">
      <Header />
      <Timer />
      <div className='smallButtons'>
        <SmallButton 
          className='startBtn button'
          onClick={startCounter}
          title='Start'
        />
        <SmallButton 
          className='stopBtn button'
          onClick={stopCounter}
          title='Stop'
        />
        <SmallButton 
          className='resetBtn button'
          onClick={resetCounter}
          title='Reset'
        />
      </div>

      <Card 
        taskTitle='Walk Nala'
      />

    </div>
  );
}

export default App;
