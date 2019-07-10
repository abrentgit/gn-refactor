import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterForm.css';

export class RegisterForm extends React.Component {
  render() {
    return (
      <form className="signup-form">
        <fieldset>
          <legend>Sign up</legend>
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
          New to Goodnest? <Link to="/register"> Sign Up</Link>
        </p>
      </form>
    );
  }
}

export default RegisterForm;
