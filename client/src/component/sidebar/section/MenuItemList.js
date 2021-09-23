import React from 'react';
import classNames from 'classnames';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import MenuItemWithChildren from './MenuItemWithChildren';

const MenuItemList = () => {
  const menuItemList = [];
  return (
    <div className={classNames({ 'topbar-nav': false })}>
      {menuItemList && menuItemList.length ? (
        <ul className="metismenu side-nav" id="menu-bar">
          {menuItemList.map((item, i) => {
            return (
              <React.Fragment key={item.id}>
                {item.header && (
                  <MenuHeader key={i + '-el'} item={item.header} />
                )}

                {item.children ? (
                  <MenuItemWithChildren
                    item={item}
                    subMenuClassNames="side-nav-second-level"
                    activatedMenuItemIds={activatedKeys}
                    linkClassNames="side-nav-link"
                  />
                ) : (
                  <MenuItem
                    item={item}
                    className={classNames({
                      'mm-active': activatedKeys.indexOf(item.id) >= 0,
                    })}
                    linkClassName="side-nav-link"
                  />
                )}
              </React.Fragment>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default MenuItemList;
