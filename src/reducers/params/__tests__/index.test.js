import { SELECT_PHOTOSET, GET_SIZES_OF_ALL_PHOTOS, SELECT_VIEW_SIZE, SELECT_PHOTO } from '../../../actions';
import { DEFAULT_VIEW_SIZE } from '../../../config/constants';
import reducer from '../';

describe('Params Reducer', () => {

  it('Default value', () => {
    const action = {};
    const initialState = undefined;
    const expectedState = {
      idPhotoset: "",
      updateSizesOfPhotos: false,
      currentViewSize: DEFAULT_VIEW_SIZE,
      selectedPhoto: {}
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: SELECT_PHOTOSET', () => {
    const action = {
      type: SELECT_PHOTOSET,
      payload: {
        idPhotoset: '1234'
      }
    };
    const initialState = undefined;
    const expectedState = {
      idPhotoset: '1234',
      updateSizesOfPhotos: false,
      currentViewSize: DEFAULT_VIEW_SIZE,
      selectedPhoto: {}
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: GET_SIZES_OF_ALL_PHOTOS', () => {
    const action = {
      type: GET_SIZES_OF_ALL_PHOTOS,
      payload: {
        updateSizesOfPhotos: true
      }
    };
    const initialState = undefined;
    const expectedState = {
      idPhotoset: '',
      updateSizesOfPhotos: true,
      currentViewSize: DEFAULT_VIEW_SIZE,
      selectedPhoto: {}
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: SELECT_VIEW_SIZE', () => {
    const action = {
      type: SELECT_VIEW_SIZE,
      payload: {
        currentViewSize: 5
      }
    };
    const initialState = undefined;
    const expectedState = {
      idPhotoset: '',
      updateSizesOfPhotos: false,
      currentViewSize: 5,
      selectedPhoto: {}
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: SELECT_PHOTO', () => {
    const action = {
      type: SELECT_PHOTO,
      payload: {
        selectedPhoto: { photo: { a: 1, b: 2, c: 3}}
      }
    };
    const initialState = undefined;
    const expectedState = {
      idPhotoset: '',
      updateSizesOfPhotos: false,
      currentViewSize: DEFAULT_VIEW_SIZE,
      selectedPhoto: { photo: { a: 1, b: 2, c: 3}}
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
})
