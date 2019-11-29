import React from 'react';
import './LogIn.css'

class LogIn extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      user_email: '',
      user_password: '',
    }
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }
  render(){
    const submitLogin = (e) => {
      this.props.logIn(e, this.state)
    }
    return (
      <div className="form-container">
        <form
          onSubmit={(e) => {
            submitLogin(e)
          }}
        >
          <label>
            User Name:
            <input
              name="user_email"
              type="text"
              value={this.state.user_email}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </label>
          <label>
            Password:
            <input
              name="user_password"
              type="password"
              value={this.state.user_password}
              onChange={(e) => this.handleChange(e)}
              required
            />
          </label>
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;

