import React from 'react';
import NumberButton from './NumberButton'
import Display from './Display'
import '../index.css'
const log = console.log;


class Calculator extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            display: "0",
            currentValue: "", //Can't use display to store current value, it updates async
            storedValue: "",
            formulaToEval: "",
            clearDisplay: false,
           // contAfterSolve: true

        }

        this.handleNumberPressed = this.handleNumberPressed.bind(this);
        this.handleOperation = this.handleOperation.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.updateDisplay = this.updateDisplay.bind(this);
        this.handleSolve = this.handleSolve.bind(this);
        this.updateCurrentValue = this.updateCurrentValue.bind(this);

    }

    /**
     * This method uses an array to "build" a number,
     * then stores it as the currentValue
     * @param {*} event 
     */
    handleNumberPressed(event) {
        if(typeof(this.state.currentValue) === typeof(0)){
        //     this.setState({
        //         currentValue: ""
        //     }, () => {

        //     })
        // }
        this.state.currentValue = ""; //<<<<<<------------ REPLACE WITH A LIFECYCLE METHOD OR SOMETHING
        //                                                 NOT AN APPROPRIATE WAY TO CHANGE STATE
        }
        let value = event.target.value;
        let numArr = this.state.currentValue.split("");

        //Uses regex to prevent number from starting with zero
        if (/^0+/g.test(this.state.currentValue)) {
            log("started with zero")
            numArr.shift();
        }

        numArr.push(value);
        value = numArr.join("")
        this.setState({
            currentValue: value
        }, () => {
            this.updateDisplay(this.state.currentValue)
        })

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


    updateCurrentValue(value){
        this.setState({
            currentValue: ""
        })
    }


    handleOperation(event) {
        let op = event.target.value;
        let formArr = this.state.formulaToEval.split("")

        //Starts the formula
        if (formArr.length < 1 && op !== "-"
            ) {
            formArr[0] = this.state.currentValue;
            formArr.push(op);

        } else { //pushes on the current value if chaining commands
            formArr.push(this.state.currentValue);
            formArr.push(op)
        }
        op = formArr.join('')//reseting to string
        log(op +" op")
        this.setState({
            formulaToEval: op,
            clearDisplay: true
        })
        this.setState({
            currentValue: ""
        })


    }

    handleClear() {
        this.setState({
            display: "0",
            currentValue: "", //Can't use display to store current value, it updates async
            storedValue: "",
            formulaToEval: "",
            clearDisplay: false
        })
    }

    handleSolve(event) {
        let equation = this.state.formulaToEval;
        equation = equation.split('');
        equation.push(this.state.currentValue);
        log(equation)

        if(/[+\-*/]/g.test(equation[equation.length-1]) == true){
            equation = equation.splice(0, equation.length-2)
            log("ran regex")
        } else if(this.state.currentValue === "" && /[+\-*/]/g.test(equation[equation.length-2]) == true){
            equation = equation.splice(0, equation.length - 3)
            log("ran empty current value and regex")
            
        }

        log(equation + " after regeex")
        equation = equation.join('');
        let solution = eval(equation)

        this.setState({
            display: solution,
            currentValue: solution,
            storedValue: "",
            formulaToEval: "",
            clearDisplay: true,
//          contAfterSolve: false

        })

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