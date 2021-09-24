import React from 'react';
import { Navbar } from 'reactstrap';
import SearchNav from './section/SearchNav';
import SidebarToggleBtn from './section/SidebarToggleBtn';

const Header = () => {
  return (
    <Navbar className="header" color="white" light expand>
      <SidebarToggleBtn />
      <SearchNav />

    </Navbar>
  );
};

export default Header;
