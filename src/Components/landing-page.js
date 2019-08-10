import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './landingpage.css';
import LoginForm from './login-form';

export function LandingPage(props) {
  if (props.loggedIn) {
    console.log('you are logged in');
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h1>GOOD NEST</h1>
      <h2>Tell Us What's Good!</h2>
      <LoginForm />
      <div className="register-link">
        <p>Don't have an account yet?</p>
        <Link to="/users">Register</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
