//stateless functional component

import React from 'react'

const FirstAidComponent = () => {

    return(
    <div style={{width: '50vw', backgroundColor: 'white', margin: 'auto', borderRadius: '10px'}}>
        <center><h1 style={{color: 'yellow'}}>Register</h1></center>
        <center>
        <form>
            <label htmlFor="userName">Username</label><br/>
            <input id="userName" type="text" /><br/>
            <label htmlFor="userAge">Age</label><br/>
            <input id="userAge" type="number" /><br/><br />
            <input type="submit" value="Register"/>
            <input type="submit" value="Clear"/>
        </form>
        </center>
    </div>
    )
}
export default FirstAidComponent