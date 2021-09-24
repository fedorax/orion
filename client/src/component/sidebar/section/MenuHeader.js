import React from 'react';
import PropTypes from 'prop-types';

const MenuHeader = ({ item }) => {
  return (
    <li className="sidebar-header" >
      {item}
    </li>
  );
};
MenuHeader.propTypes = {
  item: PropTypes.string,
};

export default MenuHeader;
