import React from 'react';
import { EntryForm } from './EntryForm';

//get my entries

export class EntriesPage extends React.Component {
  render() {
    return (
      <div className="entries-div">
        <EntryForm />
      </div>
    );
  }
}
