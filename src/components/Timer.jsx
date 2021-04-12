import React, { useState, useEffect } from 'react';
import SmallButton from './SmallButton';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import './Timer.css'

const Timer = () => { 

  const [seconds, setSeconds] = useState(1500);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let secondInterval = null;
    if (isActive) {
        secondInterval = setInterval(() => setSeconds(seconds - 1), 1000);
        if (seconds < 0) {
          setSeconds(1500);
          setIsActive(false);
        }
    } 
    return () => clearInterval(secondInterval);
  }, [isActive, seconds]);

  const resetCounter = () => {
    setSeconds(1500);
    setIsActive(false);
  }

  const showCountdown = () => {
    const remainingMinutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
      return `${remainingMinutes}:0${remainingSeconds}`
    }
    return `${remainingMinutes}:${remainingSeconds}`
  } 

  return (
    <>
     <div className='circleTimer'>
      <CountdownCircleTimer
        isPlaying={isActive}
        duration={1500}
        size={240}
        colors={[
          ['#FAD1C6', 0.33],
          ['#E0ECF6', 0.33],
          ['#ECFDF0', 0.33],
        ]}
      >
        <h2 className='counter'>{showCountdown()}</h2>
      </CountdownCircleTimer>
      </div>
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