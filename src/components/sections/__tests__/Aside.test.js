import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Aside from '../Aside';

const photosets = {};
const selectPhotoset = jest.fn();
const fetchPhotosByPhotoset = jest.fn();
const getSizesOfAllPhotos = jest.fn();
const selectPhoto = jest.fn();

it('Aside Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Aside
      photosets={photosets}
      selectPhotoset={selectPhotoset}
      fetchPhotosByPhotoset={fetchPhotosByPhotoset}
      getSizesOfAllPhotos={getSizesOfAllPhotos}
      selectPhoto={selectPhoto}
    />,
    div);
});

it('Aside Snapshot matchs', () => {
  const tree = renderer.create(
    <Aside
      photosets={photosets}
      selectPhotoset={selectPhotoset}
      fetchPhotosByPhotoset={fetchPhotosByPhotoset}
      getSizesOfAllPhotos={getSizesOfAllPhotos}
      selectPhoto={selectPhoto}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
