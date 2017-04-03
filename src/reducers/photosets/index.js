import { FETCH_LIST_OF_PHOTOSETS_SUCCESS, FETCH_LIST_OF_PHOTOSETS_FAILURE } from '../../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LIST_OF_PHOTOSETS_SUCCESS:
      if (action.payload && action.payload.response && action.payload.response.data) {
        const { stat, photosets } = action.payload.response.data;
        if (stat === 'ok') return photosets;
      }
      return {};

    case FETCH_LIST_OF_PHOTOSETS_FAILURE:
      return {};

    default:
      return state;
  }
}
