import React, { Component } from 'react';
import LoginComponent from './LoginComponent.js'
import RegisterComponent from './RegisterComponent.js'
import FirstAidForm from './FirstAidForm.js'
import myStyles from './myStyles.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            showLogin: true,
	    login: {
                attr: myStyles.login,
                content: 'Login',
                placeholder: {
                    password: "******",
                    username: "user001"
                }
            },
            showRegister: false,
            register: {
                attr: myStyles.register,
                content: 'Register',
                placeholder: "user001"
            }
        }
    }

    showHiddenLogin = (event) => {
        if(!this.state.showLogin){
            this.setState({
                showLogin: true
            })
            this.setState({
                showRegister: false
            })
	        event.currentTarget.style.backgroundColor = 'white'
	        event.currentTarget.style.color = 'yellow'
	        event.currentTarget.parentElement.childNodes[1].style.backgroundColor = 'yellow'
	        event.currentTarget.parentElement.childNodes[1].style.color = 'white'
        }else{
            this.setState({
                showLogin: false
            })
            this.setState({
                showRegister: true
            })
	        event.currentTarget.style.backgroundColor = 'white'
	        event.currentTarget.style.color = 'yellow'
	        event.currentTarget.parentElement.childNodes[0].style.backgroundColor = 'yellow'
            event.currentTarget.parentElement.childNodes[0].style.color = 'white'
        }
    }

    render() {
        return(
            <div style={myStyles.root}>
		        <DatabaseComponent

		        />
            </div>
        )
    }
}

export default App;
