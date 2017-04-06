import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './index.css';

import App from './components/App';
import About from './components/About';
import configureStore from "./config/store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/about" component={About}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// Hot reloading of the Store of Redux
if (module.hot && process.env.NODE_ENV==="development") {
  module.hot.accept();
  const NextApp = require('./components/App').default;
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={NextApp} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
}
