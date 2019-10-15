import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          About
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/users">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css';

// export default class NavBar extends Component {
//   render() {
//     return (
//       <div className="navbar-div">
//         <li className="nav-item">
//           <Link className="nav-link" to="/entries">
//             Good Entries
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/create-entry">
//             Create Entry
//           </Link>
//         </li>
//       </div>
//     );
//   }
// }
