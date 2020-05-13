// Code EyesOnMe Component Here
import React, { Component } from "react";

class EyesOnMe extends Component {
    constructor() {
        super();

        this.handleFocus = this.focusHandler.bind(this)
        this.handleBlur = this.blurHandler.bind(this)
    }

    focusHandler() {
        console.log('Good!')
    }

    blurHandler() {
        console.log('Hey! Eyes on me!')
    }

    render() {
        return <button onFocus= {this.handleFocus}
        onBlur = {this.handleBlur}
        ></button>
    }
}

export default EyesOnMe;