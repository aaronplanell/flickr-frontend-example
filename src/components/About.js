import React, { Component } from 'react';
import Markdown from 'react-remarkable';
import Navigation from './sections/Navigation';

// CSS
import './App.css';

class About extends Component {
  render() {
    return (
      <div id="main" className="App">
        <Navigation />
        <aside style={{minWidth: '500px'}}>
          <Markdown source="# flickr-frontend-example" />
        </aside>
      </div>
    );
  }
}


export default About;
