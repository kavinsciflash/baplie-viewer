import 'fontsource-roboto';
import './pages/App.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import ThemeApp from './Theme';

ReactDOM.render(
  <Provider store={store}>
    <ThemeApp />
  </Provider>,
  document.querySelector('#root')
);
