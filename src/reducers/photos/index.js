import { FETCH_PHOTOS_BY_PHOTOSET_SUCCESS, FETCH_PHOTOS_BY_PHOTOSET_FAILURE } from '../../actions';
import { FETCH_SIZES_OF_A_PHOTO_SUCCESS, FETCH_SIZES_OF_A_PHOTO_FAILURE } from '../../actions';
import { DEFAULT_VIEW_SIZE } from '../../config/constants'

export const updateSizes = (photo, idPhoto, sizes) =>{
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

export const selectorOfPhotosBySize = (photos, size = DEFAULT_VIEW_SIZE) => {
  return photos.map ( photo => {
    const { id, sizes } = photo;
    if (sizes && sizes.size && sizes.size.length > size && sizes.size[size].hasOwnProperty('source')) {
      return {
        id,
        source: sizes.size[size].source,
        original: sizes.size[sizes.size.length-1].source
      };
    } else {
      return null;
    }
  }).filter( photo => photo !== null);
}
