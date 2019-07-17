import React from 'react';
import RegisterForm from './RegisterForm';
import { Link, Redirect } from 'react-router-dom';

export function RegisterPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="home">
      <h2>Grateful Nest Register</h2>
      <RegisterForm />
      <Link to="/login">Login</Link>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegisterPage);
