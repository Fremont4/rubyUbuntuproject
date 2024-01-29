import React from 'react'
import {connect} from 'react-redux';
import {register} from '../actions/userActions';

const SignUp = () => {
    state={
        username:"",
        password:"",
        avatar:"",
        bio:""
    }

    handleChange = event =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.props.register(this.state)
    }
  return (
    <div>
        <form onSubmit={this.handleSubmit}>
        <h1>Hi Welcome</h1>  
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
 
        <label>Avatar</label>
        <input
            name='avatar'
            placeholder='Avatar (URL)'
            value={this.state.avatar}
            onChange={this.handleChange}
            /><br/>
 
          <label>Bio</label>
          <textarea
            name='bio'
            placeholder='Bio'
            value={this.state.bio}
            onChange={this.handleChange}
            /><br/>

            <input type="submit" />
 
        </form>
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
    register.userInfo =>dispatch(register(userInfo))
})

export default connect(null, mapDispatchToProps) (SignUp);