import configureMockStore from 'redux-mock-store';
import mockStoreData from './mockStoreData';
import getMiddlewaresThunk from './middlewares';

const mockStore = configureMockStore(getMiddlewaresThunk);
const store = mockStore(mockStoreData);

export default store;
