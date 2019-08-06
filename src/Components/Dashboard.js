import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
// import { fetchProtectedData } from '../actions/protected-data';
import { fetchQuotes } from '../actions/quotes';
// import { quotesReducer } from '../reducers/quotesReducer';

export class Dashboard extends React.Component {
  componentWillMount() {
    console.log('component mounted');
    console.log(this.props);
    this.props.dispatch(fetchQuotes());
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">Email: {this.props.email}</div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          Quote please: {this.props.quotes}
          Helper: {this.props.quote}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth;
  // what state its accessing
  // auth is the state object, current user and email are what it needs
  return {
    email: state.auth.currentUser.email,
    name: `${currentUser.name}`,
    quotes: state.quotes.quotes
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
