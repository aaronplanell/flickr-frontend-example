import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import About from '../About';

it('About Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <About />
    </Router>,
    div);
});

it('About Snapshot matchs', () => {
  const tree = renderer.create(
    <Router>
      <About />
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
