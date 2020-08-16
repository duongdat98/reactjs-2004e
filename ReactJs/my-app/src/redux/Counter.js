import React, { Component } from 'react';
import { createStore } from 'redux'

const initialStateStore = {
    counter: 0,
}

function reducer(state, action) {
    console.log(action);
    console.log(state);
    switch(action.type) {
        case 'INCREASE': 
            return {
                counter: state.counter + 1
            }
        case 'INCREASE_ASYNC':
            return {
                counter: state.counter + 1
            }
        case 'DECREASE':
            return {
                counter: state.counter - 1
            }
        case 'INCREASE_STEP':
            return {
                counter: state.counter + action.step
            }
            
        default:
            return state;
    }
}

var store = createStore(reducer, initialStateStore)

var increaseAsyncAction = function(type) {
        setTimeout(() => {
            store.dispatch({ type })
        }, 1000);
    }

var increaseAction = function(type) {
    store.dispatch({ type })
}

var decreaseAction = function(type) {
    store.dispatch({ type })
}

var increaseStepAction = function(type) {
    store.dispatch({ type, step:  Math.floor(Math.random() * 10) })
}

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter,
            // randomNumber: store.getState().randomNumber
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                counter: store.getState().counter,
                // randomNumber: store.getState().randomNumber
            });
        })
    }

    increaseAsync = () => {
        increaseAsyncAction("INCREASE_ASYNC");
        this.setState({
            counter: store.getState().counter,
            // randomNumber: store.getState().randomNumber
        });
    }
    

    increase = () => {
        // this.setState({
        //     counter: this.state.counter + 1,
        // });
        increaseAction('INCREASE')
 
    }

    decrease = () => {
        decreaseAction('DECREASE')
        // this.setState({
        //     counter: this.state.counter - 1,
        // });
    }


    increaseStep = () => {
        increaseStepAction('INCREASE_STEP')
    }

    // randomNumber = (x, y) => {
       
    //     return Math.floor(Math.random() * (y - x + 1))+ x;
        
    // }

    render() {
        // console.log(this.state.randomNumber);
        return (
            <div style={{textAlign: 'center'}}>
                <h1>Counter: {this.state.counter}</h1>
                <hr/>
                <Showcounter/>
                <hr/>
                <button onClick={this.increase} >Increase</button>
                <button style={{marginLeft: '3px'}} onClick={this.decrease} >Decrease</button>
                <hr/>
                <button onClick={this.increaseStep} >Increase step random</button>
                <hr/>
                <button onClick={this.increaseAsync} >Incease Async</button>
            </div>
        );
    }
}


class Showcounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: store.getState().counter,
            // randomNumber: store.getState().randomNumber
        }
    }


    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                counter: store.getState().counter,
                // randomNumber: store.getState().randomNumber
            });
        })
    }
    
    render() {
        return (
            <div>
                Show Counter: {this.state.counter}
            </div>
        );
    }
}


export default Counter;