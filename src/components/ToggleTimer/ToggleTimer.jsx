import React, { useState } from 'react';
import Timer from '../Timer/Timer';
import './ToggleTimer.css';

const ToggleTimer = () => {
   const [toggle, setToggle] = useState(true);
   const toggleChecked = () => setToggle(toggle => !toggle);
   const breakTitle = 'Break';
   const timerTitle = 'Timer';

   return (
      <>
         <button className='breakButton' type='button' onClick={toggleChecked}>
            {toggle ? breakTitle : timerTitle}
         </button>
         {toggle && <Timer time='1500' />}
         {!toggle && <Timer time='300' />}
      </>
   );
}

export default ToggleTimer;