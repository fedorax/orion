import React from 'react';
import ReactDOM from 'react-dom';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { Provider } from 'react-redux';

import store from './redux/store';
import './index.css';
import reportWebVitals from './reportWebVitals';
const LayzApp = React.lazy(() => import('./app'));
const app = (
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback={<span>Loading ...</span>}>
        <LayzApp />
      </React.Suspense>
    </Provider>
  </React.StrictMode >
);
ReactDOM.render(app, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
