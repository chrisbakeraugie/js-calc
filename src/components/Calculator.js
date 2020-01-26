import React from 'react';
import NumberButton from './NumberButton'
import Display from './Display'
import '../index.css'
const log = console.log;


class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            display: "",
            displayedValue: ""

        }

        this.buttonPressed = this.buttonPressed.bind(this);
    }

    buttonPressed(event) {
        let value = event.target.value;
        log(value + " ran");
        if (value !== undefined) {
            this.setState({
                display: value
            })
        } else {
            this.setState({
                display: undefined
            })
        }

    }






    render() {
        return (
            <div className="calculator">
                <Display id="display" value={this.state.display} />

                <NumberButton id="one" value="1" onClick={this.buttonPressed} />
                <NumberButton id="two" value="2" onClick={this.buttonPressed} />
                <NumberButton id="three" value="3" onClick={this.buttonPressed} />


                <NumberButton id="four" value="4" onClick={this.buttonPressed} />
                <NumberButton id="five" value="5" onClick={this.buttonPressed} />
                <NumberButton id="six" value="6" onClick={this.buttonPressed} />


                <NumberButton id="seven" value="7" onClick={this.buttonPressed} />
                <NumberButton id="eight" value="8" onClick={this.buttonPressed} />
                <NumberButton id="nine" value="9" onClick={this.buttonPressed} />

                <NumberButton id="zero" value="0" onClick={this.buttonPressed} />

                <NumberButton id="decimal" value="." onClick={this.buttonPressed}  />

                <NumberButton id="plus" value="+" onClick={this.buttonPressed} />
                <NumberButton id="minus" value="-" onClick={this.buttonPressed} />
                <NumberButton id="multiply" value="X" onClick={this.buttonPressed} />
                <NumberButton id="divide" value="/" onClick={this.buttonPressed} />

                <NumberButton id="clear" value="AC" onClick={this.buttonPressed} />

                <NumberButton id="equals" value="=" onClick={this.buttonPressed} />



            </div>
        )
    }
}

export default Calculator;