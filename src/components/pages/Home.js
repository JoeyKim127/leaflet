import React, {Component} from 'react'
import TotalPoints from '../layouts/AdList';
import CurrentLocation from '../layouts/CurrentLocation';
import AdList from '../layouts/AdList';

class Home extends Component {
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

            </div>
        )
    };
};


export default Home;