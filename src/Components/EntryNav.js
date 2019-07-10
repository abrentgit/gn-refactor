import React from 'react';
import { Link } from 'react-router-dom';

export default class EntryNav extends React.Component {
  render() {
    return (
      <div className="navbar-div">
        <li className="nav-item">
          <Link className="nav-link" to="/entries">
            Good Entries
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
      </div>
    );
  }
}
