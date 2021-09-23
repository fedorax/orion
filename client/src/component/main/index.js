import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Main = ({ className, children }) => (
  <div className={classNames('main', className)}>{children}</div>
);

Main.propTypes = {
  className: PropTypes.object,
  children: PropTypes.any,
};

export default Main;
