import React from 'react';
import './EntryForm.css';
// import { Field, reduxForm, focus } from 'redux-form';
// // import { postEntry } from '../actions/entryActions';

export class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: ''
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log('Change detected. State updated' + name + ' = ' + value);
  }

  handleSubmit(event) {
    alert(
      'A form was submitted: ' + this.state.name + ' // ' + this.state.email
    );
    event.preventDefault();
  }

  render() {
    return (
      <form id="form" className="topBefore">
        <textarea
          id="message"
          type="text"
          placeholder="MESSAGE"
          defaultValue={''}
        />
        <input id="submit" type="submit" defaultValue="GO!" />
      </form>
    );
  }
}
export default EntryForm;

// import React from 'react';
// import './EntryForm.css';
// import { Field, reduxForm, focus } from 'redux-form';
// // import { postEntry } from '../actions/entryActions';

// // need to create input
// // import Input from './input';
// // need to create actions
// // import { login } from '../actions/auth';
// import { required, nonEmpty } from '../validators.js';

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

// export default reduxForm({
//   form: 'entry',
//   onSubmitFail: (errors, dispatch) => dispatch(focus('entry', 'content'))
// })(EntryForm);
