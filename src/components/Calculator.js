import React from 'react';
import NumberButton from './NumberButton'
import Display from './Display'
import '../index.css';


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.currentInput = "";

        this.state = {
            display: "0",
            formula: []
        }


        this.getLastInput = this.getLastInput.bind(this);
        this.handleNumberPressed = this.handleNumberPressed.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);

        this.handleOperation = this.handleOperation.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleSolve = this.handleSolve.bind(this);

        this.checkDuplicateDecimals = this.checkDuplicateDecimals.bind(this)
    }

    getLastInput() {
        if (this.state.formula.length < 1) {
            return "empty"
        }
        return (this.state.formula[this.state.formula.length - 1])
    }

    handleNumberPressed(event) {

        let value = event.target.value;
        let formArr = this.state.formula
        if(value === "." && this.checkDuplicateDecimals() === true){
            return;
        }
        // eslint-disable-next-line 
        if (/[\+\-\*\/]/g.test(this.currentInput) === true) {
            formArr.push(this.currentInput);
            this.currentInput = "";
            this.setState({
                formula: formArr
            })
        }

        let number = this.currentInput.split("");
        number.push(value);

        //Will remove any unnecessary zeros
        if (/^0+/g.test(this.currentInput)) {
            number.shift();
        }



        this.currentInput = number.join('');
        this.setState({
            display: this.currentInput
        })
        // Use to test if number or operation
        // if (/[\+\-\*\/]/g.test(this.currentInput) === true) {

        // }

        //test if last input was an operation
        // if(/+\-*\//g.test(this.getLastInput) === true){

        //     number.push(value);

        // } else if(/[\d]/g.test(this.getLastInput) === true){

        // }
    }


    /**
     * Made this separate method in order to force the display to update
     * in the correct order (was behaving async before this method)
     * @param {} value 
     */
    updateDisplay(value) {
        this.setState({
            display: value
        })

    }

    checkDuplicateDecimals() {
        let arr = this.currentInput.split('');
        for (let i = 0; i < arr.length; i++) {
            if(arr[i] === "."){
                return true;
            } 
        }
        return false;


    }

    handleOperation(event) {
        let value = event.target.value;
        let formArr = this.state.formula;

        if (Number.parseInt(this.currentInput)) {
            formArr.push(this.currentInput);
            this.currentInput = value;
        } else {
            let array = this.currentInput.split('');
            array.push(value);
            this.currentInput = array.join('')
            // eslint-disable-next-line
            if(/\-$/g.test(this.currentInput)){
                this.currentInput = array[array.length -2] + array[array.length - 1] + "";
            } else {
                this.currentInput = value;
            }
        }
        this.setState({
            formula: formArr
        })
    }

    handleSolve() {

        let solution = this.state.formula;
        solution.push(this.currentInput);
        // eslint-disable-next-line
        solution = eval(solution.join(''))

        this.setState({
            display: solution.toString(),
            formula: []
        })
        this.currentInput = solution.toString();
    }

    handleClear() {
        this.setState({
            display: "0",
            formula: []
        })
        this.currentInput = "";
    }

    render() {
        return (
            <div className="calculator">
                <Display id="display" value={this.state.display} />

                <NumberButton id="one" value="1" onClick={this.handleNumberPressed} />
                <NumberButton id="two" value="2" onClick={this.handleNumberPressed} />
                <NumberButton id="three" value="3" onClick={this.handleNumberPressed} />


                <NumberButton id="four" value="4" onClick={this.handleNumberPressed} />
                <NumberButton id="five" value="5" onClick={this.handleNumberPressed} />
                <NumberButton id="six" value="6" onClick={this.handleNumberPressed} />


                <NumberButton id="seven" value="7" onClick={this.handleNumberPressed} />
                <NumberButton id="eight" value="8" onClick={this.handleNumberPressed} />
                <NumberButton id="nine" value="9" onClick={this.handleNumberPressed} />

                <NumberButton id="zero" value="0" onClick={this.handleNumberPressed} />

                <NumberButton id="decimal" value="." onClick={this.handleNumberPressed} />

                <NumberButton id="add" value="+" onClick={this.handleOperation} />
                <NumberButton id="subtract" value="-" onClick={this.handleOperation} />
                <NumberButton id="multiply" value="*" onClick={this.handleOperation} />
                <NumberButton id="divide" value="/" onClick={this.handleOperation} />

                <NumberButton id="clear" value="AC" onClick={this.handleClear} />

                <NumberButton id="equals" value="=" onClick={this.handleSolve} />



            </div>
        )
    }
}

export default Calculator;