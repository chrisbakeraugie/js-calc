import React from 'react';


const NumberButton = (props) => {
    return (
        // <div id={props.id} className="button-div">
        //     <button className="button"  onClick={props.onClick} value={props.value}>
        //     {props.value}
        //     </button>
        // </div>
        <button className="button" id={props.id} onClick={props.onClick} value={props.value}>
            {props.value}
        </button>
    )
}

export default NumberButton;