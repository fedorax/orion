import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Content = ({ className, children }) => (
  <div className={classNames('content', className)}>{children}</div>
);

Content.propTypes = {
  className: PropTypes.object,
  children: PropTypes.any,
};

export default Content;
