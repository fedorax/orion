/* eslint-disable react/display-name */
import React from 'react';
import NonAuthLayout from 'layout/NonAuthLayout';

import { Redirect } from 'react-router-dom';
const indexRoute = {
  path: '/',
  layout: NonAuthLayout,
  exact: true,
  component: () => (<Redirect to='/home' />),
};
export default indexRoute;
