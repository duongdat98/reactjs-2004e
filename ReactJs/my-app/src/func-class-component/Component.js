import React, { Component, PureComponent,  } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            student: {
                name: 'Duong Dat',
                class: 21,
                mark: 10
            }
        }
    }

    increase = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    }

    increase0 = () => {
        this.setState({
            counter: this.state.counter,
        });
    }

    increaseMark = () => {
        this.setState({
            student: {
                ...this.state.student,
                mark: this.state.student.mark + 1
            }
        });
    }

    render() {
        const { student } = this.state
        return (
            <div>
                {/* <h1>Counter: {this.state.counter}</h1> */}
                <ShowCounter counter={this.state.counter} />
                <ShowCounterFunc counter={this.state.counter} />
                Show Students: <ShowStudents student={student} />
                <hr/>
                <button onClick={this.increaseMark} >Increase Mark</button>
                <hr/>
                <button onClick={this.increase} >Increase</button>
                <button onClick={this.increase0} >Increase0</button>
                
            </div>
        );
    }
}



class ShowStudents extends PureComponent {
    render() {
        const {student} = this.props
        return (
            <div>
               Name: {student.name} <br/>
               Class: {student.class} <br/>
               Mark: {student.mark}
            </div>
        );
    }
}


class ShowCounter extends PureComponent {
    render() {
        console.log("Class rendering....")
        return (
            <div>
                <p>Show Counter: {this.props.counter}</p>
            </div>
        );
    }
}

const ShowCounterFunc = React.memo(({ counter }) => {
    return <p>Show Counter: { counter }</p>
})




export default ClassCounter;