import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './landingpage.css';
import LoginForm from './login-form';

export function LandingPage(props) {
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h1 className="title">GOODNEST</h1>
      <img className="logo" src="../ostrich.png" alt="ostrich" />
      <LoginForm />
      <footer className="register-link">
        <p>
          <p>
            <Link to="/users"> Haven't signed up? Register here. </Link>
          </p>
        </p>
      </footer>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
