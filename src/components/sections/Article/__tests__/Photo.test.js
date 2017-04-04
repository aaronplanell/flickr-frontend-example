import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Photo from '../Photo';

const photo = {
  id: 1234,
  original: 'http://host:port/image.jpg'
}

const selectPhoto = jest.fn();

it('Photo Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Photo
      photo={photo}
      selectPhoto={selectPhoto}
    />,
    div);
});

it('Photo Snapshot matchs', () => {
  const tree = renderer.create(
    <Photo
      photo={photo}
      selectPhoto={selectPhoto}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
