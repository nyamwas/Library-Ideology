import React from 'react'

const FirstAidForm = () => {
	return(
    <div style={{width: '50vw', backgroundColor: 'white', margin: 'auto', borderRadius: '10px'}}>
        <center><h1 style={{color: 'yellow'}}>Register</h1></center>
        <center>
        <form>
            <p>Tick any underlying conditions: </p>
            <label htmlFor="hypertension">hypertension</label><br/>
            <input id="hypertension" type="checkbox" /><br/>
            <label htmlFor="diabetes">diabetes</label><br/>
            <input id="diabetes" type="checkbox" /><br/>
            <label htmlFor="acidity">acidity</label><br/>
            <input id="acidity" type="checkbox" /><br/>
            <input type="submit" value="Submit"/>
            <input type="reset" value="Clear"/>
        </form>
        </center>
    </div>
    )
}
export default FirstAidForm


