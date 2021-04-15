import React from 'react';
import SmallButton from '../SmallButton/SmallButton'
import './TodoInput.css';

const TodoInput = () => {
    return (
        <div className='inputContainer'>
          <label className='inputLabel' htmlFor='todo'>What's our next to do?</label>
          <input className='inputContent' type='text' id='todo'></input>
          <SmallButton 
            className='todoButton'
            onClick={() => {console.log('clicked')}}
            title="Let's do it!"
          />
        </div>
    )
}

export default TodoInput;