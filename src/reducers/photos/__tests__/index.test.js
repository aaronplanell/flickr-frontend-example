import { FETCH_PHOTOS_BY_PHOTOSET_SUCCESS, FETCH_PHOTOS_BY_PHOTOSET_FAILURE } from '../../../actions';
import { FETCH_SIZES_OF_A_PHOTO_SUCCESS, FETCH_SIZES_OF_A_PHOTO_FAILURE } from '../../../actions';
import reducer from '../';


describe('Photoset Reducer', () => {

  it('Default value', () => {
    const action = {};
    const initialState = undefined;
    const expectedState = [];
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: FETCH_PHOTOS_BY_PHOTOSET_SUCCESS', () => {
    const action = {
      type: FETCH_PHOTOS_BY_PHOTOSET_SUCCESS,
      payload: {
        response: {
          data: {
            stat: 'ok',
            photoset: {
              photo: { a: 1, b: 2, c: 3 }
            }
          }
        }
      }
    };
    const initialState = undefined;
    const expectedState = { a: 1, b: 2, c: 3 };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: FETCH_PHOTOS_BY_PHOTOSET_FAILURE', () => {
    const action = {
      type: FETCH_PHOTOS_BY_PHOTOSET_FAILURE
    };
    const initialState = { a: 1, b: 2, c: 3 };
    const expectedState = {};
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: FETCH_SIZES_OF_A_PHOTO_SUCCESS', () => {
    const action = {
      type: FETCH_SIZES_OF_A_PHOTO_SUCCESS,
      payload: {
        meta: {
          idPhoto: 2
        },
        response: {
          data: {
            stat: 'ok',
            sizes: { a: 1, b: 2, c: 3 }
          }
        }
      }
    };
    const initialState = [ {id: 1}, {id: 2}, {id: 3} ];
    const expectedState = [
      {"id": 1},
      {"id": 2, "sizes": {"a": 1, "b": 2, "c": 3}},
      {"id": 3}
    ];
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('Action: FETCH_SIZES_OF_A_PHOTO_FAILURE', () => {
    const action = {
      type: FETCH_SIZES_OF_A_PHOTO_FAILURE,
      payload: {
        meta: {
          idPhoto: 2
        }
      }
    };
    const initialState = [
      {"id": 1},
      {"id": 2, "sizes": {"a": 1, "b": 2, "c": 3}},
      {"id": 3}
    ];
    const expectedState = [
      {"id": 1},
      {"id": 2, "sizes": {}},
      {"id": 3}
    ];
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

})
