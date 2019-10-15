import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

export function About() {
  return (
    <div className="home">
      <h1 className="title">GOODNEST</h1>
      <nav className="navbar">
        <ul>
          <Link className="navbar-item" to="/">
            <li>Home</li>
          </Link>
          <Link className="navbar-item" to="/login">
            <li>Login</li>
          </Link>
          <Link className="navbar-item" to="/register">
            <li>Sign Up</li>
          </Link>
        </ul>
      </nav>
      <img className="logo" src="../ostrich.png" alt="ostrich" />
      <div className="description">
        <p>Welcome to Goodnest!</p>
        <p>
          Everyday we face problems and the rigors of our schedules. However, it
          doesn't mean we should be alone with our thoughts..
        </p>
        <p>
          With the use of Goodnest, we hope through daily journaling, you can
          find an outlet to be grateful and inspired by all life brings you.{' '}
        </p>
      </div>
    </div>
  );
}

export default About;
