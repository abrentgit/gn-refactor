import React from 'react';
import NavBar from './NavBar';
import './Dashboard.css';

// GET QUOTES AND DISPLAY THEM IN QUOTE SECTION

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="dashboard-protected-data">
          <div className="quote-container">
            <blockquote>
              <p>
                <q>
                  If we don’t do something soon … our recovery is on the verge
                  of faltering.
                </q>
              </p>
              <footer>Ben Bernanke, The Fed</footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
