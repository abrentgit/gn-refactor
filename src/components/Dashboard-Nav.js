import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DashNav.css';

export default class DashboardNav extends Component {
  render() {
    return (
      <div className="navbar-div">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/entries">
            <li>Create New Entry</li>
          </Link>
          <Link className="nav-link" to="/userEntries">
            <li>My Entries</li>
          </Link>
          <Link className="nav-link text-white" to="/about">
            <li>About</li>
          </Link>
        </li>
      </div>
    );
  }
}
