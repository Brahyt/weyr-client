import React from 'react';
import './LogIn.css';

function LogIn(props) {
  const {logIn} = props;
  const nameRef = React.useRef();
  const passwordRef = React.useRef();

  const submitLogin = e => {
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const payLoad = {user_email: name, user_password: password};
    props.logIn(e, payLoad);
  };
  return (
    <div className="form-container">
      <form
        onSubmit={e => {
          submitLogin(e);
        }}>
        <label>
          User Name:
          <input name="user_email" type="text" ref={nameRef} required />
        </label>
        <label>
          Password:
          <input
            name="user_password"
            type="password"
            ref={passwordRef}
            required
          />
        </label>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
