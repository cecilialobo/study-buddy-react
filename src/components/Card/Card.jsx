import React, { useState } from 'react';
import SmallButton from '../SmallButton/SmallButton';
import './Card.css';

const Card = (props) => {

    const [status, setStatus] = useState('to do');
    const [btnStatus, setBtnStatus] = useState('done');
    const [btnStyle, setBtnStyle] = useState('cardContent');
    const [cardStyle, setCardStyle] = useState('card')

    const checkIfDone = () => {
        status === 'to do' ? setStatus('done') : setStatus('to do');
        btnStatus === 'done' ? setBtnStatus('to do') : setBtnStatus('done');
        btnStyle === 'cardContent' ? setBtnStyle ('cardContentDone') : setBtnStyle ('cardContent');
    }

    const deleteCard = () => {
        setCardStyle('deleted');
    }

    return (
        <div className={cardStyle}>
            <h3 className={btnStyle}>{props.taskTitle}</h3>
            <p className='cardStatus cardContent'>Status: {status}</p>
            <SmallButton
                className='cardButton'
                onClick={checkIfDone}
                title={`Mark as ${btnStatus}`}
            />
            <SmallButton
                className='cardButton'
                onClick={deleteCard}
                title='Delete'
            />
        </div>
    )
}

export default Card;