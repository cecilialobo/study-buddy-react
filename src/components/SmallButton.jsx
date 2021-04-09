import React from 'react';
import './SmallButton.css'

const SmallButton = (props) => {
    return (
        <button className={props.className} onClick={props.onClick}>{props.title}</button>
    )
}

export default SmallButton;