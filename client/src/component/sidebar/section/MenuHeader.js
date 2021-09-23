import React from 'react';
import PropTypes from 'prop-types';

const MenuHeader = (item, key) => {
  return (
    <li className="side-nav-title side-nav-item" key={key}>
      {item}
    </li>
  );
};
MenuHeader.propTypes = {
  item: PropTypes.any,
  key: PropTypes.any,
};

export default MenuHeader;
