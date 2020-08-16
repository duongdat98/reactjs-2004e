import React, { Component } from 'react';
import { login } from './api'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                username: "",
                password: ""
            },
            message: {
                errs: "",
                success: ""
            },
            loading: false,
        }
    }



    onDataChange = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        const { name, value } = event.target;
        // if(name === "username") {
        //     this.setState({
        //         data : {
        //             username: value,
        //             password: this.state.data.password,
        //         },
        //     });
        // }
        // else if(name === "password") {
        //     this.setState({
        //         data : {
        //             username: this.state.data.username,
        //             password: value
        //         }
        //     })
        // }
        this.setState({ data: { ...this.state.data, [name]: value } })
    }

    submit = () => {
        this.setState({loading: true, message: {}});
        login(this.state.data)
            .then(res => {
                console.log("data on response: ", res);
                //data response: res.data
                // store to localStorage
                // redirect to homepage
                this.setState({loading: false});
            })
            .catch((err) => {
                console.log("err on response: ", err);
                console.log("err response: ", err.response);
                this.setState({ message: { err: err.response.data.err }, loading: false })
            });
            
    }

    render() {
        const { message, loading } = this.state
        return (
            <div>
                <form action="server.js">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={this.onDataChange} /> <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" onChange={this.onDataChange} /> <br />
                    {message.err && <p style={{ color: "red" }}> {message.err} </p>}
                    {loading && <p style={{color: "green"}}>Loading....</p>}
                    <input type="button" value="Submit" onClick={this.submit} />
                </form>
            </div>
        );
    }
}

export default Login;