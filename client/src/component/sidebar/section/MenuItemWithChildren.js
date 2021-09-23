import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import MenuItem from './MenuItem';

const MenuItemWithChildren = ({
  item,
  linkClassNames,
  subMenuClassNames,
  activatedMenuItemIds,
}) => {
  return (
    <li
      className={classNames('side-nav-item', {
        'mm-active': activatedMenuItemIds.indexOf(item.id) >= 0,
        'active': activatedMenuItemIds.indexOf(item.id) >= 0,
      })}>
      <Link
        to="#"
        className={classNames('has-arrow', 'side-sub-nav-link', linkClassNames)}
        aria-expanded={activatedMenuItemIds.indexOf(item.id) >= 0}>
        {item.icon && <i className={item.icon}></i>}
        {item.badge && (
          <span className={`badge badge-${item.badge.variant} float-right`}>
            {item.badge.text}
          </span>
        )}
        <span> {item.name} </span>
      </Link>

      <ul
        className={classNames(subMenuClassNames, 'mm-collapse', {
          'mm-collapsed mm-show': activatedMenuItemIds.indexOf(item.id) >= 0,
        })}
        aria-expanded={activatedMenuItemIds.indexOf(item.id) >= 0}>
        {item.children.map((child, i) => {
          return (
            <React.Fragment key={i}>
              {child.children ? (
                <MenuItemWithChildren
                  item={child}
                  linkClassNames=""
                  activatedMenuItemIds={activatedMenuItemIds}
                  subMenuClassNames="side-nav-third-level"
                />
              ) : (
                <MenuItem
                  item={child}
                  className={classNames(
                    {
                      'mm-active':
                        activatedMenuItemIds.indexOf(child.id) >= 0,
                    },
                  )}
                  linkClassName=""
                />
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </li>

  );
};
MenuItemWithChildren.propTypes = {
  item: PropTypes.object,
  linkClassNames: PropTypes.string,
  subMenuClassNames: PropTypes.string,
  activatedMenuItemIds: PropTypes.any,
};
export default MenuItemWithChildren;
