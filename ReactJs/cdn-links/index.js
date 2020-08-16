// import React, { Component } from 'react';
const newMenber = "A B C";
var element = (
    <div>
        <h1>Hello world</h1>
        <h3>Welcome: {newMenber}</h3>
        <p>This is hihi</p>
    </div>
);


class App extends React.Component {
    constructor(props) {
        super(props);
        // this.counter = 0;
        this.state = {
            counter: 0
        }
    }


    increase = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }
    decrease = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }


    render() {
        return (
            <div>
                <h3 style={{color: 'red'}}>Counter: {this.state.counter}</h3>
                <button onClick={this.increase}>Increase</button><br></br>
                <button onClick={this.decrease}>Decrease</button>
            </div>
        );
    }
}


class Oclock extends React.Component {
    constructor(props) {
        super(props);
        // setInterval(this.interval, 1000)
        this.state = {
            timer: "-- : -- : --"
        }
    }

    interval = () => {
        this.setState({
            timer: new Date().toLocaleTimeString()
        })
    }

    start = () => {
        this.interval()
        this.running = setInterval(this.interval, 1000)
    }

    stop = () => {
        clearInterval(this.running);
        this.setState({
            timer: "-- : -- : --"
        })
    }

    render() {
        return (
            <div>
                 <p>{this.state.timer}</p>
                 <button onClick={this.start}>Start</button>
                 <button onClick={this.stop}>Stop</button>
            </div>
        );
    }
}


ReactDOM.render(<Oclock/>, document.getElementById("app"));

// export default App;