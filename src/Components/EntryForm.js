import React from 'react';
import './EntryForm.css';

export class EntryForm extends React.Component {
  render() {
    return (
      <form id="entry-form">
        <div>
          <input
            type="email"
            name="email"
            className="formStyle"
            placeholder="What are you grateful for?"
            required
          />
          <input
            type="text"
            name="title"
            className="formStyle"
            placeholder="An Awesome Entry TItle"
            required
          />
        </div>
        <button className="formButton">Save</button>
      </form>
    );
  }
}

// SAVE TITLE WITH ID NUMBER WHEN PERSISTING TO DB

export default EntryForm;
