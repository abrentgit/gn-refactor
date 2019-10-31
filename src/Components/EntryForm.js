import React from 'react';
import './EntryForm.css';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import { postEntry } from '../actions/entryActions';
import entryInput from '../components/input';
import { withRouter } from 'react-router-dom';
import { required, nonEmpty } from '../validators.js';
import './EntryForm.css';

export class EntryForm extends React.Component {
  onSubmit(values) {
    values.name = this.props.name;
    console.log('entry submitted');
    this.props.dispatch(postEntry(values));
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
        <img className="logo" src="../ostrich.png" alt="ostrich" />
        <p className="journal-question">
          <i>Name a few things you're grateful for today...</i>
        </p>
        <label htmlFor="entry"></label>
        <Field
          component={entryInput}
          type="text"
          name="text"
          id="entry-text"
          validate={[required, nonEmpty]}
        />
        <button
          id="send-button"
          disabled={this.props.pristine || this.props.submitting}
        >
          Send
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  name: state.auth.name
});

export default reduxForm({
  form: 'add',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('contact', Object.keys(errors)[0]))
})(withRouter(connect(mapStateToProps)(EntryForm)));
