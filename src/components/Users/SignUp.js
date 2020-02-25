import React from 'react';
import './SignUp.css'

function SignUp (props) {
  const emailRef = React.useRef()
  const passwordRef = React.useRef()
  const passwordConfirmRef = React.useRef()

  const formReducer = (state, action) => {
    if(action.type === 'emailChange'){
      return {
        ...state,
        touched: true,
        user_email: emailRef.current.value
      }
    }
    else if (action.type === 'passwordChange'){
      return {
        ...state,
        touched: true,
        user_password: passwordRef.current.value
      }
    }
    else if (action.type === 'passwordConfirmChange'){
      return {
        ...state,
        touched: true,
        password_confirm: passwordConfirmRef.current.value
      }
    }
  }

  const [state, dispatch] = React.useReducer(
    formReducer,
    {user_email: '', user_password: '', password_confirm: '', touched: false}
  )

  const formFeedback = () => {
    if(state.user_email.length < 5) {
      return <p>Your Username should have 5 or more characters</p>
    }
    if(state.user_password.length < 8 ){
      return <p>Passwords must have 8 or more characters</p>
    }
    if(state.user_password !== state.password_confirm){
      return <p>Passwords must match</p>
    }
  }
  const handleFormSubmit = (e, user) => {
    const {user_email, user_password, password_confirm} = user
    if(!user_email) return alert("please provide a username")
    if(!user_password) return alert("please provide a password")
    if(user_password !== password_confirm) return alert("please ensure your passwords match")
    if(user_password.length < 8 || user_password.length > 22)
      {return alert("Please provide a password between 8 and 22 characters")}
    props.createUser(e, user)
    props.history.push('/')
  }
    return (
      <div className="create-char">
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleFormSubmit(e, state)
          }}
        >
          <label>
            User Name:
            <input
              name="user_email"
              type="text"
              value={state.user_email}
              ref={emailRef}
              onChange={() => dispatch({type: 'emailChange'})}
            />
          </label>
          <label>
            Password:
            <input
              name="user_password"
              type="password"
              value={state.user_password}
              ref={passwordRef}
              onChange={() => dispatch({type: 'passwordChange'})}
            />
          </label>
          <label>
            Confirm Password:
            <input
              name="password_confirm"
              type="password"
              value={state.password_confirm}
              ref={passwordConfirmRef}
              onChange={() => dispatch({type: 'passwordConfirmChange'})}
            />
          </label>
          <button>Create</button>
        </form>
        <div className="alert">
          {state.touched ? formFeedback() : ''}
        </div>
      </div>
    );
  }

export default SignUp;

