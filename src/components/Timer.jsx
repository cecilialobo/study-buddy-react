import React, { useState, useEffect } from 'react';
import './Timer.css'

const Timer = () => { 

    const [minute, setMinute] = useState(25);

  useEffect(() => {
    const timer =
      minute > 0 && setInterval(() => setMinute(minute - 1), 60000);
    return () => clearInterval(timer);
  }, [minute]);

  return (
    <h2 className='counter'>{minute}:00</h2>
  );
}

export default Timer;