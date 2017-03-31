import { SELECT_COLLECTION } from '../../actions';

export default function(state = {
  idCollection: ""
}, action) {
  switch (action.type) {

    case SELECT_COLLECTION:
      const { idCollection } = action.payload;
      return { ...state, idCollection }

    default:
      return state;

  }
}
