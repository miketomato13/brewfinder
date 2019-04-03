import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import SearchBrewery from './pages/SearchBrewery'
import Brew from './pages/brew'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>

          

          <Route exact path="/pages/SearchBrewery" component={SearchBrewery}/>

          <Route path="/brew/:id" component={Brew}/>
        </Switch>
      </BrowserRouter>
      </div>

    );
  }
}


export default App;
