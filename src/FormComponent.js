import React from 'react'

const FormComponent = (props) => {
    return(
        <div>
            <ol>
                <li> {props.userName} </li>
                <li> {props.userMedication} </li>
            </ol>
            <a href='http://github.com/greatsilas23/myPortfolio.git'>LINK</a>
        </div>
    )
}