import React from 'react';
import NumberButton from './NumberButton'
import Display from './Display'

const log = console.log;


class Calculator extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            display: "",
            displayedValue: ""

        }

        this.buttonPressed = this.buttonPressed.bind(this);
    }

    buttonPressed(event){
       let value = event.target.value;
        if(value !== undefined){
            this.setState({
                display: value
            })
        }
        
    }

    


    render(){
        return(
            <div>
            <Display value={this.state.display} />
            <NumberButton value={1} onClick={this.buttonPressed}/>
            <NumberButton value={2} onClick={this.buttonPressed} />
            <NumberButton value={3} onClick={this.buttonPressed}/>
            <NumberButton value={4} onClick={this.buttonPressed}/>
            <NumberButton value={5} onClick={this.buttonPressed}/>
            <NumberButton value={6} onClick={this.buttonPressed}/>
            <NumberButton value={7} onClick={this.buttonPressed}/>
            <NumberButton value={8} onClick={this.buttonPressed}/>
            <NumberButton value={9} onClick={this.buttonPressed}/>
            <NumberButton value={0} onClick={this.buttonPressed}/>
            
            </div>
        )
    }
}

export default Calculator;