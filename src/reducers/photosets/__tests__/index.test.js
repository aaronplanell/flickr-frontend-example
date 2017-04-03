import { FETCH_LIST_OF_PHOTOSETS_SUCCESS, FETCH_LIST_OF_PHOTOSETS_FAILURE } from '../../../actions'
import reducer from '../';

describe('Photoset Reducer', () => {

  it('Default value', () => {
    const action = {};
    const initialState = undefined;
    const expectedState = {};
    expect(reducer(initialState, action)).toEqual(expectedState);
  })

  it('Action: FETCH_LIST_OF_PHOTOSETS_SUCCESS', () => {
    const action = {
      type: FETCH_LIST_OF_PHOTOSETS_SUCCESS,
      payload: {
        response: {
          data: {
            stat: 'ok',
            photosets: {
              photoset: [
                {title: {_content: 'qwerty'}},
                {title: {_content: 'asdfgh'}},
                {title: {_content: 'zxcvbn'}}
              ]
            }
          }
        }
      }
    };
    const initialState = undefined;
    const expectedState = {
        "photoset": [
          {title: {_content: 'asdfgh'}},
          {title: {_content: 'qwerty'}},
          {title: {_content: 'zxcvbn'}}
        ]
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  })

  it('Action: FETCH_LIST_OF_PHOTOSETS_FAILURE', () => {
    const action = {
      type: FETCH_LIST_OF_PHOTOSETS_FAILURE
    };
    const initialState = { a: 1, b: 2, c: 3 };
    const expectedState = {};
    expect(reducer(initialState, action)).toEqual(expectedState);
  })

})
