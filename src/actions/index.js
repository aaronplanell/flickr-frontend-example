import axios from 'axios';
import qs from 'qs';

/*
 * Configuration
 ***/
import { API_PHOTOSETS_GETLIST, API_PHOTOSETS_GETPHOTOS, API_PHOTOS_GETSIZES } from '../config/constants';

// Default config values (for npm start)
let { API_ROOT_URL } = require(`../config/enviroment/development.js`);

// Load the config values file if REACT_APP_ENVIROMENT is defined
if (process && process.env && process.env.REACT_APP_ENVIROMENT) {
  API_ROOT_URL = require(`../config/enviroment/${process.env.REACT_APP_ENVIROMENT}.js`).API_ROOT_URL;
}

/*
 * List of actions
 ***/
export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export const FETCH_LIST_OF_PHOTOSETS = 'FETCH_LIST_OF_PHOTOSETS'
export const FETCH_LIST_OF_PHOTOSETS_REQUEST = 'FETCH_LIST_OF_PHOTOSETS/REQUEST';
export const FETCH_LIST_OF_PHOTOSETS_SUCCESS = 'FETCH_LIST_OF_PHOTOSETS/SUCCESS';
export const FETCH_LIST_OF_PHOTOSETS_FAILURE = 'FETCH_LIST_OF_PHOTOSETS/FAILURE';

export const SELECT_PHOTOSET = 'SELECT_PHOTOSET';
export const FETCH_PHOTOS_BY_PHOTOSET = 'FETCH_PHOTOS_BY_PHOTOSET'
export const FETCH_PHOTOS_BY_PHOTOSET_REQUEST = 'FETCH_PHOTOS_BY_PHOTOSET/REQUEST';
export const FETCH_PHOTOS_BY_PHOTOSET_SUCCESS = 'FETCH_PHOTOS_BY_PHOTOSET/SUCCESS';
export const FETCH_PHOTOS_BY_PHOTOSET_FAILURE = 'FETCH_PHOTOS_BY_PHOTOSET/FAILURE';

export const GET_SIZES_OF_ALL_PHOTOS = 'GET_SIZES_OF_ALL_PHOTOS';
export const FETCH_SIZES_OF_A_PHOTO = 'FETCH_SIZES_OF_A_PHOTO'
export const FETCH_SIZES_OF_A_PHOTO_REQUEST = 'FETCH_SIZES_OF_A_PHOTO/REQUEST';
export const FETCH_SIZES_OF_A_PHOTO_SUCCESS = 'FETCH_SIZES_OF_A_PHOTO/SUCCESS';
export const FETCH_SIZES_OF_A_PHOTO_FAILURE = 'FETCH_SIZES_OF_A_PHOTO/FAILURE';

export const SELECT_VIEW_SIZE = 'SELECT_VIEW_SIZE';


/*
 * List of actions creators
 ***/
export function hideAlert() {
  return {
    type: HIDE_ALERT
  };
}

export function showAlert(message) {
  return {
    type: SHOW_ALERT,
    payload: { message }
  };
}

export function selectPhotoset(idPhotoset) {
  return {
    type: SELECT_PHOTOSET,
    payload: { photoset_id: idPhotoset }
  }
}

export function fetchListOfPhotosets() {
  const url = getUrlListOfPhotosets();
  const meta = {};
  return doFetch(FETCH_LIST_OF_PHOTOSETS, url, meta);
}

export function fetchPhotosByPhotoset(idPhotoset) {
  const url = getUrlPhotosByPhotoset(idPhotoset);
  const meta = {idPhotoset};
  return doFetch(FETCH_PHOTOS_BY_PHOTOSET, url, meta);
}

export function getSizesOfAllPhotos(updateSizesOfPhotos) {
  return {
    type: GET_SIZES_OF_ALL_PHOTOS,
    payload: { updateSizesOfPhotos }
  }
}

export function fetchSizesOfAPhoto(idPhoto) {
  const url = getUrlSizesOfPhoto(idPhoto);
  const meta = {idPhoto};
  return doFetch(FETCH_SIZES_OF_A_PHOTO, url, meta);
}

export function selectViewSize(currentViewSize) {
  return {
    type: SELECT_VIEW_SIZE,
    payload: { currentViewSize }
  }
}

/*
 * Auxiliar functions of actions creators
 ***/
export function doFetch(type, url, meta={}, method='GET') {

  // Redux Thunk will inject dispatch here:
  return (dispatch, getState) => {

    // Reducers may handle this to set a flag like isFetching
    dispatch({
      type: type + '/REQUEST',
      payload: { meta }
    })

    //The response function
    const theResponse = (response) => {
      dispatch({
        type: type + '/SUCCESS',
        payload: { response, meta }
      });

      //Hide alert
      dispatch(hideAlert());
    }

    //The error function
    const theError = (error) => {
      dispatch({
        type: type + '/FAILURE',
        payload: error
      });

      //Show alert
      const message = error.message + " with " + url;
      dispatch(showAlert(message));
      throw error;
    }

    // Perform the actual API call
    switch(method){
      case 'GET':
        return axios.get(url).then(theResponse, theError);
      case 'POST':
        return axios.post(url, qs.stringify(meta)).then(theResponse, theError);
      default:
        return null;
    }
  }
}

export function getUrlListOfPhotosets() {
  return `${API_ROOT_URL}/${API_PHOTOSETS_GETLIST}`;
}

export function getUrlPhotosByPhotoset(idPhotoset) {
  return `${API_ROOT_URL}/${API_PHOTOSETS_GETPHOTOS}?photoset_id=${idPhotoset}`;
}

export function getUrlSizesOfPhoto(idPhoto) {
  return `${API_ROOT_URL}/${API_PHOTOS_GETSIZES}?photo_id=${idPhoto}`;
}
