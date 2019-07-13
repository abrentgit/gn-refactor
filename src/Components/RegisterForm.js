import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { login } from '../actions/auth';
import Input from './Input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions/users';
import './RegisterForm.css';

const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

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
          <label htmlFor="name">Name</label>
          <Field
            component={Input}
            type="name"
            placeholder=""
            name="user-name"
            id="user-name"
            validate={[required, nonEmpty, isTrimmed]}
          />
          <label htmlFor="email">Email</label>
          <Field
            component={Input}
            type="email"
            placeholder="foo@bar.com"
            name="user-email"
            id="user-email"
            validate={[required, passwordLength, isTrimmed]}
          />
          <label htmlFor="password">Password</label>
          <Field
            component={Input}
            placeholder="1234passw0rd"
            type="password"
            name="user-password"
            id="user-password"
            validate={[required, nonEmpty, matchesPassword]}
          />
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
          >
            Sign up
          </button>
        </fieldset>
        <p className="accountText">
          New to Grateful Nest? <Link to="/register"> Sign Up</Link>
        </p>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegisterForm);
