import React from 'react';
import RegisterForm from './RegisterForm';
import { Link } from 'react-router-dom';

export class RegisterPage extends React.Component {
  render() {
    return (
      <div>
        <h2>Goodnest Register</h2>
        <RegisterForm />
      </div>
    );
  }
}
