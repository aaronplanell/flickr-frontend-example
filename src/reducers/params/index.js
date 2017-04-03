import { SELECT_PHOTOSET, GET_SIZES_OF_ALL_PHOTOS, SELECT_VIEW_SIZE } from '../../actions';
import { DEFAULT_VIEW_SIZE } from '../../config/constants'

export default function(state = {
  idPhotoset: "",
  updateSizesOfPhotos: false,
  currentViewSize: DEFAULT_VIEW_SIZE
}, action) {
  switch (action.type) {

    case SELECT_PHOTOSET:
      const { idPhotoset } = action.payload;
      return { ...state, idPhotoset }

    case GET_SIZES_OF_ALL_PHOTOS:
      const { updateSizesOfPhotos } = action.payload;
      return { ...state, updateSizesOfPhotos }

    case SELECT_VIEW_SIZE:
      const { currentViewSize } = action.payload;
      return { ...state, currentViewSize }

    default:
      return state;

  }
}
