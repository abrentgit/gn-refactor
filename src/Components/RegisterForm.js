import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
// import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './Input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import './RegisterForm.css';
import { SubmissionError } from 'redux-form';
import { API_BASE_URL } from '/Users/anthonybrent/Projects/goodnest-test/my-goodtest/src/config.js';
import { normalizeResponseErrors } from '../actions/utils';

const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

const registerUser = user => dispatch => {
  return fetch(`${API_BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .catch(err => {
      const { reason, message, location } = err;
      if (reason === 'ValidationError') {
        // Convert ValidationErrors into SubmissionErrors for Redux Form
        return Promise.reject(
          new SubmissionError({
            [location]: message
          })
        );
      }
    });
};

export class RegisterForm extends React.Component {
  onSubmit(values) {
    const { email, password, name } = values;
    const user = { email, password, name };
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(email, password)));
  }

  render() {
    return (
      <form className="login-form">
        <legend>Sign Up</legend>
        <label htmlFor="name">Name</label>
        <Field component={Input} type="name" name="name" />
        <label htmlFor="email">Email</label>
        <Field
          component={Input}
          type="email"
          name="email"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          validate={[required, passwordLength, isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm password</label>
        <Field
          component={Input}
          type="password"
          name="passwordConfirm"
          validate={[required, nonEmpty, matchesPassword]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Register
        </button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegisterForm);
