import { SELECT_PHOTOSET } from '../../actions';

export default function(state = {
  idPhotoset: ""
}, action) {
  switch (action.type) {

    case SELECT_PHOTOSET:
      const { idPhotoset } = action.payload;
      return { ...state, idPhotoset }

    default:
      return state;

  }
}
