import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import SignupContainer from './containers/SignupContainer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

render(
  <Provider store={store}>
    <SignupContainer />
  </Provider>,
  document.getElementById('signup'),

);
