import React from 'react';
import HomeNavBar from './HomeNav';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header-bar">
        <HomeNavBar />
        <h1 className="home-title">Goodnest</h1>
      </div>
    );
  }
}

export default Header;
