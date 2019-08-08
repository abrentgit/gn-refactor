import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { loadQuotes } from '../actions/quotesActions';

export class Dashboard extends React.Component {
  componentWillMount() {
    this.props.dispatch(loadQuotes());
    console.log(this.props, 'this is the props');
  }

  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-username">Email: {this.props.email}</div>
        <div className="dashboard-name">Name: {this.props.name}</div>
        <div className="dashboard-protected-data">
          <h1>HELPER </h1>
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
