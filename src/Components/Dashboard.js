import React, { Component } from 'react';
import NavBar from './NavBar';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <NavBar />
        <h1 className="dashname">Welcome Friend!</h1>

        <div className="dashboard-protected-data">
          <ul>Quote Component Goes Here</ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
