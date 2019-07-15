import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser } from '../actions/users';
import { login } from '../actions/auth';
import Input from './Input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import './RegisterForm.css';
const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class RegisterForm extends React.Component {
  onSubmit(values) {
    console.log(this.props);

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
