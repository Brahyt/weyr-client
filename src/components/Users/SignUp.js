import React from 'react';
import './SignUp.css'

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user_email: '',
      user_password: '',
      password_confirm: '',
      touched: false,
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      touched: true,
    })
  }
  formFeedback = () => {
    if(this.state.user_email.length < 5) {
      return <p>Your Username should have 5 or more characters</p>
    }
    if(this.state.user_password.length < 8 ){
      return <p>Passwords must have 8 or more characters</p>
    }
    if(this.state.user_password !== this.state.password_confirm){
      return <p>Passwords must match</p>
    }
  }
  handleFormSubmit = (e, user) => {
    const {user_email, user_password, password_confirm} = user
    if(!user_email) return alert("please provide a username")
    if(!user_password) return alert("please provide a password")
    if(user_password !== password_confirm) return alert("please ensure your passwords match")
    if(user_password.length < 8 || user_password.length > 22)
      {return alert("Please provide a password between 8 and 22 characters")}
    this.props.createUser(e, user)
    this.props.history.push('/')
  }
  render(){
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            this.handleFormSubmit(e, this.state)
          }}
        >
          <label>
            User Name:
            <input 
              name="user_email"
              type="text"
              value={this.state.user_email}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Password:
            <input
              name="user_password"
              type="password"
              value={this.state.user_password}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <label>
            Confirm Password:
            <input
              name="password_confirm"
              type="password"
              value={this.state.password_confirm}
              onChange={(e) => this.handleChange(e)}
            />
          </label>
          <button>Create</button>
        </form>
        <div className="alert">
          {this.state.touched ? this.formFeedback() : ''}
        </div>
      </div>
    );
  }
}

export default SignUp;

