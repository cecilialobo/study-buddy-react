import React, { useState, useEffect } from 'react';
import SmallButton from './SmallButton';
import './Timer.css'

const Timer = () => { 

  const [second, setSecond] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let secondInterval = null;
    if (isActive) {
      secondInterval = setInterval(() => setSecond(second - 1), 1000);
    } 
    return () => {
        clearInterval(secondInterval);
    }
  }, [isActive, second]);

  const resetCounter = () => {
    setSecond(1500);
    setIsActive(false);
  }

  return (
    <>
      <h2 className='counter'>{second}</h2>
      <div className='smallButtons'>
          <SmallButton 
            className='startBtn button'
            onClick={() => setIsActive(true)}
            title='Start'
          />
          <SmallButton 
            className='stopBtn button'
            onClick={() => setIsActive(false)}
            title='Stop'
          />
          <SmallButton 
            className='resetBtn button'
            onClick={() => resetCounter()}
            title='Reset'
          />
        </div>
      </>  
  );
}

export default Timer;