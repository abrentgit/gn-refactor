import React from 'react';
import './EntryForm.css';

export class EntryForm extends React.Component {
  render() {
    return (
      <form id="entry-form">
        <h1>Today I am grateful for...</h1>
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
            className="title"
            placeholder="My Grateful Journal Title"
            required
          />
          <a href="#" className="save-btn">
            Save
          </a>
        </div>
      </form>
    );
  }
}

// SAVE TITLE WITH ID NUMBER WHEN PERSISTING TO DB

export default EntryForm;
