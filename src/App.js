import React from 'react';
import Header from './Components/Header';
import { Route, BrowserRouter } from 'react-router-dom';
import { LandingPage } from './Components/LandingPage';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Route exact path='/' component={LandingPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
