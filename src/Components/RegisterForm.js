import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../actions/auth';
import Input from './input';
// import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');
import { Link } from 'react-router-dom';
import { registerUser } from './Actions/Users';
import './RegisterForm.css';

export class RegisterForm extends React.Component {
  onSubmit(values) {
    const { name, email, password } = values;

    const user = { name, email, password };

    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(email, password)));
  }

  render() {
    return (
      <form
        className="signup-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
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
          New to Grateful Nest? <Link to="/register"> Sign Up</Link>
        </p>
      </form>
    );
  }
}

export default RegisterForm;
