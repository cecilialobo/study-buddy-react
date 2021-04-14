import React, { useState } from 'react';
import SmallButton from '../SmallButton/SmallButton';
import './Card.css';

const Card = (props) => {

    const [status, setStatus] = useState('to do');
    const [btnStatus, setBtnStatus] = useState('done');

    const checkIfDone = () => {
        status === 'to do' ? setStatus('done') : setStatus('to do');
        btnStatus === 'done' ? setBtnStatus('to do') : setBtnStatus('done');
    }

    return (
        <div className='card'>
            <h3 className='cardContent'>{props.taskTitle}</h3>
            <p className='cardStatus cardContent'>Status: {status}</p>
            <SmallButton
                className='cardButton cardContent'
                onClick={checkIfDone}
                title={`Mark as ${btnStatus}`}
            />
        </div>
    )
}

export default Card;