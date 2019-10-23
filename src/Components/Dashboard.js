// @ts-check
import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { loadQuotes } from '../actions/quotesActions';
import Quote from './Quote';
import './Dashboard.css';
import DashboardNav from './Dashboard-Nav';

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
        <DashboardNav />
        <div className="dashboard-name"> Welcome {this.props.name}!</div>
        <div className="dashboard-protected-data">
          <h3 className="quote-title">QUOTE OF THE DAY</h3>
          <p className="quote">{quotes}</p>
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
