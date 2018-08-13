import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {increment, decrement} from '../AC'

class Counter extends Component {
    static propTypes = {
        counter: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <h2>{this.props.counter}</h2>
                <button onClick = {this.handleIncrement}>Increment me</button>
                <button onClick = {this.handleDecrement}>Decrement me</button>
            </div>
        )
    }

    handleIncrement = () => {
        const {increment} = this.props
        increment()
    }

    handleDecrement = () => {
        const {decrement} = this.props;
        decrement();
    }
}

export default connect((state) => ({
    counter: state.count
}), { increment, decrement })(Counter)