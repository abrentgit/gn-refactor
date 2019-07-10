import React from 'react';
import Header from './Components/Header';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage';
import { Dashboard } from './Components/Dashboard';
import { RegisterForm } from './Components/RegisterForm';
import { EntriesPage } from './Components/EntriesPage';
import { CreateEntryPage } from './Components/CreateEntryPage';

class App extends React.Component {
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
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
