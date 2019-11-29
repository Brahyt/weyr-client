import React from 'react';
import './SignUp.css'

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user_email: '',
      user_password: '',
      password_confirm: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render(){
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            this.props.createUser(e, this.state)
            this.props.history.push('/')
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
      </div>
    );
  }
}

export default SignUp;

