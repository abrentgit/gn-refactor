import React from 'react';
import Header from './Components/Header';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage';
import { Dashboard } from './Components/Dashboard';
import { RegisterForm } from './Components/RegisterForm';
import { EntriesPage } from './Components/EntriesPage';
import { CreateEntryPage } from './Components/CreateEntryPage';
import LoginForm from './Components/LoginForm';
import { refreshAuthToken } from './actions/auth';

export class App extends React.Component {
  componentDidMount() {
    if (this.props.hasAuthToken) {
      this.props.dispatch(refreshAuthToken());
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && !this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (!nextProps.loggedIn && this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      60 * 60 * 1000 // One hour
    );
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }

    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/entries" component={EntriesPage} />
            <Route path="/create-entry" component={CreateEntryPage} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(App));

// STILL NEED TO CREATE ROUTE FOR SINGLE ENTRY VIEW - BUT TBD based
