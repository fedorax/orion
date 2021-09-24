import React from 'react';
import PropTypes from 'prop-types';
import MenuItemLink from './MenuItemLink';
import classNames from 'classnames';

const MenuItem = ({ item }) => {
  const [activate, setActivate] = React.useState(false);
  return (
    <li
      className={classNames('sidebar-item', (activate) ? 'active' : '')}
      onClick={() => {
        setActivate(!activate);
      }} >
      <MenuItemLink item={item} />
    </li>
  );
};

MenuItem.propTypes = {
  item: PropTypes.any,
};

export default MenuItem;
