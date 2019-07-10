import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends React.Component {
  render() {
    return (
      <form className="login-form">
        <fieldset>
          <legend>Login</legend>
          <label>Name</label>
          <input
            type="name"
            placeholder=""
            name="user-name"
            id="user-name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="foo@bar.com"
            name="user-email"
            id="user-email"
            required
          />
          <label>Password</label>
          <input
            placeholder="1234passw0rd"
            type="password"
            name="user-password"
            id="user-password"
            required
          />
          <button type="submit">Sign up</button>
        </fieldset>
        <p className="accountText">
          Already signed up? <Link to="/"> Login</Link>
        </p>
      </form>
    );
  }
}

export default LoginForm;
