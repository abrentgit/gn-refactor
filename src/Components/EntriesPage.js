import React from 'react';
import NavBar from './NavBar';
import Entries from './Entries';

//get my entries

export class EntriesPage extends React.Component {
  render() {
    return (
      <div className="entries-div">
        <Entries />
      </div>
    );
  }
}
