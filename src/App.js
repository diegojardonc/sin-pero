import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link }  from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Explore from './components/Explore/Explore';
import PlaceView from './components/PlaceView/PlaceView';
import Report from './components/Report/Report';
import MyFavs from './components/MyFavs/MyFavs';

import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navigation />
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/explorar' component={Explore}/>
            <Route path='/lugar/:id' render={({match}) => (
                  <PlaceView id={Number.parseInt(match.params.id) } />
            )}/>
            <Route path='/mis-favoritos' render={() => {
              return(<MyFavs/>);
            }}/>
            <Route path='/reportar/:id' render={(match) => {
              return(<Report id={1}/>);
            }}/>
            <Route render={({match}) => (
              <React.Fragment>
                <h1>¿Buscabas algo?</h1>
                <Link to="/">Ir a inicio</Link>
              </React.Fragment>
            )}/>
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
