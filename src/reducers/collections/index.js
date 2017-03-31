import { FETCH_LIST_OF_COLLECTIONS_SUCCESS, FETCH_LIST_OF_COLLECTIONS_FAILURE } from '../../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_LIST_OF_COLLECTIONS_SUCCESS:
      if (action.payload && action.payload.response && action.payload.response.data) {
        const { collections } = action.payload.response.data;
        if (collections) return collections;
      }
      return {};

    case FETCH_LIST_OF_COLLECTIONS_FAILURE:
      return {};

    default:
      return state;
  }
}
