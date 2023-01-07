import React, { Component } from 'react'

Class FirstAid extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'n_sil',
            medication: 'Zenopham',
            phone: '+1(204)6120103'
        }
    }

    render(){
        return(
            <div>
                <FormComponent
                    userName = {this.state.username}
                    userMedication = {this.state.medication}
                    userPhone = {this.state.phone}
                />
                <TableComponent
                    userName = {this.state.username}
                    userMedication = {this.state.medication}
                    userPhone = {this.state.phone}
                />
            </div>
        )
    }
}

export default FirstAid