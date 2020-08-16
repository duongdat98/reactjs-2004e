import React, { Component } from 'react';

class Parent extends Component {
    constructor(props){
        super(props);
        console.log('Constructor: Component parent init');
        this.state = {
            counter: 1,
            // data: {
            //     counter: 0
            // }
            showChild: true,
        }
    }

    componentDidMount() {
        console.log('ComponentDidMount: Component Parent mounting'); 
        // this.setState({
        //     counter: 0
        // })
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    changeStatus = () => {
        this.setState({
            showChild: !this.state.showChild
        });
    }


    render() {
        console.log('Render: Component parent');     
        return (
            <div>
                Parents
                <hr></hr>
                Counter: {this.state.counter}
                <hr/>
                <button onClick={this.increase}>Increase</button>
                <hr/>
                <button onClick={this.changeStatus}>{this.state.showChild ? "Hidden" : "Show"}</button>
                {this.state.showChild && <Child />}
            </div>
        );
    }

    componentDidUpdate() {
        console.log('ComponentDidUpdate: Component Did update/');     
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor: Child');
        this.state = {
            timer: "-- : -- : --"
        }
        
    }

    componentDidMount() {
        console.log('ComponentDidMount: Child');
        setInterval(() => {
            this.setState({
                timer: new Date().toLocaleTimeString()
            });
        }, 1000)
    }

    render() {
        return (
            <div>
                Child
                <br/>
                Timer: {this.state.timer}
            </div>
        )
    }
    componentDidUpdate() {
        console.log('ComponentDidUpdate: Child');
        
    }
    componentWillUnmount() {
        console.log('ComponentWillUnmount: Child');
        
    }
}

export default Parent;