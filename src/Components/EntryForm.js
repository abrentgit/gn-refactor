import React from 'react';
import './EntryForm.css';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import { postEntry } from '../actions/entryActions';
import { required, nonEmpty } from '../validators';
import Input from '../components/input';
import { withRouter } from 'react-router-dom';
import './EntryForm.css';

export class EntryForm extends React.Component {
  onSubmit(values) {
    values.name = this.props.name;
    console.log('entry submitted');
    this.props.dispatch(postEntry(values));
  }
  render() {
    return (
      <div>
        <div id="container">
          <span className="input message">
            <textarea className="input__field" id="input-5" defaultValue={''} />
            <label htmlFor="input-5" className="input__label">
              <span className="input__label-content">Message</span>
            </label>
          </span>
          <button id="send-button" type="button">
            Send
          </button>
        </div>
      </div>
    );
  }
}
/* <form
        id="form"
        className="entry-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        <label htmlFor="entry" className="entry">
          Create Journal Entry
        </label>
        <Field
          component={Input}
          id="message"
          type="text"
          validate={[required, nonEmpty]}
          placeholder="What are you grateful for?"
          defaultValue={''}
          aria-required="true"
        />
        <button
          id="submit"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Submit
        </button>
      </form> */
//     );
//   }
// }

const mapStateToProps = state => ({
  name: state.auth.name
});

export default reduxForm({
  form: 'add',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('contact', Object.keys(errors)[0]))
})(withRouter(connect(mapStateToProps)(EntryForm)));

// import React from 'react';
// import './EntryForm.css';
// import { Field, reduxForm, focus } from 'redux-form';
// // import { postEntry } from '../actions/entryActions';

// // need to create input
// // import Input from './input';
// // need to create actions
// // import { login } from '../actions/auth';

// export class EntryForm extends React.Component {
//   onSubmit(values) {
//     return this.props.dispatch(postEntry(values.title, values.content));
//   }

//   render() {
//     let error;
//     if (this.props.error) {
//       error = (
//         <div className="form-error" aria-live="polite">
//           {this.props.error}
//         </div>
//       );
//     }
//     return (
//       <form
//         className="entry-form"
//         onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
//       >
//         {error}
//         <label htmlFor="title-field">An Awesome Entry Title</label>
//         <Field
//           type="text"
//           name="title"
//           id="title"
//           validate={[required, nonEmpty]}
//         />
//         <label htmlFor="entry-field">"What are you grateful for?"</label>
//         <Field
//           type="text"
//           name="entry"
//           id="entry"
//           validate={[required, nonEmpty]}
//         />
//         <button disabled={this.props.pristine || this.props.submitting}>
//           Submit
//         </button>
//       </form>
//     );
//   }
// }
