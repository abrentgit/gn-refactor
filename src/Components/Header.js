import React from 'react';
import goodLogo from '../goodlogo.png';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header-bar">
        <h1 className="home-title">Goodnest</h1>
        <img src={goodLogo} className="logo" alt="full-logo" />
      </div>
    );
  }
}

export default Header;
