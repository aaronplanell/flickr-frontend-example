import { FETCH_PHOTOS_BY_PHOTOSET_SUCCESS, FETCH_PHOTOS_BY_PHOTOSET_FAILURE } from '../../actions';
import { FETCH_SIZES_OF_A_PHOTO_SUCCESS, FETCH_SIZES_OF_A_PHOTO_FAILURE } from '../../actions';

const updateSizes = (photo, idPhoto, sizes) =>{
  if (idPhoto !== photo.id) {
    return photo;
  } else {
    return {...photo, sizes};
  }
}

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

    case FETCH_SIZES_OF_A_PHOTO_SUCCESS:
      if (action.payload && action.payload.response && action.payload.response.data) {
        const { stat, sizes } = action.payload.response.data;
        if (stat === 'ok') {
          const { idPhoto } = action.payload.meta;
          return state.map( photo =>
            updateSizes(photo, idPhoto, sizes)
          );
        }
      }
      return state;

    case FETCH_SIZES_OF_A_PHOTO_FAILURE:
      const { idPhoto } = action.payload.meta;
      return state.map( photo =>
        updateSizes(photo, idPhoto, {})
      );

    default:
      return state;
  }
}
