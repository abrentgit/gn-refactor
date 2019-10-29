import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';
// import { Link } from 'react-router-dom';
import './Header.css';
import './DashNav.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // MUST COPY RETURN CODE TO MATCH B-SHOWS NAV BAR
    // COPY HIS GET DATES PAGE FOR GET ENTRIES
    let logOutButton;
    // let myEntries;
    // let about;

    if (this.props.loggedIn) {
      logOutButton = (
        <button className="logout-btn" onClick={() => this.logOut()}>
          Log out
        </button>
      );

      // myEntries = (
      //   <myEntries /> // not created
      // );

      // about = <About />; // not created
    }
    return <div className="header-bar">{logOutButton}</div>;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
