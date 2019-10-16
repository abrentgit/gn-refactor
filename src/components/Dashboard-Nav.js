import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DashNav.css';

export default class DashboardNav extends Component {
  render() {
    return (
      <div className="navbar-div">
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            <li>About</li>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/userEntries">
            <li>My Entries</li>
          </Link>
        </li>
      </div>
    );
  }
}
