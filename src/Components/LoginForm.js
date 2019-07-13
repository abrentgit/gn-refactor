import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './Input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import './LoginForm.css';

class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.email, values.password));
  }

  render() {
    // if error, return a div with an error
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {error}
        <legend>Login</legend>
        <label htmlFor="email">Email</label>
        <Field
          component={Input}
          type="email"
          placeholder="foo@bar.com"
          name="user-email"
          id="user-email"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          placeholder="1234passw0rd"
          type="password"
          name="user-password"
          id="user-password"
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          >Sign up
        </button>
        <p className="accountText">
          New to Good Nest? <Link to="/register"> Register</Link>
        </p>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(LoginForm);
