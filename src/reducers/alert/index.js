import { SHOW_ALERT, HIDE_ALERT } from '../../actions';

export default function(state = "", action) {
  switch (action.type) {

    case SHOW_ALERT:
      return action.payload.message;

    case HIDE_ALERT:
      return "";

    default:
      return state;
  }
}
