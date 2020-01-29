import React from 'react';


const NumberButton = (props) => {
    return (
        <button className="button" id={props.id} onClick={props.onClick} value={props.value}>
            {props.value}
        </button>
    )
}

export default NumberButton;