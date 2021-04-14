import React, { useState, useEffect } from 'react';
import SmallButton from '../SmallButton/SmallButton';
import './Timer.css'

const Timer = (props) => {

  const [seconds, setSeconds] = useState(props.time);
  const [isActive, setIsActive] = useState(false);
  const [alarmSound] = useState(new Audio("http://soundbible.com/grab.php?id=2215&type=mp3"));

  const resetCounter = () => {
    alarmSound.pause();
    setSeconds(props.time);
    setIsActive(false);
  }

  useEffect(() => {
    let secondInterval = null;

    if (seconds < 1) {
      alarmSound.play();
    } else if (isActive) {
      secondInterval = setInterval(() => setSeconds(seconds - 1), 1000);
    }
    return () => clearInterval(secondInterval);
  }, [isActive, seconds]);

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
      <h2 className='counter'>{showCountdown()}</h2>
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