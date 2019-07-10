import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import goodLogo from '../goodlogo.png';

export default class HomeNavBar extends Component {
  render() {
    return (
      <div className="navbar-div">
        <img src={goodLogo} className="logo" alt="full-logo" />
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Account
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </div>
    );
  }
}
