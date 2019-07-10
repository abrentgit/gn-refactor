import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="navbar-div">
        <li className="nav-item">
          <Link className="nav-link" to="/entries">
            Good Entries
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/newEntry">
            Create Entry
          </Link>
        </li>
      </div>
    );
  }
}
