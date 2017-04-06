import React, { Component } from 'react';
import Markdown from 'react-remarkable';
import Navigation from './sections/Navigation';
import { ABOUT_TEXT } from '../config/aboutText';

// CSS
import './App.css';

class About extends Component {
  render() {
    return (
      <div id="main" className="App">
        <Navigation />
        <aside style={{minWidth: '1024px', textAlign: 'left'}}>
          <Markdown source={ABOUT_TEXT} />
        </aside>
      </div>
    );
  }
}


export default About;
