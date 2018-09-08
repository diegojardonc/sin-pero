import React, { Component } from 'react';

import { BrowserRouter as Router, Route }  from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Explore from './components/Explore/Explore';

import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation />
          <Route path='/' component={Home} exact/>
          <Route path='/explorar' component={Explore}/>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
