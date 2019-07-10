import React from 'react';
import EntryForm from './EntryForm';

export class CreateEntryPage extends React.Component {
  render() {
    return (
      <div className="create-entry">
        <EntryForm />
      </div>
    );
  }
}

export default CreateEntryPage;
