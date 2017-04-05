import React, { Component } from 'react';

// CSS
import './App.css';

// Components
import Navigation from './sections/Navigation';

class About extends Component {
  render() {
    return (
      <div id="main" className="App" style={{height: '100%'}}>
        <Navigation />
        <aside>
          About
        </aside>
      </div>
    );
  }
}


export default About;
