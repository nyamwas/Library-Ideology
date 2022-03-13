import React from 'react'
import Username from './res/Username.jpg'
import Password from './res/Password.jpg'
const LoginComponent = (props) => {
    return(
        <div
            style={props.loginComponent}
        >
            <h2
                style={props.loginComponent.form.heading}
            >
                {props.content}
            </h2>
            <form
                method="POST"
                action="http://localhost:3000/login-form"
            >
                <center>
                    <img
                        src={Username}
                        style={props.loginComponent.form.username.icon}
                        alt="username"
                    />
                    <br/>
                    <input
                        style={props.loginComponent.form.username}
                        id="userName"
			name="userName"
                        type="text"
                        placeholder={props.placeholder.username}
                    />
                    <br/>
                    <img
                        src={Password}
                        style={props.loginComponent.form.password.icon}
                        alt="password"
                    />
                    <br/>
                    <input
                        style={props.loginComponent.form.password}
                        id="userPass"
			name="userPass"
                        type="password"
                        placeholder={props.placeholder.password}
                    />
                    <br/>
                    <br />
                    <input
                        style={props.loginComponent.form.submit}
                        type="submit"
                        value="Login"
                    />
                    <input
                        style={props.loginComponent.form.clear}
                        type="reset"
                        value="Clear"
                    />
                    <br/>
                </center>
            </form>
        </div>
    )
}
export default LoginComponent
