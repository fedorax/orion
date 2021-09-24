import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Badge } from 'reactstrap';

const MenuItemLink = ({ item, handleItemClick }) => {
  return (
    <NavLink to="/home" // {item.path}
      className="sidebar-link"
      onClick={handleItemClick}
      activeClassName="active">
      {item.icon && <i className={item.icon}></i>}
      <span> {item.name} </span>
      {item.badge &&
        <Badge color={item.badge.variant} size={18} className="sidebar-badge">
          {item.badge.text}
        </Badge>
      }
    </NavLink>
  );
};

MenuItemLink.propTypes = {
  item: PropTypes.object,
  handleItemClick: PropTypes.func,
};

export default MenuItemLink;
