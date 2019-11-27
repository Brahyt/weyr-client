import React from 'react';

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
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            this.props.logIn(e, this.state)
            this.props.history.push('/')
          }}
        >
          <label>
            Email:
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
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LogIn;

