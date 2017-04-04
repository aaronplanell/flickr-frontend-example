import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Header from '../Header';

const photosets = {
  photoset: [
    {
      id: 1234,
      name: 'Fire'
    }
  ]
};
const idPhotoset = '1234';
const selectedPhoto = {};

it('Header Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Header
      photosets={photosets}
      idPhotoset={idPhotoset}
      selectedPhoto={selectedPhoto}
    />,
    div);
});

it('Header Snapshot matchs', () => {
  const tree = renderer.create(
    <Header
      photosets={photosets}
      idPhotoset={idPhotoset}
      selectedPhoto={selectedPhoto}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
