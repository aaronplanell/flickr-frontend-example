import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../Navigation';

const currentViewSize = 4;
const selectViewSize = jest.fn();

it('Navigation Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Navigation
        currentViewSize={currentViewSize}
        selectViewSize={selectViewSize}
      />
    </Router>,
    div);
});

it('Navigation Snapshot matchs', () => {
  const tree = renderer.create(
    <Router>
      <Navigation
        currentViewSize={currentViewSize}
        selectViewSize={selectViewSize}
      />
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
