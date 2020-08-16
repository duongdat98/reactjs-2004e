import React, { Component } from 'react';
import { increase, increaseAsync } from '../actions/counterAction';
import { increaseMark } from '../actions/studentAction';
import { connect } from 'react-redux'


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }

    increase = () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // });
        this.props.increase()
    }

    increaseAsync = () => {
        this.props.increaseAsync()
    }

    increaseMark = () => {
        this.props.increaseMark()
    }
    
    render() {
        return (
            <div style={{textAlign : 'center'}}>
                <h1>Counter: {this.props.counter.value}  </h1>
                <h1>Student: {this.props.student.mark}  </h1>
                <hr/>
                <button onClick={this.increase} >Increase</button>
                <button onClick={this.increaseAsync} >IncreaseAsync</button>
                <button onClick={this.increaseMark} >Increase Mark</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
        student: state.student
    }
}

function mapDispatchToProp() {
    return {
        increase, 
        increaseAsync,
        increaseMark
    }
}

export default connect(mapStateToProps, mapDispatchToProp())(Counter);