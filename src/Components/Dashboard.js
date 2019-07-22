import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">
          Username: {this.props.username}
        </div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          Protected data: {this.props.protectedData}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));

// import React from 'react';
// import NavBar from './NavBar';
// import './Dashboard.css';

// // GET QUOTES AND DISPLAY THEM IN QUOTE SECTION

// export class Dashboard extends React.Component {
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <div className="dashboard-protected-data">
//           <div className="quote-container">
//             <blockquote>
//               <p>
//                 <q>
//                   If we don’t do something soon … our recovery is on the verge
//                   of faltering.
//                 </q>
//               </p>
//               <footer>Ben Bernanke, The Fed</footer>
//             </blockquote>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Dashboard;
