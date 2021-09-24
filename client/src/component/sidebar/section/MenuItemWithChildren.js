import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import { Collapse } from 'reactstrap';
import classNames from 'classnames';

const MenuItemWithChildren = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const [activate, setActivate] = React.useState(false);
  console.log(item);
  return (
    <li
      className={
        classNames('sidebar-item', (activate) ? 'active' : '')}>
      <span
        data-toggle="collapse"
        className="sidebar-link"
        onClick={() => {
          setActivate(!activate);
          setOpen(!open);
        }}
        aria-expanded={open ? 'true' : 'false'}
      >
        {item.icon && <i className={item.icon}></i>}

        <span> {item.name} </span>
        {item.badge && (
          <span className={`badge badge-${item.badge.variant} float-right`}>
            {item.badge.text}
          </span>
        )}
      </span>
      <Collapse isOpen={open}>
        <ul className="sidebar-dropdown list-unstyled"
          aria-expanded='activate'>
          {item.children.map((child, i) => {
            return (
              <React.Fragment key={i}>
                <MenuItem item={child} />
              </React.Fragment>
            );
          })}
        </ul>
      </Collapse>
    </li >

  );
};
MenuItemWithChildren.propTypes = {
  item: PropTypes.object,
};
export default MenuItemWithChildren;
