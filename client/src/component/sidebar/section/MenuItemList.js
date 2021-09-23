import React from 'react';
import MenuHeader from './MenuHEader';
import MenuItem from './MenuItem';
import MenuItemWithChildren from './MenuItemWithChildren';

const MenuItemList = () => {
  return (
    <div className={classNames({ 'topbar-nav': isHorizontal })}>
      {menuItemList && menuItemList.length ? (
        <ul className="metismenu side-nav" id="menu-bar">
          {menuItemList.map((item, i) => {
            return (
              <React.Fragment key={item.id}>
                {item.header && !isHorizontal && (
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
