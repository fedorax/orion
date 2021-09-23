import React from 'react';
import SimpleBar from 'simplebar-react';
import Brand from './section/Brand';
import MenuItemList from './section/MenuItemList';
const SideBar = () => {
  return (
    <nav className="sidebar left-side-menu" >
      <Brand />

      <SimpleBar
        style={{ maxHeight: '100%' }} timeout={500} scrollbarMaxSize={320}>
        <MenuItemList />
      </SimpleBar>

    </nav>
  );
};
export default SideBar;
