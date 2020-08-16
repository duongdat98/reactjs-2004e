import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    onInputChange = (event) => {
        this.setState({...this.state, [event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.onInputChange} />
            </div>
        );
    }
}

export default ClassComponent;