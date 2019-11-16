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
      <div className="form-wrapper">
        <h1 className="section-header">JOURNAL FORM</h1>
        <img className="logo" src="../ostrich.png" alt="ostrich" />
        <div className="field-wrapper">
          <form
            className="entry-form"
            onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
          >
            {error}
            <label htmlFor="entry"></label>
            <p className="grateful-question">
              Name three things you're grateful for today?
            </p>
            <Field
              component={entryInput}
              type="text"
              name="grateful-entry"
              id="entry-text"
              validate={[required, nonEmpty]}
            />
            <p className="smile-question">
              Name three things that made you smile today?
            </p>
            <Field
              component={entryInput}
              type="text"
              name="smile-entry"
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
        </div>
      </div>
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
