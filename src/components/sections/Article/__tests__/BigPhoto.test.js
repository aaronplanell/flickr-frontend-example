import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import BigPhoto from '../BigPhoto';

const photo = {
  id: 1234,
  original: 'http://host:port/image.jpg'
}

const selectPhoto = jest.fn();

it('BigPhoto Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BigPhoto
      photo={photo}
      selectPhoto={selectPhoto}
    />,
    div);
});

it('BigPhoto Snapshot matchs', () => {
  const tree = renderer.create(
    <BigPhoto
      photo={photo}
      selectPhoto={selectPhoto}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
