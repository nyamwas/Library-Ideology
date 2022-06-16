import React, { Component } from 'react'
import axios from "axios"


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      showHome: false,
      showLogin: true,
      validLogin: false,
      users: [],
      items: []

   }
  }


  handleLogin = (userName, userPass ) => {
   for(let i = 0; i < this.state.users.length; i++){
    if(userName === this.state.users[i].userName && userPass === this.state.users[i].userPass){
      this.setState({validLogin : true })
    } else {
      this.setState({ validLogin: false})
    }
  }
  }

  componentDidMount = () => {
    axios({
      url: "",
      method: "post",
      header: {
        Control-Access-Content-Origin: "apllication/json",
        Content-Type: "application/json",
        withCredentials: true
      }
    }).then((response) => {
      this.setState({users: response.data})
    }).catch((err) => {
      if (err) throw err

    })
  }
  render(){
  return (
    <div className="w-100 h-100 m-auto bg-info">
      {this.state.showRegister &&
        <div className={"w-50 h-50 m-5 p-5 bg-info"}>
          <form onSubmit={() => handleLogin} >
            Email: <input type="email"/>
            Password: <input type="password"/>
            <input type="submit"/>
          </form>
        </div>
      }
    </div>
  )
  }
}

export default App;
