import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Footer from '../Footer';

it('Footer Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Footer />,
    div);
});

it('Footer Snapshot matchs', () => {
  const tree = renderer.create(
    <Footer />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
