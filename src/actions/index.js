import axios from 'axios';
import qs from 'qs';

/*
 * Configuration
 ***/
import { API_COLLECTIONS_GETTREE } from '../config/constants';

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
export const FETCH_LIST_OF_COLLECTIONS = 'FETCH_LIST_OF_COLLECTIONS'
export const FETCH_LIST_OF_COLLECTIONS_REQUEST = 'FETCH_LIST_OF_COLLECTIONS/REQUEST';
export const FETCH_LIST_OF_COLLECTIONS_SUCCESS = 'FETCH_LIST_OF_COLLECTIONS/SUCCESS';
export const FETCH_LIST_OF_COLLECTIONS_FAILURE = 'FETCH_LIST_OF_COLLECTIONS/FAILURE';


/*
 * List of actions creators
 ***/
export function hideAlert() {
  return {
    type: HIDE_ALERT
  };
}

export function showAlert(message, description, type, closable, showIcon, showOnlyTheError) {
  return {
    type: SHOW_ALERT,
    payload: { message, description, type, closable, showIcon, showOnlyTheError }
  };
}

export function fetchListOfGalleries() {
  const url = getUrlListOfGalleries();
  const meta = {};
  const errorParams = getDefaultErrorParams();
  return doFetch(FETCH_LIST_OF_COLLECTIONS, url, meta, errorParams);
}

/*
 * Auxiliar functions of actions creators
 ***/
export function doFetch(type, url, meta={}, errorParams={}, method='GET') {

  // Redux Thunk will inject dispatch here:
  return dispatch => {

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
      const { description, typeOfError, closable, showIcon, showOnlyTheError } = errorParams;
      const message = error.message + " with " + url;
      dispatch(showAlert(message, description, typeOfError, closable, showIcon, showOnlyTheError));
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

export function getUrlListOfGalleries() {
  return `${API_ROOT_URL}/${API_COLLECTIONS_GETTREE}`;
}

export function getDefaultErrorParams() {
  return {
    message: "Error",
    typeOfError: "error",
    closable: true,
    showIcon: true,
    showOnlyTheError: false
  }
}
