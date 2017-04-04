import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Navigation from '../Navigation';

const currentViewSize = 4;
const selectViewSize = jest.fn();

it('Navigation Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Navigation
      currentViewSize={currentViewSize}
      selectViewSize={selectViewSize}
    />,
    div);
});

it('Navigation Snapshot matchs', () => {
  const tree = renderer.create(
    <Navigation
      currentViewSize={currentViewSize}
      selectViewSize={selectViewSize}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
