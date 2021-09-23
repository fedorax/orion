import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItemLink from './MenuItemLink';

const MenuItem = () => {
  return (
    <li className={classNames('side-nav-item', className)}>
      <MenuItemLink item={item} className={linkClassName} />
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.any,
  classNames: PropTypes.string,
  linkClassName: PropTypes.string,
};

export default MenuItem;
