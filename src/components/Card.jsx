import React, { useState } from 'react';
import SmallButton from './SmallButton';

const Card = (props) => {

    const [status, setStatus] = useState('undone');

    const checkIfDone = () => {
        status === 'undone' ? setStatus('done') : setStatus('undone');
    }

    return (
        <div className='card'>
            <h3>{props.taskTitle}</h3>
            <p>Status: {status}</p>
            <SmallButton 
                className='taskBtn button'
                onClick={checkIfDone}
                title='Mark as done'
            />
        </div>
    )
}

export default Card;