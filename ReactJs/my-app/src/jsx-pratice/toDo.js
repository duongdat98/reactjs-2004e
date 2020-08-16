import React, { Component } from 'react';

class toDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTodo: "",
            toDoList: []
        }
    }

    onChange = (event) => {
        this.setState({
            currentTodo: event.target.value
        })
    }

    addTodo = () => {
        this.setState({
            toDoList: [...this.state.toDoList, this.state.currentTodo]
        })
    }

    // getRowsElement = () => {
    //     // let result = [];
    //     // const {toDoList} = this.state;
    //     // for (const item of toDoList) {
    //     //     result.push(<li>{item}</li>)
    //     // }
    //     // return result;
    //     return this.state.toDoList.map(item => <li>{item}</li>)

    // }

    render() {
        return (
            <div>
                <input onChange={this.onChange} type="text" />
                <button onClick={this.addTodo}>ADD</button>
                <ul>
                {
                    this.state.toDoList.map((item, index) => <li key={index}>{item}</li>)
                }
                </ul>
            </div>
        );
    }
}

export default toDo;