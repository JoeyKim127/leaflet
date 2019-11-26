import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';

import TotalPoints from './components/layouts/TotalPoints';
import CurrentLocation from './components/layouts/CurrentLocation';
import AdList from './components/layouts/AdList';

class App extends Component {
  render() {
    return (

      <div className="container">

     
      
        <div className="header">
          <TotalPoints />
        </div>
        <div className="body">
          <CurrentLocation />
          <AdList />
        </div>

         <div className="nav">
          <Navbar />
      </div>
      
      </div>
    )
  };
};

export default App;
