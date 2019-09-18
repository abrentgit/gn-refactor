import React from 'react';
import './EntryForm.css';
import { connect } from 'react-redux';
import { Field, reduxForm, focus } from 'redux-form';
import { postEntry } from '../actions/entryActions';
import { required, nonEmpty } from '../validators';
import Input from '../components/input';
import { withRouter } from 'react-router-dom';

export class EntryForm extends React.Component {
  onSubmit(values) {
    console.log('entry submitted');
    this.props.dispatch(postEntry(values));
  }
  //     this.handleChange = this.handleInputChange.bind(this);
  // }      // this.handleSubmit = this.handleSubmit.bind(this);

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  //   console.log('Change detected. State updated' + name + ' = ' + value);
  // }

  render() {
    return (
      <form id="form" className="topBefore" onSubmit={this.onSubmit(values)}>
        <div>
          <label htmlFor="entry" className="entry">
            Grateful Section
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
        </div>
        <button
          id="submit"
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entries
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
