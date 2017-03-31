import { FETCH_PHOTOS_BY_COLLECTION_SUCCESS, FETCH_PHOTOS_BY_COLLECTION_FAILURE } from '../../actions';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PHOTOS_BY_COLLECTION_SUCCESS:
      if (action.payload && action.payload.response && action.payload.response.data) {
        const { stat, collection } = action.payload.response.data;
        if (stat === 'ok') return collection.iconphotos.photo;
      }
      return {};

    case FETCH_PHOTOS_BY_COLLECTION_FAILURE:
      return {};

    default:
      return state;
  }
}
