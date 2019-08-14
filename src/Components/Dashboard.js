// @ts-check
import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { loadQuotes } from '../actions/quotesActions';
import { fetchEntries } from '../actions/entryActions';
import Quote from './Quote';
import './Dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadQuotes());
    this.props.dispatch(fetchEntries());
    console.log(this.props, 'this is the props from dashboard');
  }

  render() {
    // const quotes = this.props.quotes;
    const quotes = this.props.quotes.map((quote, index) => (
      <li key={index}>
        <Quote {...quote} />
      </li>
    ));
    return (
      <div className="dashboard">
        <div className="dashboard-username">Email: {this.props.email}</div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="entries" />
        <div className="dashboard-protected-data">
          <h3>QUOTES OF THE DAY</h3>
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
    quotes: state.quotes.quotes,
    entries: state.entries.entries
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
