import React from 'react';


const NumberButton = (props) => {
    return (
        <div>
            <button onClick={props.onClick} value={props.value}>{props.value}</button>
        </div>
    )
}

export default NumberButton;