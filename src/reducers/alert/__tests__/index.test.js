import { SHOW_ALERT, HIDE_ALERT } from '../../../actions'
import reducer from '../';

describe('Alert Reducer', () => {

  it('Default value', () => {
    const action = {};
    const initialState = undefined;
    const expectedState = "";
    expect(reducer(initialState, action)).toEqual(expectedState);
  })

  it('Action: SHOW_ALERT', () => {
    const action = {
      type: SHOW_ALERT,
      payload: {
        message: "My message"
      }
    };
    const initialState = {};
    const expectedState = "My message";
    expect(reducer(initialState, action)).toEqual(expectedState);
  })

  it('Action: HIDE_ALERT', () => {
    const action = {
      type: HIDE_ALERT
    };
    const initialState = {};
    const expectedState = "";
    expect(reducer(initialState, action)).toEqual(expectedState);
  })

})
