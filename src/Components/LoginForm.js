import React from 'react';
import { Link } from 'react-router-dom'
import './loginForm.css';

class LoginForm extends React.Component {
    render() {
        return (
            <div className="login-page">
                <div className="form">
                    <form className="register-form">
                        <input type="text" placeholder="name" />
                        <input type="password" placeholder="password" />
                        <input type="text" placeholder="email address" />
                        <button>create</button>
                        <p className="message">Already registered? <a href="#">Sign In</a></p>
                    </form>
                    <form className="login-form">
                        <input type="text" placeholder="username" />
                        <input type="password" placeholder="password" />
                        <button>login</button>
                        <p className="message">Not registered?
                        <Link to="/register"> Create an account</Link>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;