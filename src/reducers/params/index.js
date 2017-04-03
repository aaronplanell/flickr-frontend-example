import { SELECT_PHOTOSET, GET_SIZES_OF_ALL_PHOTOS } from '../../actions';

export default function(state = {
  idPhotoset: "",
  updateSizesOfPhotos: false
}, action) {
  switch (action.type) {

    case SELECT_PHOTOSET:
      const { idPhotoset } = action.payload;
      return { ...state, idPhotoset }

    case GET_SIZES_OF_ALL_PHOTOS:
      const { updateSizesOfPhotos } = action.payload;
      return { ...state, updateSizesOfPhotos }

    default:
      return state;

  }
}
