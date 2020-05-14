import React from "react"
import {navigate} from 'gatsby'
import { handleLogin, isloggedIn } from '../services/auth'


class Login extends React.Component {

    state = {
      username : '',
      password: ''
    }
    handleUpdate = event => {
      this.setState({
        [event.target.name] : event.target.value
      })
    }
    handleSubmit = event => {
      event.preventDefault()
      handleLogin(this.state)
    }
    
    render() {
      if (isloggedIn()){
        navigate("../pages/home")
      }
      return (
        <div>
          <h1>Log In</h1>
          <form
            method = 'post'
            onSubmit = {event => {
              this.handleSubmit(event) 
              navigate('../pages/home')
            }}
          >
            <label>
              Username 
              <input 
                type ="text" 
                name="username" 
                onChange={this.handleUpdate} 
              />
            </label>
            <label>
              Password 
              <input 
                type ="password" 
                name="password" 
                onChange={this.handleUpdate} 
              />
            </label>
            <input type="submit" value="Log In" />
          </form>
        </div>
      )
    }
}
export default Login
