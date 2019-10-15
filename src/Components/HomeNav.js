import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeNav.css';

export default class HomeNav extends Component {
  render() {
    return (
      <div className="navbar-div">
        <li className="nav-item">
          <Link className="nav-link" to="/about">
            <li>About</li>
          </Link>
        </li>
      </div>
    );
  }
}
