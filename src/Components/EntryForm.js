import React from 'react';
import './EntryForm.css';
import { Field, reduxForm, focus } from 'redux-form';
import { postEntry } from '../actions/entryActions';

// need to create input
// import Input from './input';
// need to create actions
// import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators.js';

export class EntryForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(postEntry(values.title, values.content));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="entry-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {error}
        <label htmlFor="title-field">An Awesome Entry Title</label>
        <Field
          type="text"
          name="title"
          id="title"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="entry-field">"What are you grateful for?"</label>
        <Field
          type="text"
          name="entry"
          id="entry"
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'entry',
  onSubmitFail: (errors, dispatch) => dispatch(focus('entry', 'content'))
})(EntryForm);

/// BASELINE ENTRY FORM CRAFT COMBO NEEDED
