import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuItemLink = (item, className) => {
  return (
    <Link to={item.path}
      className={
        classNames(
          'side-nav-link-ref',
          'side-sub-nav-link',
          className)
      }>
      {item.icon && <i className={item.icon}></i>}
      {item.badge &&
        <span className={`badge badge-${item.badge.variant} float-right`}>
          {item.badge.text}
        </span>
      }
      <span> {item.name} </span>
    </Link>
  );
};

MenuItemLink.propTypes = {
  item: PropTypes.object,
  classNames: PropTypes.string,
};

export default MenuItemLink;
