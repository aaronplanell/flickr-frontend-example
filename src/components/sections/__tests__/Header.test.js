import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from '../Header';

it('Header Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Header />,
    div);
});

it('Header Snapshot matchs', () => {
  const tree = renderer.create(
    <Header />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
