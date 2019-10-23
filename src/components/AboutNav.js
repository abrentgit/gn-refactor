import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeNav.css';

export default class AboutNav extends Component {
  render() {
    return (
      <div className="navbar-div">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <li>Dashboard</li>
          </Link>
        </li>
      </div>
    );
  }
}
