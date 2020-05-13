import React, { Component } from "react";

class Keypad extends Component {
    constructor() {
        super();

        this.handleKeyUp = this.keyUpHandler.bind(this)
    }

    keyUpHandler() {
        console.log('Entering password...')
    }

    render() {
        return < input onKeyUp= { this.handleKeyUp } 
        type="password" 
        />
    } 
}

export default Keypad;