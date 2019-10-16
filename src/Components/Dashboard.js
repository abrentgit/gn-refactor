// @ts-check
import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { loadQuotes } from '../actions/quotesActions';
import Quote from './Quote';
import './Dashboard.css';
import CreateEntryBtn from './create-entry-btn';
import HomeNav from './HomeNav';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadQuotes());
    console.log(this.props, 'this is the props from dashboard');
  }

  render() {
    // MUST MAP ENTRIES LIKE YOU DID QUOTES
    const quotes = this.props.quotes.map((quote, index) => (
      <li key={index}>
        <Quote {...quote} />
      </li>
    ));
    return (
      <div className="dashboard">
        <img className="logo" src="../ostrich.png" alt="ostrich" />
        <HomeNav />
        <div className="dashboard-name"> Welcome {this.props.name}!</div>
        <div className="dashboard-name">
          <p>
            Thank you for putting forth the time to journal today. Please click
            the button to create a new entry.
          </p>
          <CreateEntryBtn />
        </div>
        <div className="dashboard-protected-data">
          <h3>QUOTE OF THE DAY</h3>
          <ul className="quote">{quotes}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  return {
    email: state.auth.currentUser.email,
    name: `${currentUser.name}`,
    quotes: state.quotes.quotes
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
