import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth';
import { clearAuthToken } from '../local-storage';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = <button onClick={() => this.logOut()}>Log out</button>;
    }
    return (
      <div className="header-bar">
        <h1>GOOD NEST</h1>
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);

// import React from 'react';
// import HomeNavBar from './HomeNav';
// import './Header.css';

// class Header extends React.Component {
//   render() {
//     return (
//       <div className="header-bar">
//         <HomeNavBar />
//         <h1 className="home-title">Grateful Nest</h1>
//       </div>
//     );
//   }
// }

// export default Header;
