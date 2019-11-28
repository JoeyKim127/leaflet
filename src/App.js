import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';

import TotalPoints from './components/layouts/TotalPoints';
import CurrentLocation from './components/layouts/CurrentLocation';
import AdList from './components/layouts/AdList';

import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Mypage from './components/pages/Mypage';

class App extends Component {
  render() {
    return (

      <div >

        
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/mypage" component={Mypage} />
        </Switch>
<Navbar />
      </div>
    )
  };
};

export default App;
