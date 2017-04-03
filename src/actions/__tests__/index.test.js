// Import constants
import { SHOW_ALERT, HIDE_ALERT } from '../';
import { FETCH_LIST_OF_PHOTOSETS_REQUEST, FETCH_LIST_OF_PHOTOSETS_SUCCESS } from '../';
import { SELECT_PHOTOSET } from '../';
import { FETCH_PHOTOS_BY_PHOTOSET_REQUEST, FETCH_PHOTOS_BY_PHOTOSET_SUCCESS } from '../';
import { GET_SIZES_OF_ALL_PHOTOS } from '../';
import { FETCH_SIZES_OF_A_PHOTO_REQUEST, FETCH_SIZES_OF_A_PHOTO_SUCCESS } from '../';
import { SELECT_VIEW_SIZE } from '../';
import { SELECT_PHOTO } from '../';

// Import actions
import { showAlert, hideAlert } from '../';
import { selectPhotoset } from '../';
import { fetchListOfPhotosets } from '../';
import { fetchPhotosByPhotoset } from '../';
import { getSizesOfAllPhotos } from '../';
import { fetchSizesOfAPhoto } from '../';
import { selectViewSize } from '../';
import { selectPhoto } from '../';

// Import other functions
import { doFetch } from '../';
import { getUrlListOfPhotosets } from '../';
import { getUrlPhotosByPhotoset } from '../';
import { getUrlSizesOfPhoto } from '../';

// Mocks
jest.mock('../__mocks__/axios');


/*
 * Test of action creators
 ***/
describe('Actions creators: ', () => {

  /*
   * SHOW_ALERT
   ***/
  it('showAlert', () => {
    const message = 'My alert';
    const expectedAction = {
      type: SHOW_ALERT,
      payload: {message}
    };
    expect(showAlert(message)).toEqual(expectedAction);
  });

  /*
   * HIDE_ALERT
   ***/
  it('hideAlert', () => {
    const expectedAction = {
      type: HIDE_ALERT
    };
    expect(hideAlert()).toEqual(expectedAction);
  });

  /*
   * SELECT_PHOTOSET
   ***/
  it('selectPhotoset', () => {
    const idPhotoset = 1234;
    const expectedAction = {
      type: SELECT_PHOTOSET,
      payload: { photoset_id: idPhotoset }
    };
    expect(selectPhotoset(idPhotoset)).toEqual(expectedAction);
  });

  /*
   * FETCH_LIST_OF_PHOTOSETS
   ***/
  it('fetchListOfPhotosets', async () => {
    // prepare
    const expected = [
        { type: FETCH_LIST_OF_PHOTOSETS_REQUEST, payload: {meta: {}} },
        { type: FETCH_LIST_OF_PHOTOSETS_SUCCESS, payload: {meta: {}, response: {}} }
    ];

    // mock the dispatch and getState functions from Redux thunk.
    const dispatch = jest.fn();
    const getState = jest.fn(
      () => {
        return {url: getUrlListOfPhotosets()}
      }
    );

    // execute
    await fetchListOfPhotosets()(dispatch, getState);

    // verify
    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  });

  /*
   * FETCH_PHOTOS_BY_PHOTOSET
   ***/
  it('fetchPhotosByPhotoset', async () => {
    // prepare
    const idPhotoset = 1234;
    const expected = [
        { type: FETCH_PHOTOS_BY_PHOTOSET_REQUEST, payload: {meta: {idPhotoset: 1234}} },
        { type: FETCH_PHOTOS_BY_PHOTOSET_SUCCESS, payload: {meta: {idPhotoset: 1234}, response: {}} }
    ];

    // mock the dispatch and getState functions from Redux thunk.
    const dispatch = jest.fn();
    const getState = jest.fn(
      () => {
        return {url: getUrlPhotosByPhotoset(idPhotoset)}
      }
    );

    // execute
    await fetchPhotosByPhotoset(idPhotoset)(dispatch, getState);

    // verify
    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  });

  /*
   * GET_SIZES_OF_ALL_PHOTOS
   ***/
  it('getSizesOfAllPhotos', () => {
    const updateSizesOfPhotos = {a: 1, b: '2', c: { d: 3 }};
    const expectedAction = {
      type: GET_SIZES_OF_ALL_PHOTOS,
      payload: {updateSizesOfPhotos}
    };
    expect(getSizesOfAllPhotos(updateSizesOfPhotos)).toEqual(expectedAction);
  });

  /*
   * FETCH_SIZES_OF_A_PHOTO
   ***/
  it('fetchSizesOfAPhoto', async () => {
    // prepare
    const idPhoto = 1234;
    const expected = [
        { type: FETCH_SIZES_OF_A_PHOTO_REQUEST, payload: {meta: { idPhoto }} },
        { type: FETCH_SIZES_OF_A_PHOTO_SUCCESS, payload: {meta: { idPhoto }, response: {}} }
    ];

    // mock the dispatch and getState functions from Redux thunk.
    const dispatch = jest.fn();
    const getState = jest.fn(
      () => {
        return {url: getUrlSizesOfPhoto(idPhoto)}
      }
    );

    // execute
    await fetchSizesOfAPhoto(idPhoto)(dispatch, getState);

    // verify
    expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
    expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
  });

  /*
   * SELECT_VIEW_SIZE
   ***/
  it('selectViewSize', () => {
    const currentViewSize = 5;
    const expectedAction = {
      type: SELECT_VIEW_SIZE,
      payload: {currentViewSize}
    };
    expect(selectViewSize(currentViewSize)).toEqual(expectedAction);
  });

  /*
   * SELECT_PHOTO
   ***/
  it('selectPhoto', () => {
    const selectedPhoto = 3;
    const expectedAction = {
      type: SELECT_PHOTO,
      payload: {selectedPhoto}
    };
    expect(selectPhoto(selectedPhoto)).toEqual(expectedAction);
  });

});


/*
 * Test of auxiliar functions
 ***/
describe('Auxiliar functions of actions creators: ', () => {

  it('doFetch', async () => {
    // prepare
   const type = "MY_TYPE";
   const url = "http://myUrl:1234";
   const expected = [
       { type: type + '/REQUEST',
         payload: {
             meta: {},
         }
       },
       { type: type + '/SUCCESS',
           payload: {
               meta: {},
               response: {}
           }
       }
   ];

   // mock the dispatch and getState functions from Redux thunk.
   const dispatch = jest.fn();
   const getState = jest.fn(
     () => {
       return {}
     }
   );

   // execute
   await doFetch(type, url)(dispatch, getState);

   // verify
   expect(dispatch.mock.calls[0][0]).toEqual(expected[0]);
   expect(dispatch.mock.calls[1][0]).toEqual(expected[1]);
 });

  it('getUrlListOfPhotosets', () => {
    const expectedAction = "http://localhost:3000/flickr.photosets.getList";
    expect(getUrlListOfPhotosets()).toEqual(expectedAction);
  });

  it('getUrlPhotosByPhotoset', () => {
    const idPhotoset = 1234;
    const expectedAction = "http://localhost:3000/flickr.photosets.getPhotos?photoset_id=1234";
    expect(getUrlPhotosByPhotoset(idPhotoset)).toEqual(expectedAction);
  });

  it('getUrlSizesOfPhoto', () => {
    const idPhoto = 1234;
    const expectedAction = "http://localhost:3000/flickr.photos.getSizes?photo_id=1234";
    expect(getUrlSizesOfPhoto(idPhoto)).toEqual(expectedAction);
  });

});
