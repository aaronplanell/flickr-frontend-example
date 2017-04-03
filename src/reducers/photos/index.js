import { FETCH_PHOTOS_BY_PHOTOSET_SUCCESS, FETCH_PHOTOS_BY_PHOTOSET_FAILURE } from '../../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PHOTOS_BY_PHOTOSET_SUCCESS:
      if (action.payload && action.payload.response && action.payload.response.data) {
        const { stat, photoset } = action.payload.response.data;
        if (stat === 'ok') return photoset.photo;
      }
      return {};

    case FETCH_PHOTOS_BY_PHOTOSET_FAILURE:
      return {};

    default:
      return state;
  }
}
