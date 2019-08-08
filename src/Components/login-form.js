import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import Input from './input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators.js';

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.email, values.password));
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
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {error}
        <label htmlFor="email">Email</label>
        <Field
          component={Input}
          type="text"
          name="email"
          id="email"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          Log in
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(LoginForm);

// import React from 'react';
// import 'react-redux';
// import { reduxForm, Field } from 'redux-form';

// export class LoginForm extends React.Component {
//   onSubmit(values) {
//     console.log(values);
//   }
//   render() {
//     return (
//       <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
//         <label htmlFor="name">Name</label>
//         <Field name="name" id="name" type="text" component="input" />
//         <label htmlFor="email">Email address</label>
//         <Field name="email" id="email" type="email" component="input" />
//         <label htmlFor="message">Message</label>
//         <Field name="message" id="message" component="textarea" />
//         <label htmlFor="magicWord">What's the magic word?</label>
//         <Field name="magicWord" id="magicWord" type="text" component="input" />
//         <button type="submit">Send message</button>
//       </form>
//     );
//   }
// }

// export default reduxForm({
//   form: 'login'
// })(LoginForm);

// // // import { myInput } from '../Field'; - NEED THIS

// // class LoginForm extends Component {
// //   render() {
// //     const { handleSubmit } = this.props;
// //     return (
// //       <form onSubmit={handleSubmit}>
// //         <Field
// //           name="email"
// //           component={myInput}
// //           type="text"
// //           placeholder="email"
// //           validate={[requiredInput, correctInput]}
// //         />
// //         <Field
// //           name="password"
// //           component={myInput}
// //           type="password"
// //           placeholder="Password"
// //           validate={[requiredInput]}
// //         />
// //         <Field
// //           name="confirm-password"
// //           component={myInput}
// //           type="password"
// //           placeholder="Confirm Password"
// //           validate={[requiredInput, matchInput]}
// //         />
// //         <button type="submit" label="submit">
// //           Submit
// //         </button>
// //       </form>
// //     );
// //   }
// // }

// // LoginForm = reduxForm({
// //   form: 'login'
// // })(LoginForm);

// // export default LoginForm;
// // // import { Link } from 'react-router-dom';
// // // import { Field, reduxForm, focus } from 'redux-form';
// // // import Input from '/Users/anthonybrent/Projects/goodnest-test/my-goodtest/src/Components/Input.js';
// // // import { login } from '../actions/auth';
// // // import { required, nonEmpty } from '../validators';
// // // import './LoginForm.css';

// // // class LoginForm extends React.Component {
// // //   onSubmit(values) {
// // //     return this.props.dispatch(login(values.email, values.password));
// // //   }

// // //   render() {
// // //     // if error, return a div with an error
// // //     let error;
// // //     if (this.props.error) {
// // //       error = (
// // //         <div className="form-error" aria-live="polite">
// // //           {this.props.error}
// // //         </div>
// // //       );
// // //     }
// // //     return (
// // //       <form
// // //         className="login-form"
// // //         onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
// // //       >
// // //         {error}
// // //         <legend>Login</legend>
// // //         <label htmlFor="email">Email</label>
// // //         <Field
// // //           component={Input}
// // //           type="email"
// // //           placeholder="foo@bar.com"
// // //           name="user-email"
// // //           id="user-email"
// // //           validate={[required, nonEmpty]}
// // //         />
// // //         <label htmlFor="password">Password</label>
// // //         <Field
// // //           component={Input}
// // //           placeholder="1234passw0rd"
// // //           type="password"
// // //           name="user-password"
// // //           id="user-password"
// // //           validate={[required, nonEmpty]}
// // //         />
// // //         <button
// // //           type="submit"
// // //           disabled={this.props.pristine || this.props.submitting}
// // //         >
// // //           Login
// // //         </button>
// // //         <p className="accountText">
// // //           New to Good Nest? <Link to="/register"> Register</Link>
// // //         </p>
// // //       </form>
// // //     );
// // //   }
// // // }

// // // export default reduxForm({
// // //   form: 'login',
// // //   onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
// // // })(LoginForm);
