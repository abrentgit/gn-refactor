import React from 'react';
import NavBar from './NavBar';

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="dashboard-protected-data">
          <div className="quote-section">
            <h1>Make me Quote Component</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
