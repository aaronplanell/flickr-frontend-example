import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../config/mockStore';
import App from '../App';

jest.mock('../../actions', () => 'actions' );

jest.mock('../sections/Navigation', () => {
  return (props) => <div>{props.children}</div>;
});

jest.mock('../sections/Aside', () => {
  return (props) => <div>{props.children}</div>;
});

jest.mock('../sections/Article', () => {
  return (props) => <div>{props.children}</div>;
});

jest.mock('../sections/Article/Photo', () => {
  return (props) => <div>{props.children}</div>;
});

it('App Renders OK', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App fetchListOfPhotosets={() => {return null}}/>
    </Provider>,
    div);
});

it('App Snapshot matchs', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <App fetchListOfPhotosets={() => {return null}}/>
    </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
