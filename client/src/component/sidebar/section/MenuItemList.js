import React from 'react';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import MenuItemWithChildren from './MenuItemWithChildren';

const MenuItemList = () => {
  const menuItemList = require('./menuItemData.json');

  return (

    <ul className="sidebar-nav " id="sidebar-nav">
      {
        menuItemList ?
          menuItemList.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {item.header && (
                  <MenuHeader item={item.header} />
                )}

                {item.children ? (
                  <MenuItemWithChildren item={item} />
                ) : (
                  <MenuItem item={item} />
                )}
              </React.Fragment>
            );
          }) : null
      }
    </ul >
  );
};

export default MenuItemList;
