import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthGuard = ({
  component: Component,
  layout: Layout,
  activate,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => {
      if (activate && !localStorage.getItem('authUser')) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }
      return (
        <Layout>
          <Component {...props} />
        </Layout>
      );
    }}
  />
);

AuthGuard.propTypes = {
  activate: PropTypes.bool,
  component: PropTypes.any,
  location: PropTypes.object,
  layout: PropTypes.any,
};

export default AuthGuard;
