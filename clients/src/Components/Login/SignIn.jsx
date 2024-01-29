import React from 'react'
import {connect} from 'react-redux';
import {login} from '../actions/userActions';

const SignIn = () => {
    state={
        username:"",
        password:""
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.props.login(this.state)
    }
  return (
    <div>
        <form onSubmit={this.handleSubmit}>
        <h1>Hi Welcome back</h1>  
        <label>Username</label>
         <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>
 
        <label>Password</label> 
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>
 

            <input type="submit" />
 
        </form>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
    login.userInfo =>dispatch(login(userInfo))
})

export default connect(null, mapDispatchToProps) (SignIn);