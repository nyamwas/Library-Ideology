import React, { Component } from 'react';
import LoginComponent from './LoginComponent.js'
import RegisterComponent from './RegisterComponent.js'
import myStyles from './myStyles.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            showLogin: false,
            login: {
                attr: myStyles.login,
                content: 'Login',
                placeholder: {
                    password: "******",
                    username: "user001"
                }
            },
            showRegister: true,
            register: {
                attr: myStyles.register,
                content: 'Register',
                placeholder: "user001"
            }
        }
    }

    showHiddenLogin = () => {
        if(!this.state.showLogin){
            this.setState({
                showLogin: true
            })
            this.setState({
                showRegister: false
            })
        }else{
            this.setState({
                showLogin: false
            })
            this.setState({
                showRegister: true
            })
        }
    }
    render() {
        return(
            <div style={myStyles.root}>
                <center>
                    <button
                        onClick={this.showHiddenLogin}
                        style={myStyles.tablinks.login}
                    >
                        {this.state.login.content}
                    </button>
                    <button
                        onClick={this.showHiddenLogin}
                        style={myStyles.tablinks.register}
                    >
                        {this.state.register.content}
                    </button>
                </center>
                {
                    this.state.showLogin &&
                    <LoginComponent
                        loginComponent={this.state.login.attr}
                        content={this.state.login.content}
                        placeholder={this.state.login.placeholder}
                    />
                }
                {
                    this.state.showRegister &&
                    <RegisterComponent
                        registerComponent={this.state.register.attr}
                        content={this.state.register.content}
                    />
                }
            </div>
        )
    }
}

export default App;
