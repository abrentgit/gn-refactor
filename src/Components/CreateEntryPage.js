import React from 'react';
import EntryNav from './EntryNav';
import EntryForm from './EntryForm';

export class CreateEntryPage extends React.Component {
  render() {
    return (
      <div className="create-entry">
        <EntryNav />
        <EntryForm />
      </div>
    );
  }
}

export default CreateEntryPage;
