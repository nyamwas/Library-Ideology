import React from 'react'

const LoginComponent = () => {
    return(
        <div style={{width: '50vw', backgroundColor: 'white', margin: 'auto', borderRadius: '10px'}}>
            <center><h1 style={{color: 'yellow'}}>Login</h1></center>
            <center>
            <form>
                <label htmlFor="userName">Username</label><br/>
                <input id="userName" type="text" /><br/>
                <label htmlFor="userPass">Password</label><br/>
                <input id="userPass" type="password" /><br/><br />
                <input type="submit" value="Login"/>
                <input type="submit" value="Sign-Up"/>
            </form>
            </center>
        </div>
    )
}
export default LoginComponent