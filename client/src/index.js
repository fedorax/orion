import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './redux/store';
import './index.css';
import reportWebVitals from './reportWebVitals';
const LayzApp = React.lazy(() => import('./app'));
const app = (
  <React.StrictMode>
    <Provider store={store}>
      <React.Suspense fallback={<h1>Loading ...</h1>}>
        <LayzApp />
      </React.Suspense>
    </Provider>
  </React.StrictMode>
);
ReactDOM.render(app, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
