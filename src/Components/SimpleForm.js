import React from 'react';
import Input from './Input';
// import { Link } from 'react-router-dom';
import { reduxFrom, Field } from 'redux-form';

const renderInput = props => <Input {...props.input} type="text" />;

const onSubmit = values => {
  alert(JSON.stringify(values));
};

export class extends React.Component {
    SimpleForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name="firstName"
            component="{renderInput}"
            type="text"
            placeholder="First Name"
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name="lastName"
            component="{renderInput}"
            type="text"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="email"
            component="{renderInput}"
            type="email"
            placeholder="Email"
          />
        </div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
}
}

export default reduxForm({
  form: 'simple',
  onSubmit // a unique identifier for this form
})(SimpleForm);
