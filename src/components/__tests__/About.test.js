import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import About from '../About';

it('About Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <About />,
    div);
});

it('About Snapshot matchs', () => {
  const tree = renderer.create(
    <About />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
